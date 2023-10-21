
import Navbar from "@/components/navbar";
import '../../app/globals.css';
import {useState, useEffect} from 'react'
import fs from 'fs';
import path from 'path';
import Markdown from '../../components/Markdown';
import FloatingButton from "@/components/FloatingButton";

export async function getStaticProps({ params }) {
  const { id } = params;
  const markdownFilePath = path.join(process.cwd(),'src', 'markdown', `${id}.md`);
  const markdownContent = fs.readFileSync(markdownFilePath, 'utf-8');

  return {
    props: {
      content: markdownContent,
    },
  };
}

export async function getStaticPaths() {
  const markdownDirectory = path.join(process.cwd(), 'src', 'markdown');
  console.log(markdownDirectory)
  const fileNames = fs.readdirSync(markdownDirectory);
  const paths = fileNames.map((fileName) => ({
    params: { id: fileName.replace(/\.md$/, '') },
  }));
  console.log(paths)
  return {
    paths,
    fallback: false,
  };
}

const MarkdownPage = ({ content }) => {
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
        <div>
            <Navbar />
            <FloatingButton />
            <div className="flex-1 relative p-8 h-96">
              {colors.map((color, index) => (
                <img
                  key={index}
                  className={`absolute top-0 left-0 w-full h-full transition-opacity rounded ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ backgroundColor: color }}
                ></img>
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
            <Markdown content={content} />
        </div>
    );
};

export default MarkdownPage;