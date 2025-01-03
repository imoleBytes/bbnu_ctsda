import React from 'react';
import { Label } from '../../components/ui/label';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';

export default function InstitutionDetails({ data, updateData }) {
  const handleChange = (field, value) => {
    updateData({ [field]: value });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold mb-4">Institution Details</h2>
        <div className="space-y-4">
          <div>
            <Label htmlFor="legalStatus">Legal Status</Label>
            <Input
              id="legalStatus"
              value={data.legalStatus}
              onChange={(e) => handleChange('legalStatus', e.target.value)}
              placeholder="Enter legal status"
            />
          </div>
          
          <div>
            <Label htmlFor="registrationNumber">Registration Number</Label>
            <Input
              id="registrationNumber"
              value={data.registrationNumber}
              onChange={(e) => handleChange('registrationNumber', e.target.value)}
              placeholder="Enter registration number"
            />
          </div>
          
          <div>
            <Label htmlFor="countryOfRegistration">Country of Registration</Label>
            <Select
              value={data.countryOfRegistration}
              onValueChange={(value) => handleChange('countryOfRegistration', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="ca">Canada</SelectItem>
                {/* Add more countries */}
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="shortDescription">Short Description</Label>
            <Textarea
              id="shortDescription"
              value={data.shortDescription}
              onChange={(e) => handleChange('shortDescription', e.target.value)}
              placeholder="Provide a brief description of your institution"
              rows={4}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

