import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';
import Services from './pages/Services';
import Networks from './pages/Networks';
import Contact from './pages/Contact';
import InstituteDetail from './pages/InstituteDetail';
// Import other pages as needed

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/networks" element={<Networks />} />
        <Route path="/institute/:id" element={<InstituteDetail />} />


            {/* Add other routes as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

