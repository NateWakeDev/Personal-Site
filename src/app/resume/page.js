// src/app/resume/page.js
import React from 'react';
import { Divider } from '@nextui-org/react';
import { Button, ButtonGroup } from "@nextui-org/button";
import { Link } from "@nextui-org/react";

const ResumePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">

      {/* Download Link */}
      <div className="mb-8">
        <Link href="/Nathan_Wakefield_Resume.pdf">
          <Button
            color="primary"
            size="lg"
            radius="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            📄 Download My Resume (PDF)
          </Button>
        </Link>
      </div>

      <Divider className="my-6 opacity-30" />

      <div className="mb-8 p-6 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Nathan J. Wakefield</h1>
        <p className="text-lg mb-4 text-slate-300">
          US Citizen | <a href="mailto:nathanjwakefield@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">nathanjwakefield@gmail.com</a> | (562) 481-2028 | Long Beach, CA
        </p>
        <p className="text-lg text-slate-300 leading-relaxed">
          A passionate computer science graduate with a strong foundation in self-driven automation projects using Python. Automotive and 3D Printing hobbyist.
        </p>
      </div>

      <Divider className="my-8 opacity-30" />

      {/* Skills Section */}
      <section className="mb-12 p-6 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm">
        <h2 className="text-3xl font-bold mb-6 gradient-text">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {['Python', 'C++', 'Automation', 'Microsoft Excel', 'Data Visualization', 'Software Design', 'Debugging', 'NumPy', 'Pandas', 'MatPlotLib', 'Blender', 'Fusion 360', 'SolidWorks'].map((skill, index) => (
            <div
              key={index}
              className="px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-full hover:from-blue-600/30 hover:to-purple-600/30 hover:border-blue-400/50 transition-all duration-300"
            >
              <span className="text-sm font-medium">{skill}</span>
            </div>
          ))}
        </div>
      </section>

      <Divider className="my-8 opacity-30" />

      {/* Work Experience Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
        <div className="mb-4">
          <h3 className="text-xl font-bold">IT Manager / Software Developer, Sowing Seeds Health</h3>
          <p className="italic">Jan. 2025 - Present, Irvine, CA</p>
          <ul className="list-disc pl-5">
            <li>Oversaw the installation, configuration, and maintenance of hardware and software systems across multiple locations.</li>
            <li>Provided daily IT support for 40+ employees, as well as trained staff on system use.</li>
            <li>Rebuilt and managed the organization's website using WordPress and Beaver Builder.</li>
            <li>Supporting data collection for Enhanced Care Management and Community Health Worker programs.</li>
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-bold">Marketing Manager, DeLillo Chevrolet</h3>
          <p className="italic">Jan. 2021 - May 2024, Huntington Beach, CA</p>
          <ul className="list-disc pl-5">
            <li>Developed Python tooling to automate tasks, optimizing output.</li>
            <li>Performed data analysis using Excel's visualization tools.</li>
            <li>Maintained backend price management software.</li>
            <li>Managed business marketing initiatives to drive sales and generate leads.</li>
          </ul>
        </div>
        <div className="mb-8">
          <h3 className="text-xl font-bold">3D Printing Technician, Self-Employed</h3>
          <p className="italic">Jan. 2019 - Present, Long Beach, CA</p>
          <ul className="list-disc pl-5">
            <li>Printed and shipped prototypes across the US.</li>
            <li>Constructed CAD models using TinkerCAD and Fusion 360.</li>
            <li>Maintained 3D printers, including bed leveling and cleaning.</li>
            <li>Configured open-source tools to automate print jobs.</li>
          </ul>
        </div>
      </section>

      <Divider className="my-4" />

      {/* Project Experience Section */}
      <section className="mb-12 p-6 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm">
        <h2 className="text-3xl font-bold mb-8 gradient-text">Project Experience</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 pl-6 hover:border-purple-500 transition-colors duration-300">
            <h3 className="text-xl font-bold text-blue-400 mb-3">CSULB SAE Data Acquisitions Lead</h3>
            <ul className="list-disc pl-5 space-y-2 text-slate-300">
              <li>Promoted use of GitHub for managing CAD, programming, and datasheets.</li>
              <li>Refactored programs for Arduinos and ESP32s.</li>
              <li>Interfaced with GPS, G-force, suspension height, and temperature sensors.</li>
              <li>Designed and 3D printed housings for data components.</li>
            </ul>
          </div>
          <div className="border-l-4 border-blue-500 pl-6 hover:border-purple-500 transition-colors duration-300">
            <h3 className="text-xl font-bold text-blue-400 mb-3">Customer Review Request Automation</h3>
            <ul className="list-disc pl-5 space-y-2 text-slate-300">
              <li>Automated data entry, saving 4+ hours weekly using Python and Selenium.</li>
              <li>Used NumPy for CSV manipulation and data preprocessing.</li>
            </ul>
          </div>
          <div className="border-l-4 border-blue-500 pl-6 hover:border-purple-500 transition-colors duration-300">
            <h3 className="text-xl font-bold text-blue-400 mb-3">Photography and Videography Library Backup</h3>
            <ul className="list-disc pl-5 space-y-2 text-slate-300">
              <li>Automated renaming and organizing over 2TB of multimedia files.</li>
              <li>Developed a duplicate detection algorithm using average per-pixel RGB values.</li>
            </ul>
          </div>
          <div className="border-l-4 border-blue-500 pl-6 hover:border-purple-500 transition-colors duration-300">
            <h3 className="text-xl font-bold text-blue-400 mb-3">Digital Quadrascopic Lenticular Camera</h3>
            <ul className="list-disc pl-5 space-y-2 text-slate-300">
              <li>Designed and 3D printed a Quadrascopic Lenticular Camera body.</li>
              <li>Built a Python system to operate the camera and process photos.</li>
              <li>Used Raspberry PI to control 4 cameras simultaneously.</li>
            </ul>
          </div>
        </div>
      </section>

      <Divider className="my-8 opacity-30" />

      {/* Education Section */}
      <section className="mb-12 p-6 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm">
        <h2 className="text-3xl font-bold mb-6 gradient-text">Education</h2>
        <div>
          <h3 className="text-2xl font-bold text-blue-400 mb-2">California State University, Long Beach</h3>
          <p className="italic text-lg mb-3 text-slate-300">B.S. in Computer Science, August 2019 – December 2024</p>
          <p className="text-slate-400"><span className="font-semibold text-slate-300">Relevant Coursework:</span> Databases, Programming Language Principles, Algorithms, Data Structures, Object-Oriented Design, Python, Software Design Principles</p>
        </div>
      </section>
    </div>
  );
};

export default ResumePage;
