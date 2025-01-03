import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Progress } from '../components/ui/progress';
import InstitutionDetails from '../components/application-form/InstitutionDetails';
import ContactInformation from '../components/application-form/ContactInformation';
import TrainingDetails from '../components/application-form/TrainingDetails';
import ResourcesAndCosts from '../components/application-form/ResourcesAndCosts';
import DocumentsUpload from '../components/application-form/DocumentsUpload';
import FormSummary from '../components/application-form/FormSummary';

const steps = [
  { id: 1, name: 'Institution Details' },
  { id: 2, name: 'Contact Information' },
  { id: 3, name: 'Training Details' },
  { id: 4, name: 'Resources & Costs' },
  { id: 5, name: 'Documents Upload' },
  { id: 6, name: 'Review & Submit' }
];

export default function MainApplicationForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Institution Details
    legalStatus: '',
    registrationNumber: '',
    countryOfRegistration: '',
    shortDescription: '',
    
    // Contact Information
    physicalAddress: '',
    postalAddress: '',
    contactPerson: {
      name: '',
      position: '',
      email: '',
      phone: ''
    },
    mobilePhone: '',
    
    // Training Details
    typeOfEstablishment: '',
    mainTrainingAreas: [],
    certificateTypes: [],
    trainingDeliveryMethods: [],
    annualTrainingPrograms: '',
    
    // Resources & Costs
    totalStaff: '',
    annualCosts: '',
    socialMediaLinks: {
      website: '',
      facebook: '',
      twitter: '',
      linkedin: ''
    },
    
    // Documents
    localAccreditationDocs: [],
    internationalAccreditationDocs: []
  });

  const updateFormData = (stepData) => {
    setFormData(prev => ({ ...prev, ...stepData }));
  };

  const handleNext = () => {
    setCurrentStep(prev => Math.min(prev + 1, steps.length));
  };

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    try {
      // In a real application, you would send this to your backend
      console.log('Submitting form data:', formData);
      alert('Application submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form. Please try again.');
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <InstitutionDetails data={formData} updateData={updateFormData} />;
      case 2:
        return <ContactInformation data={formData} updateData={updateFormData} />;
      case 3:
        return <TrainingDetails data={formData} updateData={updateFormData} />;
      case 4:
        return <ResourcesAndCosts data={formData} updateData={updateFormData} />;
      case 5:
        return <DocumentsUpload data={formData} updateData={updateFormData} />;
      case 6:
        return <FormSummary data={formData} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">
              Institution/Program Registration
            </CardTitle>
            <div className="mt-4">
              <Progress value={(currentStep / steps.length) * 100} className="h-2" />
              <div className="mt-2 grid grid-cols-6 gap-2">
                {steps.map((step) => (
                  <div
                    key={step.id}
                    className={`text-xs text-center ${
                      step.id === currentStep ? 'text-primary font-bold' : 'text-gray-500'
                    }`}
                  >
                    {step.name}
                  </div>
                ))}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {renderStep()}
            <div className="mt-6 flex justify-between">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentStep === 1}
              >
                Previous
              </Button>
              {currentStep === steps.length ? (
                <Button onClick={handleSubmit}>Submit Application</Button>
              ) : (
                <Button onClick={handleNext}>Next</Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

