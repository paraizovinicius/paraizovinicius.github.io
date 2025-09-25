import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import eu from "../assets/eu.png";


const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
    <section className="flex flex-col items-center justify-center py-16 px-6 text-center bg-gradient-to-r from-orange-100 to-pink-100">
      <div>
        <img src={eu} alt="EU" className="w-43 h-40 rounded-full" />
      </div>
      <h1 className="text-4xl font-bold mb-2">Vinicius Paraizo</h1>
      <p className="text-lg text-gray-700 max-w-xl">
        AI Engineer & Computer Science Enthusiast. Passionate about machine
        learning, game development, and building impactful projects.
      </p>
    </section>

      {/* About Me */}
      <section className="max-w-3xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-600 leading-relaxed">
          I am a Computer Science student at CEFET with experience in machine
          learning, fuzzy logic systems, and web development. I enjoy combining
          technical expertise with creativity to solve real-world problems and
          share my knowledge with the community.
        </p>
      </section>

      {/* Trajectory */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-8 text-center">
            My Journey in Computer Science
          </h2>
          <div className="space-y-6">
            <div className="p-4 border-l-4 border-orange-500 bg-orange-50 shadow-sm rounded-md">
              <h3 className="font-bold">2021 - Started Computer Science</h3>
              <p className="text-gray-600">
                Enrolled at CEFET and began exploring programming, algorithms,
                and software engineering.
              </p>
            </div>
            <div className="p-4 border-l-4 border-pink-500 bg-pink-50 shadow-sm rounded-md">
              <h3 className="font-bold">2023 - Machine Learning Internship</h3>
              <p className="text-gray-600">
                Worked with semi-supervised models (HuBERT), feature extraction,
                and audio processing.
              </p>
            </div>
            <div className="p-4 border-l-4 border-purple-500 bg-purple-50 shadow-sm rounded-md">
              <h3 className="font-bold">2024 - Research & Web Projects</h3>
              <p className="text-gray-600">
                Developed AI-powered web apps with Flask and React. Explored
                fuzzy logic systems for crane control simulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-12 px-6 bg-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
          <div className="flex justify-center gap-6">
            <a
              href="mailto:vinicius@example.com"
              className="flex items-center gap-2 text-gray-700 hover:text-orange-500"
            >
              <Mail /> Email
            </a>
            <a
              href="https://github.com/paraizovinicius"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 hover:text-orange-500"
            >
              <Github /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/paraizovinicius"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 hover:text-orange-500"
            >
              <Linkedin /> LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
