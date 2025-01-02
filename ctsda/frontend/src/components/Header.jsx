import { useState } from 'react';
import { Link } from 'react-router-dom'
import { Mail, Phone, Clock } from 'lucide-react'


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    return (
      <header className="bg-white">
        {/* <TopBar/> */}

        <div className="border-b">
            <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-4">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold text-primary">
                CTSDA
                </Link>
    
                {/* Hamburger / Close Menu Button */}
                <button
                className="md:hidden block text-primary focus:outline-none"
                onClick={toggleMenu}
                >
                {isMenuOpen ? (
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                    />
                    </svg>
                ) : (
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16m-7 6h7"
                    />
                    </svg>
                )}
                </button>
    
                {/* Navigation Menu */}
                <nav
                className={`${
                    isMenuOpen ? "block" : "hidden"
                } md:block absolute md:static bg-white md:bg-transparent w-full md:w-auto top-16 left-0 md:top-auto md:left-auto z-10`}
                >
                <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 p-4 md:p-0">
                    <li>
                    <Link to="/" className="hover:text-primary">
                        Home
                    </Link>
                    </li>
                    <li>
                    <Link to="/about" className="hover:text-primary">
                        About
                    </Link>
                    </li>
                    <li>
                    <Link to="/services" className="hover:text-primary">
                        Services
                    </Link>
                    </li>
                    <li>
                    <Link to="/contact" className="hover:text-primary">
                        Contact Us
                    </Link>
                    </li>
                    {/* <li>
                    <Link to="/dashboard" className="hover:text-primary">
                        Dashboard
                    </Link>
                    </li> */}
                    <li>
                    <Link to="/application" className="hover:text-primary">
                        Application
                    </Link>
                    </li>
                    <li>
                    <Link to="/networks" className="hover:text-primary">
                        Network
                    </Link>
                    </li>
                </ul>
                </nav>
            </div>
            </div>
        </div>
      </header>

    );
  };
  
  export default Header;

// export default function Header() {
//   return (
//     <header className="bg-white">
//       {/* Main navigation */}
//       <div className="border-b">
//         <div className="container mx-auto px-4">
//           <div className="flex justify-between items-center py-4">
//             <Link to="/" className="text-2xl font-bold text-primary">
//               CTSDA
//             </Link>
//             <nav className="hidden md:block">
//               <ul className="flex space-x-8">
//                 <li><Link to="/" className="hover:text-primary">Home</Link></li>
//                 <li><Link to="/about" className="hover:text-primary">About</Link></li>
//                 <li><Link to="/services" className="hover:text-primary">Services</Link></li>
//                 <li><Link to="/contact" className="hover:text-primary">Contact Us</Link></li>
//                 <li><Link to="/dashboard" className="hover:text-primary">Dashboard</Link></li>
//                 <li><Link to="/application" className="hover:text-primary">Application</Link></li>
//                 <li><Link to="/network" className="hover:text-primary">Network</Link></li>
//               </ul>
//             </nav>
//           </div>
//         </div>
//       </div>
//     </header>
//   )
// }

export function TopBar() {
    return (
      <div className="border-b">
             {/* Top bar */}
        <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-2 text-sm">
            <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+1 49 75 23 222 35</span>
                </div>
                <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@ctsda.com</span>
                </div>
                <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Mon - Fri, 08:00 - 17:00</span>
                </div>
            </div>
            <div className="flex items-center space-x-4">
                <Link to="#" className="hover:text-primary">Facebook</Link>
                <Link to="#" className="hover:text-primary">LinkedIn</Link>
                <Link to="#" className="hover:text-primary">Network</Link>
            </div>
            </div>
        </div>
    </div>
    ) 
}
