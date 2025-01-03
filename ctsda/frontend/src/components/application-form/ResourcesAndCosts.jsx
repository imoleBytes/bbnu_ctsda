import React from 'react';
import { Label } from '../../components/ui/label';
import { Input } from '../../components/ui/input';

export default function ResourcesAndCosts({ data, updateData }) {
  const handleChange = (field, value) => {
    updateData({ [field]: value });
  };

  const handleSocialMediaChange = (platform, value) => {
    updateData({
      socialMediaLinks: {
        ...data.socialMediaLinks,
        [platform]: value
      }
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold mb-4">Resources and Costs</h2>
        
        <div className="space-y-4">
          <div>
            <Label htmlFor="totalStaff">Total Staff</Label>
            <Input
              id="totalStaff"
              type="number"
              value={data.totalStaff}
              onChange={(e) => handleChange('totalStaff', e.target.value)}
              placeholder="Enter total number of staff"
            />
          </div>
          
          <div>
            <Label htmlFor="annualCosts">Annual Private Costs</Label>
            <Input
              id="annualCosts"
              type="number"
              value={data.annualCosts}
              onChange={(e) => handleChange('annualCosts', e.target.value)}
              placeholder="Enter annual private costs"
            />
          </div>
          
          <div className="space-y-4">
            <h3 className="text-md font-medium">Social Media Links</h3>
            
            <div>
              <Label htmlFor="website">Website</Label>
              <Input
                id="website"
                value={data.socialMediaLinks.website}
                onChange={(e) => handleSocialMediaChange('website', e.target.value)}
                placeholder="Enter website URL"
              />
            </div>
            
            <div>
              <Label htmlFor="facebook">Facebook</Label>
              <Input
                id="facebook"
                value={data.socialMediaLinks.facebook}
                onChange={(e) => handleSocialMediaChange('facebook', e.target.value)}
                placeholder="Enter Facebook URL"
              />
            </div>
            
            <div>
              <Label htmlFor="twitter">Twitter</Label>
              <Input
                id="twitter"
                value={data.socialMediaLinks.twitter}
                onChange={(e) => handleSocialMediaChange('twitter', e.target.value)}
                placeholder="Enter Twitter URL"
              />
            </div>
            
            <div>
              <Label htmlFor="linkedin">LinkedIn</Label>
              <Input
                id="linkedin"
                value={data.socialMediaLinks.linkedin}
                onChange={(e) => handleSocialMediaChange('linkedin', e.target.value)}
                placeholder="Enter LinkedIn URL"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

