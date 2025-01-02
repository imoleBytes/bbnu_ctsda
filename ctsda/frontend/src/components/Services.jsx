import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Services() {
  return (
    <div className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Institution Accreditation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                ACTD institutional accreditation is a system of review of institutions according to ACTD standards. This process evaluates the whole institution including its educational programs and support services.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Program Accreditation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Our accreditation services are the process by which the professional training program in various disciplines can be evaluated. When the program meets our ACTD standards and their objectives, program complies with these standards, our accreditation for the program certificate is granted.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Institution Evaluation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                This evaluation form is only for institutions accredited by ACTD. When you are part of the ACTD global accredited network, if you have followed a training course or study program at an educational institution accredited by ACTD, please fill out the evaluation form.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

