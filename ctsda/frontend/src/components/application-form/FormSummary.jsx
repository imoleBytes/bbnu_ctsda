import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';

export default function FormSummary({ data }) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold mb-4">Application Summary</h2>
        
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Institution Details</CardTitle>
            </CardHeader>
            <CardContent>
              <dl className="grid grid-cols-2 gap-4">
                <div>
                  <dt className="font-medium">Legal Status</dt>
                  <dd className="text-gray-600">{data.legalStatus}</dd>
                </div>
                <div>
                  <dt className="font-medium">Registration Number</dt>
                  <dd className="text-gray-600">{data.registrationNumber}</dd>
                </div>
                <div>
                  <dt className="font-medium">Country of Registration</dt>
                  <dd className="text-gray-600">{data.countryOfRegistration}</dd>
                </div>
              </dl>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <dl className="grid grid-cols-2 gap-4">
                <div>
                  <dt className="font-medium">Contact Person</dt>
                  <dd className="text-gray-600">{data.contactPerson.name}</dd>
                </div>
                <div>
                  <dt className="font-medium">Email</dt>
                  <dd className="text-gray-600">{data.contactPerson.email}</dd>
                </div>
                <div>
                  <dt className="font-medium">Phone</dt>
                  <dd className="text-gray-600">{data.contactPerson.phone}</dd>
                </div>
              </dl>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Training Details</CardTitle>
            </CardHeader>
            <CardContent>
              <dl className="grid grid-cols-2 gap-4">
                <div>
                  <dt className="font-medium">Type of Establishment</dt>
                  <dd className="text-gray-600">{data.typeOfEstablishment}</dd>
                </div>
                <div>
                  <dt className="font-medium">Annual Training Programs</dt>
                  <dd className="text-gray-600">{data.annualTrainingPrograms}</dd>
                </div>
              </dl>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Resources and Costs</CardTitle>
            </CardHeader>
            <CardContent>
              <dl className="grid grid-cols-2 gap-4">
                <div>
                  <dt className="font-medium">Total Staff</dt>
                  <dd className="text-gray-600">{data.totalStaff}</dd>
                </div>
                <div>
                  <dt className="font-medium">Annual Costs</dt>
                  <dd className="text-gray-600">{data.annualCosts}</dd>
                </div>
              </dl>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Documents</CardTitle>
            </CardHeader>
            <CardContent>
              <dl className="space-y-2">
                <div>
                  <dt className="font-medium">Local Accreditation Documents</dt>
                  <dd className="text-gray-600">
                    {data.localAccreditationDocs.length} files selected
                  </dd>
                </div>
                <div>
                  <dt className="font-medium">International Accreditation Documents</dt>
                  <dd className="text-gray-600">
                    {data.internationalAccreditationDocs.length} files selected
                  </dd>
                </div>
              </dl>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

