import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Textarea } from '../components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import { Button } from '../components/ui/button';

function StartApplication() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // In a real application, you would fetch this from an API
    setCountries([
      { code: 'US', name: 'United States' },
      { code: 'GB', name: 'United Kingdom' },
      { code: 'CA', name: 'Canada' },
      // ... add more countries
    ]);
  }, []);

  const onSubmit = (data) => {
    console.log(data);
    // Here you would typically send this data to your backend
    alert('Application submitted successfully! Please check your email for further instructions.');
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">Start Your Accreditation Journey</CardTitle>
            <CardDescription className="text-center mt-2">
              This is the first step in your accreditation process. After submitting this form, you will receive an email with further instructions.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="col-span-1">
                <img src="src/assets/img/logo.svg?height=300&width=400&text=Accreditation+Process" alt="Accreditation Process" className="w-full h-auto rounded-lg shadow-md" />
              </div>
              <div className="col-span-1 flex items-center">
                <p className="text-gray-600">
                  Embarking on the CTSDA accreditation journey is a significant step towards enhancing your institution's credibility and quality. This initial form helps us understand your institution better and tailor our process to your needs.
                </p>
              </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" {...register('firstName', { required: true })} />
                  {errors.firstName && <span className="text-red-500 text-sm">This field is required</span>}
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" {...register('lastName', { required: true })} />
                  {errors.lastName && <span className="text-red-500 text-sm">This field is required</span>}
                </div>
              </div>
              <div>
                <Label htmlFor="instituteName">Institute Name (Or Company Name)</Label>
                <Input id="instituteName" {...register('instituteName', { required: true })} />
                {errors.instituteName && <span className="text-red-500 text-sm">This field is required</span>}
              </div>
              <div>
                <Label htmlFor="operatingCountry">In which country does your institute operate and work?</Label>
                <Input id="operatingCountry" {...register('operatingCountry', { required: true })} />
                {errors.operatingCountry && <span className="text-red-500 text-sm">This field is required</span>}
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
                {errors.email && <span className="text-red-500 text-sm">Please enter a valid email address</span>}
              </div>
              <div>
                <Label htmlFor="phone">Mobile Phone Number (with WhatsApp)</Label>
                <Input id="phone" {...register('phone', { required: true })} />
                {errors.phone && <span className="text-red-500 text-sm">This field is required</span>}
              </div>
              <div>
                <Label htmlFor="registrationCountry">In which country is your institution registered?</Label>
                <Select onValueChange={(value) => console.log(value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a country" />
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map((country) => (
                      <SelectItem key={country.code} value={country.code}>
                        {country.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>How did you hear about CTSDA?</Label>
                <RadioGroup defaultValue="option-one">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="search-engine" id="search-engine" />
                    <Label htmlFor="search-engine">Search engine (Google, Bing, etc.)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="facebook" id="facebook" />
                    <Label htmlFor="facebook">Facebook</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="twitter" id="twitter" />
                    <Label htmlFor="twitter">Twitter</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="other" id="other" />
                    <Label htmlFor="other">Other</Label>
                  </div>
                </RadioGroup>
              </div>
              <div>
                <Label htmlFor="additionalInfo">Additional Information</Label>
                <Textarea id="additionalInfo" {...register('additionalInfo')} />
              </div>
              <Button type="submit" className="w-full">Submit Application</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default StartApplication;

