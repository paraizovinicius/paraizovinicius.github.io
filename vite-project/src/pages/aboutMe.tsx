import React from "react";

const AboutMe: React.FC = () => {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 text-gray-800 mt-8 md:mt-0 ">
            {/* About Me */}
            <section className="max-w-3xl mx-auto py-12 px-6 space-y-6">
                <h1 className="text-4xl font-bold mb-2 text-center">About me</h1>
                <hr className="border-t border-gray-300 mt-2 mb-1.5 max-w-[80%] mx-auto mb-8" />
                
                {/* Quick Summary Navigation */}
                <details className="bg-white rounded-lg shadow-md p-2 mb-8">
                <summary className="cursor-pointer text-lg font-semibold text-gray-800 flex items-center gap-2 p-2 hover:text-blue-600">
                    {/* You can replace this with an icon from lucide-react or heroicons */}
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    Quick Summary
                </summary>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-3">
                    <div
                    onClick={() => scrollToSection('identity')}
                    className="cursor-pointer text-left p-3 rounded-md bg-blue-50 hover:bg-blue-100 transition-colors border border-blue-200 hover:border-blue-300"
                    >
                    <span className="font-semibold text-blue-700">1. Identity</span>
                    </div>

                    <div
                    onClick={() => scrollToSection('academic-beginnings')}
                    className="cursor-pointer text-left p-3 rounded-md bg-green-50 hover:bg-green-100 transition-colors border border-green-200 hover:border-green-300"
                    >
                    <span className="font-semibold text-green-700">2. Academic Beginnings</span>
                    </div>

                    <div
                    onClick={() => scrollToSection('commitment-growth')}
                    className="cursor-pointer text-left p-3 rounded-md bg-purple-50 hover:bg-purple-100 transition-colors border border-purple-200 hover:border-purple-300"
                    >
                    <span className="font-semibold text-purple-700">3. Commitment to Growth</span>
                    </div>

                    <div
                    onClick={() => scrollToSection('corporate-experience')}
                    className="cursor-pointer text-left p-3 rounded-md bg-orange-50 hover:bg-orange-100 transition-colors border border-orange-200 hover:border-orange-300"
                    >
                    <span className="font-semibold text-orange-700">4. Corporate Experience</span>
                    </div>

                    <div
                    onClick={() => scrollToSection('academic-exchange')}
                    className="cursor-pointer text-left p-3 rounded-md bg-indigo-50 hover:bg-indigo-100 transition-colors border border-indigo-200 hover:border-indigo-300"
                    >
                    <span className="font-semibold text-indigo-700">5. Academic Exchange</span>
                    </div>

                    <div
                    onClick={() => scrollToSection('applied-research')}
                    className="cursor-pointer text-left p-3 rounded-md bg-red-50 hover:bg-red-100 transition-colors border border-red-200 hover:border-red-300"
                    >
                    <span className="font-semibold text-red-700">6. Applied Research</span>
                    </div>

                    <div
                    onClick={() => scrollToSection('course-conclusion')}
                    className="cursor-pointer text-left p-3 rounded-md bg-teal-50 hover:bg-teal-100 transition-colors border border-teal-200 hover:border-teal-300"
                    >
                    <span className="font-semibold text-teal-700">7. Course Conclusion</span>
                    </div>

                    <div
                    onClick={() => scrollToSection('professional-trajectory')}
                    className="cursor-pointer text-left p-3 rounded-md bg-yellow-50 hover:bg-yellow-100 transition-colors border border-yellow-200 hover:border-yellow-300"
                    >
                    <span className="font-semibold text-yellow-700">8. Professional Trajectory</span>
                    </div>

                    <div
                    onClick={() => scrollToSection('identity-researcher')}
                    className="cursor-pointer text-left p-3 rounded-md bg-pink-50 hover:bg-pink-100 transition-colors border border-pink-200 hover:border-pink-300 md:col-span-2"
                    >
                    <span className="font-semibold text-pink-700">9. Identity as a Researcher</span>
                    </div>
                </div>
                </details>


                <div id="identity">
                    <div className="font-bold text-[20px] text-left">Identity</div>
                    <div className="text-gray-600 leading-relaxed text-[18px] text-left">
                        Throughout my academic journey, I always tried to absorb knowledge as much as possible, working with dedication and discipline. From an early age, I understood that learning is not limited to class, but it can be constructed through practical challenges, diverse experiences, and constant reflection on my strong and weak points.
                    </div>
                </div>
                <div id="academic-beginnings">
                    <div className="font-bold text-[20px] text-left">Academic Beginnings and Time Management</div>
                    <div className="text-gray-600 leading-relaxed text-[18px] text-left">
                        My trajectory started with a BSc in Economics at Ibmec, where I participated in Ibmec Jr, a junior enterprise, while I started a BSc in Computer Science at CEFET/RJ. There were days when I moved between the two universities and still balanced projects of market viability at the Ibmec Jr. This moment of my life taught me, above all, to manage rigorously my time, to deal with different kinds of responsibilities, and to value interdisciplinarity between both courses.
                    </div>
                </div>

                <div id="commitment-growth">
                    <div className="font-bold text-[20px] text-left">Commitment to Growth and Overcoming Challenges</div>
                    <div className="text-gray-600 leading-relaxed text-[18px] text-left">
                        When deciding to dedicate myself entirely to Computer Science, I began facing my own limitations in a proactive way. For instance, the Data Structures in C++ subject, where, although I passed, I felt that I had not learned it all to its maximum capacity. That is why I decided to become a data structures tutor for a year. Teaching other students not only consolidated my knowledge but also reinforced my teaching capabilities.
                    </div>
                </div>

                <div id="corporate-experience">
                    <div className="font-bold text-[20px] text-left">Corporate Experience </div>
                    <div className="text-gray-600 leading-relaxed text-[18px] text-left">
                        As I was seeking an experience in a corporate environment, I joined VTEX, a global company specializing in e-commerce. Besides learning methodologies and company routine, I developed, by my own initiative, a Python script to automate a process that was once done manually in Google Sheets. After presenting this project to my superiors, it was approved and put into practice, cutting in half the time needed to complete the same process. This experience fortified my sense of practical impact within an enterprise.
                    </div>
                </div>
                <div id="academic-exchange">
                    <div className="font-bold text-[20px] text-left">Academic Exchange and First Contact with Research</div>
                    <div className="text-gray-600 leading-relaxed text-[18px] text-left">
                        As I wanted to extend my horizons, I did an exchange Master's Program at Aix-Marseille Université, where I enrolled in computer science subjects. Parallel to that, I worked as a job étudiant, supporting peers with special needs during exams, which improved my capabilities with social responsibility. At the same period, I joined LIS-Lab as a paid intern, where I had my first deep contact with Research and developed a strong interest in that area.
                    </div>
                </div>
                <div id="applied-research">
                    <div className="font-bold text-[20px] text-left">Applied Research and Organizational Impact</div>
                    <div className="text-gray-600 leading-relaxed text-[18px] text-left">
                        After the exchange program, I did a six-month paid internship at P&D Euranova in Marseille. Along with my persistence and initiative, I managed to negotiate with CEFET’s direction to authorize this internship, which was not allowed institutionally. This experience required reading diverse scientific papers and resulted in a rapport de stage, which served as a guide to developers within Euranova to code AI in a more frugal way. Besides, I presented monthly to the company the advancements of the project, in sessions of 30 minutes, strengthening my technical communication skills. All of that was balanced with my final thesis, which demanded great discipline and time management.
                    </div>
                </div>
                <div id="course-conclusion">
                    <div className="font-bold text-[20px] text-left">Course conclusion and Academic recognition </div>
                    <div className="text-gray-600 leading-relaxed text-[18px] text-left">
                        During two semesters, I deepened my research in machine learning, analyzing dozens of papers and producing my undergraduate dissertation. That effort culminated in of the greatest conquests of my trajectory, which was receiving the maximum grade unanimously from the examining committee.
                    </div>
                </div>
                <div id="professional-trajectory">
                    <div className="font-bold text-[20px] text-left">Professional trajectory and Research progress </div>
                    <div className="text-gray-600 leading-relaxed text-[18px] text-left">
                        Later, I started a career as a Web Developer, where I joined a senior team working with an agile methodology to develop a platform for Hapvida, one of the largest health plan companies in Brazil. In parallel, alongside Prof. Eduardo Bezerra, I developed the project Nemesis, derived from my thesis. That project won first place in a national contest with 44 other participants and was later presented by Prof. Bezerra and me at Painel Telebrasil 2025 in Brazil’s capital city, Brasília.
                    </div>
                </div>
                <div id="identity-researcher">
                    <div className="font-bold text-[20px] text-left">Identity as a Researcher</div>
                    <div className="text-gray-600 leading-relaxed text-[18px] text-left">
                        Each step of my trajectory has contributed to the researcher I am today, with my academic rigor and practical and didactic experience. Today, I understand well that difficulties and learning walk alongside each other. Because of that, I face each challenge with resilience and curiosity, which guide my evolution as a scientist, enabling me to create original solutions. I seek to deepen my engagement in computer science research, with special interest in developing and optimizing machine learning algorithms that unify theory and practice, contributing to technological advancements and society.
                    </div>
                </div>
            </section>
            
        </div>
    );
};

export default AboutMe;
