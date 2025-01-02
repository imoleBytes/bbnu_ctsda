import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export default function QuickLinks() {
  return (
    <div className="bg-[#2a2a2a] text-white p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-6">Quick Links</h2>
      <div className="space-y-4">
        <Button asChild variant="outline" className="w-full text-black border-white hover:bg-gray-300 hover:text-black">
          <Link to="/verify">Verify ACTD Certificate</Link>
        </Button>
        <Button asChild variant="outline" className="w-full text-black border-white hover:bg-gray-300 hover:text-black">
          <Link to="/network">ACTD Accredited Network 2024</Link>
        </Button>
        <Button asChild variant="outline" className="w-full text-black border-white hover:bg-gray-300 hover:text-black">
          <Link to="/search">Search within ACTD network</Link>
        </Button>
        <Button asChild variant="outline" className="w-full text-black border-white hover:bg-gray-300 hover:text-black">
          <Link to="/quote">Get A Quote</Link>
        </Button>
        <Button asChild variant="outline" className="w-full text-black border-white hover:bg-gray-300 hover:text-black">
          <Link to="/news">World Education News</Link>
        </Button>
      </div>
    </div>
  )
}

