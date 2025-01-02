import { Button } from '@/components/ui/button'
import QuickLinks from './QuickLinks'

export default function Hero() {
  return (
    <div className="bg-[#1a1a1a] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <h1 className="text-3xl font-bold mb-6">
              Council For Training, Skills and Development, America (CTSDA)
            </h1>
            <p className="text-gray-300 mb-8">
              The Council for Training, Skills, and Development, America (CTSDA) is a leading American accreditation body, renowned for providing comprehensive accreditation services to institutions, trainers, and educational and training service providers.
            </p>
            <p className="text-gray-300 mb-8">
              By gaining CTSDA accreditation, you can strengthen your professional skills, enhance your reputation, and bolster your professional practice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black w-full sm:w-auto"
              >
                START ACCREDITATION
              </Button>
              <Button 
                variant="outline" 
                className="bg-white text-black hover:bg-transparent hover:text-white w-full sm:w-auto"
              >
                VERIFY CERTIFICATE
              </Button>
            </div>
          </div>
          <div className="lg:w-1/3">
            <QuickLinks />
          </div>
        </div>
      </div>
    </div>
  )
}

