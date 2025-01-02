import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Facebook, Linkedin, Globe } from 'lucide-react';

function About() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-[#1a1a1a] text-white p-6 flex flex-col">
        <div className="flex-grow">
          <h2 className="text-xl font-bold mb-6">Quick Links</h2>
          <nav className="space-y-4">
            <Button asChild variant="ghost" className="w-full justify-start">
              <Link to="/verify">Verify ACTD Certificate</Link>
            </Button>
            <Button asChild variant="ghost" className="w-full justify-start">
              <Link to="/network">ACTD Accredited Network</Link>
            </Button>
            <Button asChild variant="ghost" className="w-full justify-start">
              <Link to="/search">Search ACTD network</Link>
            </Button>
            <Button asChild variant="ghost" className="w-full justify-start">
              <Link to="/quote">Get A Quote</Link>
            </Button>
            <Button asChild variant="ghost" className="w-full justify-start">
              <Link to="/news">World Education News</Link>
            </Button>
          </nav>
        </div>

        <div className="mt-auto">
          <div className="flex justify-center space-x-4 mb-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
              <Facebook size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
              <Linkedin size={24} />
            </a>
            <a href="https://ctsda.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
              <Globe size={24} />
            </a>
          </div>
          <div className="text-sm text-center">
            <p>&copy; 2025 CTSDA. All rights reserved.</p>
            <p>info@ctsda.com</p>
            <p>+1 49 75 23 222 35</p>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-grow p-8">
        <h1 className="text-4xl font-bold mb-6">About CTSDA</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700">
            The Council for Training, Skills and Development, America (CTSDA) is dedicated to advancing excellence in education and training through comprehensive accreditation services. We strive to empower institutions, trainers, and educational service providers to deliver high-quality programs that meet the evolving needs of learners and industries.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="text-gray-700">
            We envision a world where every learner has access to quality education and training, fostering personal growth, professional development, and societal progress. CTSDA aims to be the leading accreditation body, setting the gold standard for educational excellence and innovation.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Integrity in all our accreditation processes</li>
            <li>Commitment to continuous improvement</li>
            <li>Collaboration with educational institutions and industry partners</li>
            <li>Innovation in accreditation methodologies</li>
            <li>Transparency in our operations and decision-making</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Impact</h2>
          <p className="text-gray-700">
            Since our inception, CTSDA has accredited over 500 institutions and 1,000 programs across the United States. Our rigorous accreditation process has helped improve educational standards, enhance student outcomes, and bridge the gap between education and industry needs.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Join Our Network</h2>
          <p className="text-gray-700 mb-4">
            Become part of our growing network of accredited institutions and programs. Enhance your credibility, attract more students, and contribute to the advancement of education and training standards.
          </p>
          <Button className="bg-primary text-white hover:bg-primary-dark">
            Start Accreditation Process
          </Button>
        </section>
      </main>
    </div>
  );
}

export default About;

