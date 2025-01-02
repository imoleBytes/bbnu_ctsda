import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-gray-300 hover:text-white">Verify ACTD Certificate</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white">ACTD Accredited Network 2024</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white">Search within ACTD network</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-gray-300 hover:text-white">Get A Quote</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white">World Education News</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white">Dashboard</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white">About</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Phone: +1 49 75 23 222 35</li>
              <li className="text-gray-300">Email: info@ctsda.com</li>
              <li className="text-gray-300">Hours: Mon - Fri, 08:00 - 17:00</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

