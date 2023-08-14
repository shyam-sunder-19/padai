'use client'

import { useState, useEffect } from "react"

import Link from 'next/link';

const TableOfContents = ({ sections }) => {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.5 });

    sections.forEach((section) => {
      const target = document.getElementById(section.id);
      if (target) {
        observer.observe(target);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [sections]);

  return (
    <div className="fixed left-0 top-0 h-screen bg-gray-100 p-4">
      <ul>
        {sections.map((section, index) => (
          <li key={index} className={`mb-2 ${activeSection === section.id ? 'text-blue-600' : ''}`}>
            <Link href={`#${section.id}`}>
              <p className={`hover:text-blue-800`}>
                {section.title}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableOfContents;