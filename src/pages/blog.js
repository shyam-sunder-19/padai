import Navbar from "@/components/navbar"
import { useState, useEffect } from "react";
import '../app/globals.css'
import blog_title from "@/data/blog_title"
import FloatingButton from "@/components/FloatingButton";
import Link from "next/link";

export default function Blog({ blog_list }) {
    const colors = ['#ff7675', '#74b9ff', '#55efc4', '#fdcb6e'];
    const [currentSlide, setCurrentSlide] = useState(0);
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
            <FloatingButton />
            <div className="flex-col p-10">
            <div className="flex-1 relative p-8 h-96">
                {colors.map((color, index) => (
                    <div
                    key={index}
                    className={`absolute top-0 left-0 w-full h-full transition-opacity rounded ${
                        index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ backgroundColor: color }}
                    ></div>
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
                <div className="flex mt-10 flex-row flex-wrap justify-center">
                    {
                        blog_title.map(
                            (blog, index) => {
                                let blog_link = '/blog/'
                                blog_link += `blog_${index+1}`
                                return (
                                <div key={index} className="w-1/4 mr-5 text-xl my-4 p-6 bg-blue-100 rounded">
                                    <div className="bg-blue-200 w-full h-60"></div>
                                    <div><Link href={blog_link}>{blog}</Link></div>
                                </div>
                                )
                            }
                        )
                    }
                </div>
            </div>
        </>
    )
}