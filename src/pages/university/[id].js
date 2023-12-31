import TableOfContents from "@/components/TableOfContents";
import Navbar from "@/components/navbar";
import '../../app/globals.css'

import {useState, useEffect} from 'react'
import { useRouter } from "next/router"
import FloatingButton from "@/components/FloatingButton";
import university_data from "@/data/university_data.json"
import courses from "@/data/courses"

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
  
const University = ({university}) => {
  const router = useRouter()
  const { id } = router.query

  const [currentSlide, setCurrentSlide] = useState(0);
  const [course_data, set_course_data] = useState(courses)

  const handleSlideClick = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % university.picture.length);
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
                <h className="text-6xl">{university.name}</h>
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
              {university.picture.map((picture_src, index) => (
                <img
                  key={index}
                  className={`absolute top-0 left-0 w-full h-full transition-opacity rounded ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                  src={picture_src}
                ></img>
              ))}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {university.picture.map((_, index) => (
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
              <h className="text-4xl">About {university.name}</h>
              <ul className="list-disc text-lg p-5">
                <div dangerouslySetInnerHTML={{__html: university.about}} />
              </ul>
            </div>

            <div className="flex flex-col py-8">
              <h className="text-4xl">{university.name} Placement Stats</h>
              <ul className="list-disc text-lg p-5">
                <div dangerouslySetInnerHTML={{__html: university.usps_content}} />
              </ul>
              <div className="flex p-6 py-10 flex-wrap">
                <div className="flex flex-col w-52 bg-blue-200 p-8 mr-8 mb-4 rounded">
                  <p className="text-3xl font-bold">{university.average_salary_hike}</p>
                  <p className="text-xl">Average Salary Hike</p>
                </div>
                <div className="flex flex-col w-52 bg-blue-200 p-8 mr-8 mb-4 rounded">
                  <p className="text-3xl font-bold">{university.hiring_partners}</p>
                  <p className="text-xl">Hiring Partners</p>
                </div>
              </div>
              <div className="py-6">
                <b>Our Students Work At</b>
                <div className="flex p-1 flex-wrap justify-around">
                  {
                    university.placement_company_images.map(
                      (img, index) => <img key={index} src={img}></img>
                    )
                  }
                </div>
              </div>
              <div>
                {
                  university.course_names.map(
                    (course) => {
                      let c = course_data.find(el => el.course_name === course)
                      console.log(c)
                    }
                  )
                }
              </div>
            </div>

        </div>

      </div>
    </>
    
  );
};

export async function getStaticPaths() {
  // Generate the paths for all universities
  const paths = university_data.map((university) => ({
    params: { id: university.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Fetch the data for a specific university based on the id
  const university = university_data.find(
    (univ) => univ.id === parseInt(params.id)
  );

  return {
    props: { university },
  };
}

export default University;