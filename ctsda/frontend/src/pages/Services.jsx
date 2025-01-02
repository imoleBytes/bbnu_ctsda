import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';

function Services() {
  const services = [
    {
      title: "Institution Accreditation",
      description: "Comprehensive evaluation of educational institutions to ensure they meet CTSDA's rigorous standards for quality education and administration.",
      details: "Our institution accreditation process involves a thorough review of an institution's mission, governance, programs, faculty, resources, and student outcomes. We work closely with institutions to identify areas for improvement and provide guidance on enhancing overall educational quality."
    },
    {
      title: "Program Accreditation",
      description: "In-depth assessment of specific educational programs to verify their alignment with industry standards and educational best practices.",
      details: "Program accreditation focuses on individual courses of study within an institution. We evaluate curriculum design, learning outcomes, faculty qualifications, and student support services to ensure programs are preparing students effectively for their chosen fields."
    },
    {
      title: "Continuing Education Accreditation",
      description: "Evaluation and accreditation of professional development and continuing education programs to ensure they meet the evolving needs of various industries.",
      details: "Our continuing education accreditation service helps training providers and professional organizations maintain high standards in their ongoing education offerings. We assess program relevance, instructional methods, and learner outcomes to ensure professionals receive quality, up-to-date training."
    },
    {
      title: "Accreditation Consulting",
      description: "Expert guidance and support for institutions and programs seeking to navigate the accreditation process successfully.",
      details: "Our experienced consultants provide personalized assistance to help institutions prepare for accreditation. We offer gap analysis, documentation review, and strategic planning services to streamline the accreditation process and increase the likelihood of a successful outcome."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col h-full">
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-600 mb-4">{service.description}</p>
                <p className="text-sm text-gray-500">{service.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to elevate your educational standards?</h2>
          <p className="text-gray-600 mb-8">Start your accreditation journey with CTSDA today and join our network of excellence in education.</p>
          <Button asChild className="bg-primary text-white hover:bg-primary-dark">
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Services;

