import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../components/ui/card';
import { Button } from '../components/ui/button';

function Networks() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // This would typically come from an API
  const institutes = Array(50).fill().map((_, i) => ({
    id: i + 1,
    name: `Institute ${i + 1}`,
    logo: `/img/logos/3m.svg?height=80&width=80&text=${i + 1}`,
    description: `A leading educational institution specializing in various fields of study. Institute ${i + 1} is committed to providing quality education and fostering innovation.`,
  }));

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = institutes.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(institutes.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Our Network</h1>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {currentItems.map((institute) => (
            <Card key={institute.id} className="flex flex-col">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <img src={institute.logo} alt={`${institute.name} logo`} className="w-16 h-16 object-contain" />
                  <CardTitle>{institute.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-600">{institute.description}</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link to={`/institute/${institute.id}`}>View Details</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          {Array.from({ length: totalPages }, (_, i) => (
            <Button
              key={i + 1}
              onClick={() => paginate(i + 1)}
              variant={currentPage === i + 1 ? 'default' : 'outline'}
              className="mx-1"
            >
              {i + 1}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Networks;

