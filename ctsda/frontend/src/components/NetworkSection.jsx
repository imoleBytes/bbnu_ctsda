import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

import data from '../data.json'; // Importing the local JSON file


export default function NetworkSection() {
  const [logos, setLogos] = useState([]);

  // Static logos list
  useEffect(() => {
    // const staticLogos = [
    //     { id: 1, url: '/img/logos/3m.svg', alt: 'Logo 1' },
    //     { id: 2, url: '/img/logos/barstool-store.svg', alt: 'Logo 2' },
    //     { id: 3, url: '/img/logos/budweiser.svg', alt: 'Logo 3' },
    //     { id: 4, url: '/img/logos/buzzfeed.svg', alt: 'Logo 4' },
    //     { id: 5, url: '/img/logos/menshealth.svg', alt: 'Logo 5' },
    //   ];    
    // const staticLogos = [
    //   { id: 1, url: '/images/logo1.png', alt: 'Logo 1' },
    //   { id: 2, url: '/images/logo2.png', alt: 'Logo 2' },
    //   { id: 3, url: '/images/logo3.png', alt: 'Logo 3' },
    //   { id: 4, url: '/images/logo4.png', alt: 'Logo 4' },
    //   { id: 5, url: '/images/logo5.png', alt: 'Logo 5' },
    // ];
    setLogos(data.logos);
  }, []);

  return (
    <div className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-center text-2xl font-bold mb-12">CTSDA Accredited Global Network – 2025</h2>
        <div className="relative overflow-hidden" style={{ height: '100px' }}>
          <div className="flex space-x-8 animate-marquee">
            {/* Duplicating logos to create a seamless scroll effect */}
            {logos.concat(logos).map((logo, index) => (
              <img
                key={logo.id}
                src={logo.url}
                alt={logo.alt}
                className="h-16 w-auto object-contain"
              />
            ))}
          </div>
        </div>
        <div className="text-center mt-12">
          <h3 className="text-xl font-bold mb-4">Want to be part of our network?</h3>
          <p className="mb-6">Start the process here!</p>
          <div className="flex justify-center gap-4">
            <Link to="/application">
            <Button>APPLY NOW</Button>
            </Link>
            <Button variant="outline">READ MORE</Button>
          </div>
        </div>
      </div>
    </div>
  );
}








