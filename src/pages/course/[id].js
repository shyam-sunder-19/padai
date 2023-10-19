import TableOfContents from "@/components/TableOfContents";
import Navbar from "@/components/navbar";
import '../../app/globals.css'
import {useState, useEffect} from 'react'
import { useRouter } from "next/router"
import FloatingButton from "@/components/FloatingButton";
import university_json from "@/data/result";
import courses from "@/data/courses";

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
    const router = useRouter()
    let { id } = router.query
    id = id -1 
    const [currentSlide, setCurrentSlide] = useState(0);
    const [uni_data, set_uni_data] = useState(university_json)
    console.log(uni_data)
    const [course_data, set_course_data] = useState(courses[id])
    console.log(course_data)

    
    const colors = ['#ff7675', '#74b9ff', '#55efc4', '#fdcb6e'];

    const handleSlideClick = (index) => {
      setCurrentSlide(index);
    };

    useEffect(() => {
      const interval = setInterval(() => {
          setCurrentSlide((prevSlide) => (prevSlide + 1) % course_data.course_picture.length);
      }, 5000); // Change slide every 5 seconds
  
      return () => {
        clearInterval(interval);
      };
    }, []);

    return (
      <>
        <Navbar />
        <FloatingButton />
        <div className="flex p-8 justify-center">

          <div className="sticky top-0 z-10 w-1/5 h-192 bg-blue-50 rounded">
          </div>

          <div className="p-12 w-3/5">

              <div className="flex flex-wrap justify-between ">
                <div>
                  <h className="text-6xl">{course_data.course_name}</h>
                  <h2 className="text-2xl mx-1">{course_data.university_name}</h2>
                  <h2 className="mx-2">Accredied by</h2>
                  <div className="flex p-1">
                    <div className="w-9 h-9 bg-blue-100 p-10 m-2"></div>
                    <div className="w-9 h-9 bg-blue-100 p-10 m-2"></div>
                    <div className="w-9 h-9 bg-blue-100 p-10 m-2"></div>
                    <div className="w-9 h-9 bg-blue-100 p-10 m-2"></div>
                  </div>
                </div>
                <div className="flex flex-col p-2 items-center justify-center">
                    <button className="w-56 px-8 py-4 mb-1 rounded bg-blue-500 text-white hover:bg-blue-600">
                        Enquire Now
                    </button>
                    <button className="w-56 px-8 py-4 mb-1 rounded bg-blue-500 text-white hover:bg-blue-600">
                        Download Brochure
                    </button>
                    <button className="w-56 px-8 py-4 rounded bg-blue-500 text-white hover:bg-blue-600">
                        Add to Compare
                    </button>
                </div>
              </div>   

              <div className="flex-1 relative p-8 h-96">
                {course_data.course_picture.map((color, index) => (
                  <img
                    key={index}
                    className={`absolute top-0 left-0 w-full h-full transition-opacity rounded ${
                      index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ backgroundColor: color }}
                    src = {color}
                  ></img>
                ))}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {course_data.course_picture.map((_, index) => (
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
                <h className="text-4xl">About {course_data.course_name}</h>
                <ul className="list-disc text-lg p-5">
                  <div dangerouslySetInnerHTML={{__html: course_data.course_about}} />
                </ul>
              </div>

              <div className="flex flex-col py-8">
                <h className="text-4xl mb-6">Job Roles after {course_data.course_name}</h>
                <p className="text-lg">
                  B.Com is one of the most popular and oldest undergraduate courses in India, and the job scope after this course is already well-developed. So students indeed have a bright career development scope after graduating in this online B.Com degree from Online Manipal considering the prestige and renown of the university as an institution of higher education. They can get decent to high salary packages at the entry-level which can increase manifold with experience and effective upskilling.
                  Some of the top job prospects of B.Com graduates include:
                </p>
                <table className="table-auto border-spacing-2 border-separate border border-slate-500 auto text-lg mt-4">
                  <thead>
                    <tr>
                      <th className="border border-slate-600">Job Prospects</th>
                      <th className="border border-slate-600">Average Salary (P.A.)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-600">Accountant</td>
                      <td className="border border-slate-600">INR 4,00,000</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-600">Investment Banker</td>
                      <td className="border border-slate-600">INR 10,00,000</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-600">Financial Analyst</td>
                      <td className="border border-slate-600">INR 6,00,000</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-600">Company Secretary</td>
                      <td className="border border-slate-600">INR 5,00,000</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-600">Financial Planner</td>
                      <td className="border border-slate-600">INR 7,00,000</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-600">Business Manager</td>
                      <td className="border border-slate-600">INR 10,00,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="flex flex-col py-8">
                <h className="text-4xl">{course_data.university_name} Placement Stats</h>
                <ul className="list-disc text-lg p-5">
                  <li>
                    Learn employability skills through assessments and tests
                  </li>
                  <li>
                    100+ recruiters from Fortune 500 Companies
                  </li>
                  <li>
                    Job that suitably fits the student profile
                  </li>
                </ul>
                <div className="flex p-6 py-10 flex-wrap">
                  <div className="flex flex-col w-52 bg-blue-200 p-8 mr-8 mb-4 rounded">
                    <p className="text-3xl font-bold">50%</p>
                    <p className="text-xl">Average Salary Hike</p>
                  </div>
                  <div className="flex flex-col w-52 bg-blue-200 p-8 mr-8 mb-4 rounded">
                    <p className="text-3xl font-bold">300+</p>
                    <p className="text-xl">Hiring Partners</p>
                  </div>
                  <div className="flex flex-col w-52 bg-blue-200 p-8 mr-8 mb-4 rounded">
                    <p className="text-3xl font-bold">3x</p>
                    <p className="text-xl">Increase in Interview opportunities</p>
                  </div>
                </div>
                <div className="py-6">
                  <b>Our Students Work At</b>
                  <div className="flex p-1 flex-wrap justify-around">
                    {
                      course_data.placement_company_image_links.map(
                        (img, index) => <img key={index} src={img}></img>
                      )
                    }
                  </div>
                </div>
              </div>

          </div>

        </div>
      </>
      
    );
  };
  
  export default Course;