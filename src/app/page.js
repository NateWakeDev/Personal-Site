"use client"; // Ensure this is a client component

import React, { useState, useEffect } from 'react';

const HomePage = () => {
  // Array of phrases to rotate through
  const phrases = [
    'Software Developer',
    'Python & C Specialist',
    'Automation Enthusiast',
    'Data Visualization Specialist',
    '3D Printing Hobbyist',
    'Photography & Videography Enthusiast',
    'CSULB SAE Data Acquisitions Lead',
  ];

  // State to keep track of the current phrase
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  // Use effect to rotate phrases at intervals
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3000); // Change phrase every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20">
        <h1 className="text-5xl font-bold text-center">Nathan Wakefield</h1>
        {/* Rotating Text Line */}
        <p className="text-center mt-4 text-xl">
          {phrases[currentPhraseIndex]}
        </p>
      </div>

      {/* Introduction */}
      <div className="mt-8">
        <h1 className="text-4xl font-bold mb-4">Welcome! My name&apos;s Nate :)</h1>
        <p className="text-lg">
          I am a software developer with a passion for all sorts of tinkering.
        </p>
      </div>

      {/* Skills Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <ul className="list-disc pl-5">
          <li>Python</li>
          <li>C</li>
          <li>Automation</li>
          <li>Data Visualization</li>
          <li>Software Design</li>
          <li>Debugging</li>
          <li>NumPy, Pandas, Matplotlib</li>
        </ul>
      </div>

      {/* Work Experience Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
        <div className="mb-4">
          <h3 className="text-xl font-bold">Manager of Marketing and Social Media, DeLillo Chevrolet</h3>
          <p className="italic">Jan. 2021 &#45; Present, Huntington Beach, CA</p>
          <ul className="list-disc pl-5">
            <li>Developed Python tooling to automate tasks, optimizing output.</li>
            <li>Performed data analysis using Excel&apos;s visualization tools.</li>
            <li>Maintained backend price management software.</li>
            <li>Managed business marketing initiatives to drive sales and generate leads.</li>
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-bold">3D Printing Technician, Self-Employed</h3>
          <p className="italic">June 2017 &#45; Present, Long Beach, CA</p>
          <ul className="list-disc pl-5">
            <li>Created and shipped prototypes using CAD modeling and 3D printing.</li>
            <li>Maintained 3D printers and automated print job workflows.</li>
          </ul>
        </div>
      </div>

      {/* Project Experience Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Project Experience</h2>
        <div className="mb-4">
          <h3 className="text-xl font-bold">CSULB SAE Data Acquisitions Lead</h3>
          <ul className="list-disc pl-5">
            <li>Managed GitHub projects for CAD, programming, and datasheets.</li>
            <li>Refactored programs for Arduinos and ESP32s.</li>
            <li>Spearheaded the design of a new embedded system, using GPS, G&#45;force, suspension ride height, and temperature sensors.</li>
            <li>Designed and 3D printed housings for data components.</li>
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-bold">Customer Review Request Automation</h3>
          <ul className="list-disc pl-5">
            <li>Automated data entry tasks, saving 4+ hours weekly using Python and Selenium.</li>
            <li>Utilized NumPy for CSV manipulation and data preprocessing.</li>
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-bold">Photography and Videography Library Backup</h3>
          <ul className="list-disc pl-5">
            <li>Automated renaming and organization of over 2TB of multimedia files.</li>
            <li>Implemented duplicate detection using average per-pixel RGB values.</li>
          </ul>
        </div>
      </div>

      {/* Education Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Education</h2>
        <div>
          <h3 className="text-xl font-bold">California State University, Long Beach</h3>
          <p className="italic">B.S. in Computer Science, August 2019 &#45; December 2024</p>
          <p>Relevant Coursework: Databases, Programming Language Principles, Algorithms, Data Structures, Object-Oriented Design, Python, Software Design Principles</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
