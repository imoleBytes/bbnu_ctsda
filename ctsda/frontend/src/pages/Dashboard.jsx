import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { CheckCircle, XCircle, Clock } from 'lucide-react';
import instituteData from '../data/instituteData.json';

export default function Dashboard() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [activeTab, setActiveTab] = useState('overview');
  const [newCtsdaCode, setNewCtsdaCode] = useState('');
  const [selectedInstitute, setSelectedInstitute] = useState('');

  // Calculate statistics
  const totalInstitutes = instituteData.length;
  const accreditedInstitutes = instituteData.filter(inst => inst.accreditationStatus === 'Accredited').length;
  const expiredInstitutes = instituteData.filter(inst => inst.accreditationStatus === 'Expired').length;
  const pendingInstitutes = instituteData.filter(inst => inst.accreditationStatus === 'Pending').length;

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = instituteData.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleAssignCtsdaCode = () => {
    // This is where you would typically make an API call to update the CTSDA code
    console.log(`Assigning CTSDA code ${newCtsdaCode} to institute ${selectedInstitute}`);
    // Reset form
    setNewCtsdaCode('');
    setSelectedInstitute('');
  };

  const handleRenewAccreditation = (instituteId) => {
    // This is where you would typically make an API call to renew the accreditation
    console.log(`Renewing accreditation for institute with ID ${instituteId}`);
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">CTSDA Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Institutes</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalInstitutes}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Accredited</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{accreditedInstitutes}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Expired</CardTitle>
            <XCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{expiredInstitutes}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pendingInstitutes}</div>
          </CardContent>
        </Card>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="assign-code">Assign CTSDA Code</TabsTrigger>
          <TabsTrigger value="renew-accreditation">Renew Accreditation</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Institutes and Programs</CardTitle>
              <CardDescription>A list of all registered institutes and programs.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Country</TableHead>
                    <TableHead>CTSDA Code</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Valid Until</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {currentItems.map((institute) => (
                    <TableRow key={institute.id}>
                      <TableCell className="font-medium">{institute.name}</TableCell>
                      <TableCell>{institute.typeOfEstablishment}</TableCell>
                      <TableCell>{institute.countryOfRegistration}</TableCell>
                      <TableCell>{institute.ctsdaCode}</TableCell>
                      <TableCell>{institute.accreditationStatus}</TableCell>
                      <TableCell>{institute.validUntil || 'N/A'}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="flex justify-center mt-4">
                {Array.from({ length: Math.ceil(instituteData.length / itemsPerPage) }, (_, i) => (
                  <Button
                    key={i}
                    onClick={() => paginate(i + 1)}
                    variant={currentPage === i + 1 ? 'default' : 'outline'}
                    className="mx-1"
                  >
                    {i + 1}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="assign-code">
          <Card>
            <CardHeader>
              <CardTitle>Assign CTSDA Code</CardTitle>
              <CardDescription>Assign a CTSDA code to an institute or program.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={(e) => { e.preventDefault(); handleAssignCtsdaCode(); }} className="space-y-4">
                <div>
                  <Label htmlFor="institute">Select Institute</Label>
                  <Select value={selectedInstitute} onValueChange={setSelectedInstitute}>
                    <SelectTrigger id="institute">
                      <SelectValue placeholder="Select an institute" />
                    </SelectTrigger>
                    <SelectContent>
                      {instituteData.map((institute) => (
                        <SelectItem key={institute.id} value={institute.id.toString()}>
                          {institute.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="ctsdaCode">CTSDA Code</Label>
                  <Input
                    id="ctsdaCode"
                    value={newCtsdaCode}
                    onChange={(e) => setNewCtsdaCode(e.target.value)}
                    placeholder="Enter CTSDA code"
                  />
                </div>
                <Button type="submit">Assign Code</Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="renew-accreditation">
          <Card>
            <CardHeader>
              <CardTitle>Renew Accreditation</CardTitle>
              <CardDescription>Renew accreditation for institutes or programs.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>CTSDA Code</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Valid Until</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {instituteData.map((institute) => (
                    <TableRow key={institute.id}>
                      <TableCell className="font-medium">{institute.name}</TableCell>
                      <TableCell>{institute.ctsdaCode}</TableCell>
                      <TableCell>{institute.accreditationStatus}</TableCell>
                      <TableCell>{institute.validUntil || 'N/A'}</TableCell>
                      <TableCell>
                        <Button onClick={() => handleRenewAccreditation(institute.id)}>
                          Renew
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

