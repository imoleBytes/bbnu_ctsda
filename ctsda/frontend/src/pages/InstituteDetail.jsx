import { useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { ExternalLink, Mail, Phone, MapPin } from 'lucide-react';

// Mock data (in a real application, this would come from an API)
const instituteData = {
  id: 1,
  name: "Global Education Institute",
  logo: "/img/logos/3m.svg?height=100&width=100&text=GEI",
  description: "Global Education Institute is a leading center for higher education, committed to fostering innovation, critical thinking, and global citizenship. With a diverse range of programs and a focus on practical skills, GEI prepares students for success in an ever-changing world.",
  accreditationStatus: "Accredited",
  accreditationValidUntil: "2025-12-31",
  programs: [
    "Bachelor of Science in Computer Science",
    "Master of Business Administration",
    "Bachelor of Arts in International Relations",
    "Ph.D. in Environmental Science"
  ],
  contactInfo: {
    email: "info@globaleducationinstitute.edu",
    phone: "+1 (555) 123-4567",
    address: "123 Learning Avenue, Knowledge City, ED 12345, USA"
  },
  website: "https://www.globaleducationinstitute.edu",
  socialMedia: {
    linkedin: "https://www.linkedin.com/school/globaleducationinstitute",
    twitter: "https://twitter.com/GlobalEduInst"
  },
  facultyCount: 150,
  studentCount: 5000,
  foundedYear: 1985,
  facilities: [
    "State-of-the-art laboratories",
    "Modern library with extensive digital resources",
    "Sports complex",
    "Student housing"
  ]
};

function InstituteDetail() {
  const { id } = useParams();
  // In a real application, you would fetch the institute data based on the id
  // For now, we'll use our mock data
  const institute = instituteData;

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="p-6 sm:p-10">
            <div className="flex flex-col sm:flex-row items-center sm:items-start mb-6">
              <img src={institute.logo} alt={`${institute.name} logo`} className="w-32 h-32 object-contain mb-4 sm:mb-0 sm:mr-6" />
              <div>
                <h1 className="text-3xl font-bold mb-2">{institute.name}</h1>
                <Badge variant={institute.accreditationStatus === "Accredited" ? "success" : "warning"}>
                  {institute.accreditationStatus}
                </Badge>
                <p className="text-sm text-gray-500 mt-1">Valid until: {institute.accreditationValidUntil}</p>
              </div>
            </div>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>About the Institute</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{institute.description}</p>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Programs Offered</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5">
                  {institute.programs.map((program, index) => (
                    <li key={index} className="mb-1">{program}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="flex items-center"><Mail className="mr-2" /> {institute.contactInfo.email}</p>
                  <p className="flex items-center"><Phone className="mr-2" /> {institute.contactInfo.phone}</p>
                  <p className="flex items-center"><MapPin className="mr-2" /> {institute.contactInfo.address}</p>
                </div>
                <div className="mt-4">
                  <Button asChild variant="outline" className="mr-2">
                    <a href={institute.website} target="_blank" rel="noopener noreferrer">
                      Visit Website <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="mr-2">
                    <a href={institute.socialMedia.linkedin} target="_blank" rel="noopener noreferrer">
                      LinkedIn
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href={institute.socialMedia.twitter} target="_blank" rel="noopener noreferrer">
                      Twitter
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Additional Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold">Founded</h3>
                    <p>{institute.foundedYear}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Faculty Count</h3>
                    <p>{institute.facultyCount}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Student Count</h3>
                    <p>{institute.studentCount}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Facilities</h3>
                    <ul className="list-disc pl-5">
                      {institute.facilities.map((facility, index) => (
                        <li key={index} className="text-sm">{facility}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstituteDetail;

