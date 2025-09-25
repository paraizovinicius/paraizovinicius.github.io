import React from "react";

const AboutMe: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-800 mt-8 md:mt-0">
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
            
        </div>
    );
};

export default AboutMe;
