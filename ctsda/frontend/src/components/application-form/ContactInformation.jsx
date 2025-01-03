import React from 'react';
import { Label } from '../../components/ui/label';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';

export default function ContactInformation({ data, updateData }) {
  const handleChange = (field, value) => {
    updateData({ [field]: value });
  };

  const handleContactPersonChange = (field, value) => {
    updateData({
      contactPerson: {
        ...data.contactPerson,
        [field]: value
      }
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold mb-4">Contact Information</h2>
        
        <div className="space-y-4">
          <div>
            <Label htmlFor="physicalAddress">Physical Address</Label>
            <Textarea
              id="physicalAddress"
              value={data.physicalAddress}
              onChange={(e) => handleChange('physicalAddress', e.target.value)}
              placeholder="Enter physical address"
              rows={3}
            />
          </div>
          
          <div>
            <Label htmlFor="postalAddress">Postal Address</Label>
            <Textarea
              id="postalAddress"
              value={data.postalAddress}
              onChange={(e) => handleChange('postalAddress', e.target.value)}
              placeholder="Enter postal address"
              rows={3}
            />
          </div>
          
          <div className="space-y-4">
            <h3 className="text-md font-medium">Contact Person</h3>
            <div>
              <Label htmlFor="contactName">Name</Label>
              <Input
                id="contactName"
                value={data.contactPerson.name}
                onChange={(e) => handleContactPersonChange('name', e.target.value)}
                placeholder="Enter contact person's name"
              />
            </div>
            
            <div>
              <Label htmlFor="contactPosition">Position</Label>
              <Input
                id="contactPosition"
                value={data.contactPerson.position}
                onChange={(e) => handleContactPersonChange('position', e.target.value)}
                placeholder="Enter contact person's position"
              />
            </div>
            
            <div>
              <Label htmlFor="contactEmail">Email</Label>
              <Input
                id="contactEmail"
                type="email"
                value={data.contactPerson.email}
                onChange={(e) => handleContactPersonChange('email', e.target.value)}
                placeholder="Enter contact person's email"
              />
            </div>
            
            <div>
              <Label htmlFor="contactPhone">Phone</Label>
              <Input
                id="contactPhone"
                value={data.contactPerson.phone}
                onChange={(e) => handleContactPersonChange('phone', e.target.value)}
                placeholder="Enter contact person's phone"
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="mobilePhone">Mobile Phone (WhatsApp)</Label>
            <Input
              id="mobilePhone"
              value={data.mobilePhone}
              onChange={(e) => handleChange('mobilePhone', e.target.value)}
              placeholder="Enter mobile phone number"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

