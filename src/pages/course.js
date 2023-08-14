import TableOfContents from "@/components/TableOfContents";
import Navbar from "@/components/navbar";
import '../app/globals.css'

import {useState, useEffect} from 'react'

const headings = [
    { id: 'section-1', title: 'Section 1' },
    { id: 'section-2', title: 'Section 2' },
    { id: 'section-3', title: 'Section 3' },
    { id: 'section-4', title: 'Section 1' },
    { id: 'section-5', title: 'Section 2' },
    { id: 'section-6', title: 'Section 3' },
    { id: 'section-7', title: 'Section 1' },
    { id: 'section-8', title: 'Section 2' },
    { id: 'section-9', title: 'Section 3' },
    { id: 'section-10', title: 'Section 1' },
    { id: 'section-11', title: 'Section 2' },
    { id: 'section-12', title: 'Section 3' },
    // Add more headings as needed
  ];
  
  const Course = () => {
    
    const [currentSlide, setCurrentSlide] = useState(0);
    const colors = ['#ff7675', '#74b9ff', '#55efc4', '#fdcb6e'];

    const handleSlideClick = (index) => {
      setCurrentSlide(index);
    };

    useEffect(() => {
      const interval = setInterval(() => {
          setCurrentSlide((prevSlide) => (prevSlide + 1) % colors.length);
      }, 5000); // Change slide every 5 seconds
  
      return () => {
        clearInterval(interval);
      };
    }, []);

    return (
      <>
        <Navbar />
        <div className="flex p-8 justify-center">
          <div className="sticky top-0 z-10 w-1/5 h-192 bg-blue-50 rounded">

          </div>
          <div className="p-4 w-3/5">
              <div>
                <h className="text-6xl">Manipal Online B.Com</h>
                <h2 className="text-2xl mx-1">Manipal University Online</h2>
                <h2 className="mx-2">Accredied by</h2>
                <div className="flex p-1">
                  <div className="w-9 h-9 bg-blue-100 p-10 m-2"></div>
                  <div className="w-9 h-9 bg-blue-100 p-10 m-2"></div>
                  <div className="w-9 h-9 bg-blue-100 p-10 m-2"></div>
                  <div className="w-9 h-9 bg-blue-100 p-10 m-2"></div>
                </div>
              </div>
              <div className="flex-1 relative p-8 h-96">
                {colors.map((color, index) => (
                  <div
                    key={index}
                    className={`absolute top-0 left-0 w-full h-full transition-opacity rounded ${
                      index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {colors.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleSlideClick(index)}
                      className={`w-3 h-3 rounded-full ${
                        index === currentSlide ? 'bg-white' : 'bg-gray-300'
                      }`}
                    ></button>
                  ))}
              </div>
              </div>
              <div className="flex flex-col py-8">
                <h className="text-4xl">About Manipal Online B.Com</h>
                <ul className="list-disc text-lg p-5">
                  <li>The online Manipal university is a part of the prestigious Manipal University Jaipur (MUJ). The university started offering courses in online mode in the year 2021. The University Grants Commission (UGC) has entitled Online Manipal University to offer UG and PG programs.</li>
                  <li>The university currently offers BCA, BBA, and B.Com in the undergraduate category while MCA, MBA, M.Com, and MA JMC in the postgraduate category. These online courses are taught by the esteemed same faculty of the Manipal University Jaipur and real-world mentors.</li> 
                  <li>The university offers an enhanced digital learning platform where you can find all your course material and cutting-edge tutorials. The university conducts examinations in online mode using this LMS. These online examinations are secure as they are remotely proctored. The LMS even provides self-learning opportunities to the students with the help of various practice tests and online quizzes.</li> 
                  <li>The programs at the online Manipal are designed to offer comprehensive educational experiences to help students develop skill-sets that are relevant to jobs in diverse industries. The curriculum and the learning methodology have been designed not only by the professors but also by expert practitioners from relevant industries.</li>
                  <li>The university offers easy financing options like no-cost EMIs to help students from all backgrounds gain knowledge and education by overcoming the barrier of finances. There are also attractive scholarship offers for government employees, defense personnel, meritorious students, and differently-abled people.</li>
                </ul>
              </div>
          </div>
        </div>
      </>
      
    );
  };
  
  export default Course;