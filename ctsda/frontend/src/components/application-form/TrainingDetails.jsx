import React from 'react';
import { Label } from '../../components/ui/label';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';
import { Checkbox } from '../../components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';

export default function TrainingDetails({ data, updateData }) {
  const handleChange = (field, value) => {
    updateData({ [field]: value });
  };

  const trainingMethods = [
    'Classroom Based',
    'Online Learning',
    'Blended Learning',
    'Workshop/Practical',
    'Distance Learning'
  ];

  const handleTrainingMethodChange = (method) => {
    const currentMethods = data.trainingDeliveryMethods || [];
    const updatedMethods = currentMethods.includes(method)
      ? currentMethods.filter(m => m !== method)
      : [...currentMethods, method];
    handleChange('trainingDeliveryMethods', updatedMethods);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold mb-4">Training Details</h2>
        
        <div className="space-y-4">
          <div>
            <Label htmlFor="typeOfEstablishment">Type of Establishment</Label>
            <Select
              value={data.typeOfEstablishment}
              onValueChange={(value) => handleChange('typeOfEstablishment', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="university">University</SelectItem>
                <SelectItem value="college">College</SelectItem>
                <SelectItem value="institute">Training Institute</SelectItem>
                <SelectItem value="school">Vocational School</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-sm text-gray-500 mt-1">
              Select the category that best describes your institution
            </p>
          </div>
          
          <div>
            <Label htmlFor="mainTrainingAreas">Main Training Areas</Label>
            <Textarea
              id="mainTrainingAreas"
              value={data.mainTrainingAreas.join('\n')}
              onChange={(e) => handleChange('mainTrainingAreas', e.target.value.split('\n'))}
              placeholder="e.g.&#10;Business Management&#10;Information Technology&#10;Healthcare Administration"
              rows={4}
            />
            <p className="text-sm text-gray-500 mt-1">
              List your main areas of training/education. Enter one area per line.
            </p>
          </div>
          
          <div>
            <Label htmlFor="certificateTypes">Types of Certificates Issued</Label>
            <Textarea
              id="certificateTypes"
              value={data.certificateTypes.join('\n')}
              onChange={(e) => handleChange('certificateTypes', e.target.value.split('\n'))}
              placeholder="e.g.&#10;Diploma in Business Administration&#10;Certificate in Project Management&#10;Advanced Certificate in IT"
              rows={4}
            />
            <p className="text-sm text-gray-500 mt-1">
              List all types of certificates, diplomas, or degrees your institution awards. Enter one per line.
            </p>
          </div>
          
          <div>
            <Label>Training Delivery Methods</Label>
            <div className="grid grid-cols-2 gap-4 mt-2">
              {trainingMethods.map((method) => (
                <div key={method} className="flex items-center space-x-2">
                  <Checkbox
                    id={method}
                    checked={data.trainingDeliveryMethods?.includes(method)}
                    onCheckedChange={() => handleTrainingMethodChange(method)}
                  />
                  <Label htmlFor={method}>{method}</Label>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-1">
              Select all methods used to deliver your training programs
            </p>
          </div>
          
          <div>
            <Label htmlFor="annualTrainingPrograms">Annual Training Programs</Label>
            <Input
              id="annualTrainingPrograms"
              type="number"
              value={data.annualTrainingPrograms}
              onChange={(e) => handleChange('annualTrainingPrograms', e.target.value)}
              placeholder="e.g., 12"
            />
            <p className="text-sm text-gray-500 mt-1">
              Enter the total number of training programs conducted in a year
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

