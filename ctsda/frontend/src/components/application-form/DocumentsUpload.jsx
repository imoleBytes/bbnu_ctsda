import React from 'react';
import { Label } from '../../components/ui/label';
import { Input } from '../../components/ui/input';

export default function DocumentsUpload({ data, updateData }) {
  const handleLocalDocsChange = (e) => {
    const files = Array.from(e.target.files);
    updateData({ localAccreditationDocs: files });
  };

  const handleInternationalDocsChange = (e) => {
    const files = Array.from(e.target.files);
    updateData({ internationalAccreditationDocs: files });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold mb-4">Documents Upload</h2>
        
        <div className="space-y-4">
          <div>
            <Label htmlFor="localDocs">Local Accreditation Documents</Label>
            <Input
              id="localDocs"
              type="file"
              multiple
              onChange={handleLocalDocsChange}
              className="mt-1"
            />
            <p className="text-sm text-gray-500 mt-1">
              Upload any local accreditation documents you currently hold
            </p>
          </div>
          
          <div>
            <Label htmlFor="internationalDocs">International Accreditation Documents</Label>
            <Input
              id="internationalDocs"
              type="file"
              multiple
              onChange={handleInternationalDocsChange}
              className="mt-1"
            />
            <p className="text-sm text-gray-500 mt-1">
              Upload any international accreditation documents you currently hold
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

