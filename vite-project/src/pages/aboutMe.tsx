import React from "react";

const AboutMe: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-800 mt-8 md:mt-0 ">
            {/* About Me */}
            <section className="max-w-3xl mx-auto py-12 px-6 space-y-6">
                <h2 className="text-2xl font-semibold mb-4">About Me</h2>
                <p className="text-gray-600 leading-relaxed">
                    I am a curious and impact-driven AI engineer with hands-on experience in LLMs, 
                    RAG pipelines, and scalable ML systems.
                </p>
                <p className="text-gray-600 leading-relaxed">
                    Over the last year, I’ve combined my computer science background with hands-on AI 
                    research to build scalable, real-world solutions.
                </p>
                <p className="text-gray-600 leading-relaxed">
                    First, I thrive on tackling challenging work and pushing technical boundaries. 
                    During my academic journey, I sought opportunities to apply my AI knowledge to 
                    real-world problems that matter. Together with my advisor, I built a fraud detection 
                    web service that processed over 1.4 million government expenses using LangChain 
                    Vectorstore and won 1st place for Impact out of 44 projects at the INOVA Telebrasil 
                    national contest. This experience taught me how to combine deep learning, 
                    data engineering, and end-to-end system design to build solutions that are both 
                    technically sound and socially meaningful.
                </p>
                <p className="text-gray-600 leading-relaxed">
                    Second, I’ve always been keen with different types of work in my life. At Euranova, 
                    France, I worked as a researcher on a cutting-edge RAG project with llama 3.0, 
                    focusing on measuring and optimizing the carbon footprint of LLM pipelines. 
                    Diving into this challenge required deep research and creative problem-solving. 
                </p>
                <p className="text-gray-600 leading-relaxed">
                    Third, what stands out to me is the emphasis on building partnerships grounded in 
                    precision and understanding. I believe AI can play a key role in strengthening 
                    these values by enabling transparency, fairness, and efficiency in recruitment 
                    processes. Joining this mission excites me because it means applying my AI 
                    expertise in a space where the outcome transforms not only companies but also 
                    people’s professional journeys.
                </p>
            </section>
            
        </div>
    );
};

export default AboutMe;
