// src/app/projects/page.js
"use client";

import React from 'react';
import Link from 'next/link';
import { Canvas } from '@react-three/fiber';
import SuspensionPreview from '../components/SuspensionPreview';
import SensorPreview from '../components/SensorPreview';
import QuadCamPreview from '../components/QuadCamPreview';
import { Card, CardBody, CardFooter, CardHeader, Divider } from "@nextui-org/react"


const ProjectsPage = () => {
  const projectList = [
    {
      title: "System Schematics",
      preview: SensorPreview,
      desc: "The System Schematics for the ESP32-based data acquisition system used in the CSULB SAE Baja team.",
      link: "/projects/sensors",
    },
    {
      title: "Suspension Simulation",
      preview: SuspensionPreview,
      desc: "A 3D suspension simulation built with Three.js to visualize suspension behavior.",
      link: "/projects/suspension",
    },
    {
      title: "QuadCam",
      preview: QuadCamPreview,
      desc: "An overview of my Quadroscopic Lenticular Camera (Nishika 8000D Clone). Visualized with Three.js.",
      link: "/projects/quadcam",
    }

  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">My Projects</h1>
        <p className="text-lg text-slate-400 mb-6">Check out some of the projects I&apos;ve worked on! Click on them to learn more...</p>
      </div>
      <Divider className="my-6 opacity-30" />
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {projectList.map((item, index) => {
          const PreviewComponent = item.preview; // Assign the component to render dynamically
          return (
            <Card
              shadow="sm"
              key={index}
              isPressable
              onPress={() => (window.location.href = item.link)}
              className="border border-slate-700/50 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl cursor-pointer hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:transform hover:-translate-y-1"
            >
              <CardHeader className="p-4 text-center">
                <h3 className="text-xl font-semibold text-blue-400">{item.title}</h3>
              </CardHeader>

              <CardBody className="overflow-visible p-0">
                <div className="w-full h-48 bg-gray-200 rounded-t-md"> {/* Adjust spacing and rounding */}
                  {item.link.includes("suspension") ? (
                    <Canvas>
                      <ambientLight intensity={0.75} />
                      <directionalLight position={[0, 2, 10]} intensity={1} />
                      <PreviewComponent />
                    </Canvas>
                  ) : (
                    <PreviewComponent />
                  )}
                </div>
              </CardBody>

              <CardFooter className="p-4 text-center">
                <p className="text-slate-400">{item.desc}</p>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsPage;
