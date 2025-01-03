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
              <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                <div>
                  <dt className="font-medium">Description</dt>
                  <dd className="text-gray-600">{data.shortDescription}</dd>
                </div>
              </dl>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <dt className="font-medium">Physical Address</dt>
                  <dd className="text-gray-600">{data.physicalAddress}</dd>
                </div>
                <div>
                  <dt className="font-medium">Postal Address</dt>
                  <dd className="text-gray-600">{data.postalAddress}</dd>
                </div>
                <div>
                  <dt className="font-medium">Contact Person Name</dt>
                  <dd className="text-gray-600">{data.contactPerson.name}</dd>
                </div>
                <div>
                  <dt className="font-medium">Position</dt>
                  <dd className="text-gray-600">{data.contactPerson.position}</dd>
                </div>
                <div>
                  <dt className="font-medium">Email</dt>
                  <dd className="text-gray-600">{data.contactPerson.email}</dd>
                </div>
                <div>
                  <dt className="font-medium">Phone</dt>
                  <dd className="text-gray-600">{data.contactPerson.phone}</dd>
                </div>
                <div>
                  <dt className="font-medium">Mobile Phone (WhatsApp)</dt>
                  <dd className="text-gray-600">{data.mobilePhone}</dd>
                </div>
              </dl>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Training Details</CardTitle>
            </CardHeader>
            <CardContent>
              <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <dt className="font-medium">Type of Establishment</dt>
                  <dd className="text-gray-600">{data.typeOfEstablishment}</dd>
                </div>
                <div>
                  <dt className="font-medium">Main Training Areas</dt>
                  <dd className="text-gray-600">
                    <ul className="list-disc list-inside">
                      {data.mainTrainingAreas.map((area, index) => (
                        <li key={index}>{area}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium">Certificate Types</dt>
                  <dd className="text-gray-600">
                    <ul className="list-disc list-inside">
                      {data.certificateTypes.map((type, index) => (
                        <li key={index}>{type}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium">Training Delivery Methods</dt>
                  <dd className="text-gray-600">
                    <ul className="list-disc list-inside">
                      {data.trainingDeliveryMethods.map((method, index) => (
                        <li key={index}>{method}</li>
                      ))}
                    </ul>
                  </dd>
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
              <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <dt className="font-medium">Total Staff</dt>
                  <dd className="text-gray-600">{data.totalStaff}</dd>
                </div>
                <div>
                  <dt className="font-medium">Annual Costs</dt>
                  <dd className="text-gray-600">${data.annualCosts}</dd>
                </div>
                <div>
                  <dt className="font-medium">Social Media Links</dt>
                  <dd className="text-gray-600">
                    <ul className="space-y-1">
                      <li>Website: {data.socialMediaLinks.website}</li>
                      <li>Facebook: {data.socialMediaLinks.facebook}</li>
                      <li>Twitter: {data.socialMediaLinks.twitter}</li>
                      <li>LinkedIn: {data.socialMediaLinks.linkedin}</li>
                    </ul>
                  </dd>
                </div>
              </dl>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Documents</CardTitle>
            </CardHeader>
            <CardContent>
              <dl className="space-y-4">
                <div>
                  <dt className="font-medium">Local Accreditation Documents</dt>
                  <dd className="text-gray-600">
                    {data.localAccreditationDocs.length > 0 ? (
                      <ul className="list-disc list-inside">
                        {data.localAccreditationDocs.map((doc, index) => (
                          <li key={index}>{doc.name}</li>
                        ))}
                      </ul>
                    ) : (
                      "No documents uploaded"
                    )}
                  </dd>
                </div>
                <div>
                  <dt className="font-medium">International Accreditation Documents</dt>
                  <dd className="text-gray-600">
                    {data.internationalAccreditationDocs.length > 0 ? (
                      <ul className="list-disc list-inside">
                        {data.internationalAccreditationDocs.map((doc, index) => (
                          <li key={index}>{doc.name}</li>
                        ))}
                      </ul>
                    ) : (
                      "No documents uploaded"
                    )}
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

