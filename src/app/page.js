"use client"; // Ensure this is a client component

import React, { useState, useEffect } from 'react';
import { Divider } from "@nextui-org/divider";
import { Code } from '@nextui-org/code';
import './globals.css';
import { Progress } from '@nextui-org/progress';
import { Link } from '@nextui-org/link';
import { Center } from '@react-three/drei';

const HomePage = () => {
  // Array of phrases to rotate through
  const phrases = [
    'CSULB SAE Data Acquisitions Lead',
    'Software Developer',
    'Python & C Specialist',
    'Automation Enthusiast',
    'Data Visualization Specialist',
    '3D Printing Hobbyist',
    'Photography & Videography Enthusiast',
  ];

  const programmingLanguages = [
    {
      title: "Python",
      years: 5,
    },
    {
      title: "C++",
      years: 4,
    },
    {
      title: "C",
      years: 3,
    },
    {
      title: "JavaScript",
      years: 2,
    },
    {
      title: "SQL",
      years: 2,
    },
  ];

  const otherSkills = [
    "Automation",
    "Data Visualization",
    "Software Design",
    "Debugging",
    "Git",
    "NumPy",
    "Pandas",
    "Matplotlib",
    "Blender",
    "Fusion 360",
    "SolidWorks",
  ];

  const projectList = [
    {
      title: "CSULB SAE Data Acquisitions Lead",
      date: "April 2024 - Present",
      bullets: [
        'Managed GitHub projects for CAD, programming, and datasheets.',
        'Refactored programs for Arduinos and ESP32s.',
        'Designed an embedded system with GPS, G-force, and many other sensors.',
      ],
      link: "/projects/sensors",
      linkText: "View Schematic Information",
      isDisabled: false,
    },

    {
      title: "Quadroscoptic Lenticular Camera",
      date: "Developed December 2023 - January 2024",
      bullets: [
        'Inspiration from the Nishika 8000D 3D Film Camera.',
        'Used Fusion 360 to design the camera, Blender to animate the design.',
      ],
      link: "/projects/quadcam",
      linkText: "View Camera Details",
      isDisabled: false,
    },

    {
      title: "Customer Review Request Automation",
      date: "Developed January 2022 - April 2024",
      bullets: [
        'Automated data entry tasks, saving 4+ hours weekly with Python and Selenium.',
        'Utilized NumPy for CSV manipulation and data preprocessing.',
      ],
      link: "/projects/automation",
      linkText: "View Automation Details",
      isDisabled: true,
    },

    {
      title: "Photography and Videography Library Backup",
      date: "Developed August 2023 - October 2023 -- Still in Development",
      bullets: [
        'Automated organization of over 2TB of multimedia files.',
        'Implemented duplicate detection using average per-pixel RGB values.',
      ],
      link: "/projects/backup",
      linkText: "View Backup Details",
      isDisabled: true,
    },

    {
      title: "If you want to see more projects...",
      date: "",
      bullets: [
        'Check out the projects page for more information.',
      ],
      link: "/projects",
      linkText: "View More Projects",
      isDisabled: false,
    }
  ];

  // State to keep track of the current phrase
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true); // New state to control fade-in effect

  // Use effect to rotate phrases at intervals
  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false); // Start fading out
      setTimeout(() => {
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setFadeIn(true); // Fade back in after updating phrase
      }, 1000); // 1 second for fade-out duration
    }, 3000); // Change phrase every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  });

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white py-24 mb-12 rounded-2xl shadow-2xl">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-4">Nathan Wakefield</h1>
        {/* Rotating Text Line with Fade-in Effect */}
        <p className={`text-center mt-4 text-xl md:text-2xl transition-opacity duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
          {phrases[currentPhraseIndex]}
        </p>
      </div>

      {/* About Me Section */}
      <div className="mt-8 mb-12 p-6 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm">
        <h2 className="text-3xl font-bold mb-6 gradient-text">About Me</h2>
        <p className="text-lg leading-relaxed">
          Hello! My name is <Code color="primary" size="lg" className="font-semibold">Nate</Code> and I am a <Code color="primary" size="lg" className="font-semibold">Software Developer</Code>. Currently I am focused in embedded programming, but have experience with web development, automation, application development, as well as UI/UX.
        </p>
      </div>

      <Divider className="my-8 opacity-30" />

       {/* Current Position */}
      <div className="mt-8 mb-12 p-6 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm">
        <h2 className="text-3xl font-bold mb-6 gradient-text">Current Position</h2>
        <p className="text-lg leading-relaxed">
          Currently, I am <Code color="primary" size="lg" className="font-semibold">IT Director</Code> and <Code color="primary" size="lg" className="font-semibold">Software Developer</Code> for <Code color="primary" size="lg" className="font-semibold">Sowing Seeds Health</Code>. I am responsible for keeping system security up to date, as well as developing and maintaining internal software to help streamline business processes.
        </p>
      </div>

      {/* Previous Position */}
      <div className="mt-8 mb-12 p-6 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm">
        <h2 className="text-3xl font-bold mb-6 gradient-text">Previous Position</h2>
        <p className="text-lg leading-relaxed mb-6">
          Previously, I was <Code color="primary" size="lg" className="font-semibold">Lead of Data Acquisitions</Code> for the <Code color="primary" size="lg" className="font-semibold">CSULB SAE team</Code>. I was responsible for managing and creating the system used to collect data on different aspects of the car. This includes the design of the system, the programming of the system, and the data analysis of the system.
        </p>
        <div className="flex justify-center mb-6">
          <iframe src="https://lumalabs.ai/embed/00e72c99-0aed-4278-8cdc-ed1d8062331f?mode=slf&background=%23ffffff&color=%23000000&showTitle=true&loadBg=true&logoPosition=bottom-left&infoPosition=bottom-right&cinematicVideo=undefined&showMenu=false" width="750" height="350" frameBorder="0" title="luma embed" className='items-center rounded-lg shadow-lg'></iframe>
        </div>
        <p className="text-sm text-center italic text-slate-400">
          *Luma 3D model showcasing the embedded data acquisition system used in the CSULB SAE car. Feel free to interact with the model to see different angles and details of the setup.
        </p>
      </div>

      <Divider className="my-8 opacity-30" />

      {/* Programming Languages Section */}
      <div className="mb-12 p-6 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm">
        <h2 className="text-3xl font-bold mb-8 gradient-text">Programming Languages</h2>
        <section className="space-y-4">
          {programmingLanguages.map((language, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-800/30 transition-all duration-300"
            >
              <div className="w-32 md:w-40 text-xl md:text-2xl font-bold text-right">{language.title}</div>
              <div className="flex-grow">
                <Progress
                  aria-label={language.title}
                  value={language.years}
                  maxValue="5"
                  color="primary"
                  size="md"
                  className="w-full"
                />
              </div>
              <div className="text-lg md:text-xl font-semibold text-blue-400 w-24 text-right">{language.years} years</div>
            </div>
          ))}
        </section>
      </div>

      {/* Skills Section */}
      <div className="mb-12 p-6 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm">
        <h2 className="text-3xl font-bold mb-8 gradient-text">Other Skills</h2>
        <div className="flex flex-wrap gap-3">
          {otherSkills.map((skill, index) => (
            <div 
              key={index} 
              className="px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-full hover:from-blue-600/30 hover:to-purple-600/30 hover:border-blue-400/50 transition-all duration-300 cursor-default"
            >
              <span className="text-sm font-medium">{skill}</span>
            </div>
          ))}
        </div>
      </div>

      <Divider className="my-8 opacity-30" />

      {/* Project Experience Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-8 gradient-text">Project Experience</h2>
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="min-w-[280px] max-w-sm border border-slate-700/50 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-6 hover:shadow-2xl hover:shadow-blue-500/20 hover:border-blue-500/50 transition-all duration-300 flex-shrink-0 hover:transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold mb-2 text-blue-400">{project.title}</h3>
              <p className="text-sm text-slate-400 mb-4">{project.date}</p>
              <ul className="list-disc pl-5 text-sm mb-6 space-y-1 text-slate-300">
                {project.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
              <Link href={project.link} passHref legacyBehavior isDisabled={project.isDisabled}>
                <Code
                  color="primary"
                  size="lg"
                  className={`${project.isDisabled ? 'pointer-events-none opacity-50' : 'hover:scale-105'} transition-transform duration-200`}
                  style={{ cursor: project.isDisabled ? 'not-allowed' : 'pointer' }}
                >
                  {project.isDisabled ? 'Page coming Soon...' : project.linkText}
                </Code>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <Divider className="my-8 opacity-30" />

      {/* Education Section */}
      <div className="mb-12 p-6 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm">
        <h2 className="text-3xl font-bold mb-6 gradient-text">Education</h2>
        <div>
          <h3 className="text-2xl font-bold text-blue-400 mb-2">California State University, Long Beach</h3>
          <p className="italic text-lg mb-3 text-slate-300">B.S. in Computer Science, August 2019 &#45; December 2024</p>
          <p className="text-slate-400"><span className="font-semibold text-slate-300">Relevant Coursework:</span> Databases, Programming Language Principles, Algorithms, Data Structures, Object-Oriented Design, Python, Software Design Principles</p>
        </div>
      </div>

      <Divider className="my-8 opacity-30" />

      {/* Work Experience Section */}
      <div className="mb-12 p-6 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm">
        <h2 className="text-3xl font-bold mb-8 gradient-text">Relevant Work Experience</h2>
        <div className="space-y-8">
          <div className="border-l-4 border-blue-500 pl-6 hover:border-purple-500 transition-colors duration-300">
            <h3 className="text-xl font-bold text-blue-400 mb-1">IT Manager / Software Developer, Sowing Seeds Health</h3>
            <p className="italic text-slate-400 mb-3">Jan. 2025 &#45; Present, Irvine, CA</p>
            <ul className="list-disc pl-5 space-y-2 text-slate-300">
              <li>Oversaw the installation, configuration, and maintenance of hardware and software systems across multiple locations.</li>
              <li>Provided daily IT support for 40+ employees, as well as trained staff on system use.</li>
              <li>Rebuilt and managed the organization&apos;s website using WordPress and Beaver Builder.</li>
              <li>Supporting data collection for Enhanced Care Management and Community Health Worker programs.</li>
            </ul>
          </div>
          <div className="border-l-4 border-blue-500 pl-6 hover:border-purple-500 transition-colors duration-300">
            <h3 className="text-xl font-bold text-blue-400 mb-1">Marketing Manager, DeLillo Chevrolet</h3>
            <p className="italic text-slate-400 mb-3">Jan. 2021 &#45; May 2024, Huntington Beach, CA</p>
            <ul className="list-disc pl-5 space-y-2 text-slate-300">
              <li>Developed Python tooling to automate tasks, optimizing output.</li>
              <li>Performed data analysis using Excel&apos;s visualization tools.</li>
              <li>Maintained backend price management software.</li>
              <li>Managed business marketing initiatives to drive sales and generate leads.</li>
            </ul>
          </div>
          <div className="border-l-4 border-blue-500 pl-6 hover:border-purple-500 transition-colors duration-300">
            <h3 className="text-xl font-bold text-blue-400 mb-1">3D Printing Technician, Self-Employed</h3>
            <p className="italic text-slate-400 mb-3">Jan. 2019 &#45; Present, Long Beach, CA</p>
            <ul className="list-disc pl-5 space-y-2 text-slate-300">
              <li>Created and shipped prototypes using CAD modeling and 3D printing.</li>
              <li>Maintained 3D printers and automated print job workflows.</li>
            </ul>
          </div>
        </div>
      </div>




    </div>
  );
};

export default HomePage;
