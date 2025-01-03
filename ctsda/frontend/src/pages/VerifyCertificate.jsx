import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Label } from '../components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '../components/ui/alert';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import certificateData from '../data/certificateData.json';

const CERTIFICATE_REGEX = /^CTSDA-\d{6}-[A-Z]{2}$/;

export default function VerifyCertificate() {
  const [certificateNumber, setCertificateNumber] = useState('');
  const [verificationResult, setVerificationResult] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setVerificationResult(null);

    if (!CERTIFICATE_REGEX.test(certificateNumber)) {
      setError('Invalid certificate number format. Please use the format CTSDA-XXXXXX-YY');
      return;
    }

    const result = certificateData.find(cert => cert.certificateNumber === certificateNumber);
    if (result) {
      setVerificationResult(result);
    } else {
      setError('Certificate not found. Please check the number and try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">Verify Certificate</CardTitle>
            <CardDescription className="text-center">
              Enter the CTSDA assigned Certificate number to check its validity
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="certificateNumber">Certificate Number</Label>
                <Input
                  id="certificateNumber"
                  placeholder="e.g., CTSDA-123456-AB"
                  value={certificateNumber}
                  onChange={(e) => setCertificateNumber(e.target.value.toUpperCase())}
                />
              </div>
              <Button type="submit" className="w-full">Verify</Button>
            </form>

            {error && (
              <Alert variant="destructive" className="mt-4">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {verificationResult && (
              <Card className="mt-4">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    {verificationResult.status === 'Accredited' ? (
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                    ) : (
                      <XCircle className="mr-2 h-5 w-5 text-red-500" />
                    )}
                    {verificationResult.instituteName}
                  </CardTitle>
                  <CardDescription>
                    Certificate: {verificationResult.certificateNumber}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold">
                    Status: 
                    <span className={verificationResult.status === 'Accredited' ? 'text-green-600' : 'text-red-600'}>
                      {' '}{verificationResult.status}
                    </span>
                  </p>
                  {verificationResult.status === 'Accredited' && (
                    <>
                      <p>Program: {verificationResult.program}</p>
                      <p>Valid Until: {verificationResult.validUntil}</p>
                    </>
                  )}
                  {verificationResult.status === 'Expired' && (
                    <p>Expired On: {verificationResult.expiredOn}</p>
                  )}
                </CardContent>
              </Card>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

