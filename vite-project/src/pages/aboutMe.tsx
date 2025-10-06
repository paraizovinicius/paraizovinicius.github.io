import React from "react";
import { TimelineComponent } from "../components/timeline";

const AboutMe: React.FC = () => {

    return (
        <div className="min-h-screen bg-gray-50 text-gray-800 mt-8 md:mt-0 ">
            {/* About Me */}
            <section className="max-w-3xl mx-auto py-12 px-6 space-y-6">
                <h1 className="text-4xl font-bold mb-2 text-center">About me</h1>
                <hr className="border-t border-gray-300 mt-2 mb-1.5 max-w-[80%] mx-auto mb-8" />
                
                <div>
                    <div className="font-bold text-[20px] text-left">Identity as a Researcher</div>
                    <div className="text-gray-600 leading-relaxed text-[18px] text-left">
                        Each step of my trajectory has contributed to the researcher I am today, with my academic rigor and practical and didactic experience. Today, I understand well that difficulties and learning walk alongside each other. Because of that, I face each challenge with resilience and curiosity, which guide my evolution as a scientist, enabling me to create original solutions. I seek to deepen my engagement in computer science research, with special interest in developing and optimizing machine learning algorithms that unify theory and practice, contributing to technological advancements and society.
                    </div>
                </div>

                <hr className="border-t border-gray-300 mt-2 mb-1.5 max-w-[80%] mx-auto mt-10 mb-3" />
                <h2 className="text-4xl font-semibold mb-2 text-center">Professional Trajectory</h2>
                
                <TimelineComponent
                    items={[
                        {
                        id: "academic-beginnings",
                        year: "2019",
                        content: (
                            <>
                            <div className="font-bold text-[20px] text-left">
                                Academic Beginnings and Time Management
                            </div>
                            <div className="text-gray-600 leading-relaxed text-[18px] text-left">
                                My trajectory started with a BSc in Economics at Ibmec, where I participated in Ibmec Jr, a junior enterprise, while I started a BSc in Computer Science at CEFET/RJ. There were days when I moved between the two universities and still balanced projects of market viability at the Ibmec Jr. This moment of my life taught me, above all, to manage rigorously my time, to deal with different kinds of responsibilities, and to value interdisciplinarity between both courses.
                    
                            </div>
                            </>
                        ),
                        },
                        {
                        id: "commitment-growth",
                        year: "2022",
                        content: (
                            <>
                            <div className="font-bold text-[20px] text-left">
                                Commitment to Growth and Overcoming Challenges
                            </div>
                            <div className="text-gray-600 leading-relaxed text-[18px] text-left">
                                When deciding to dedicate myself entirely to Computer Science, I began facing my own limitations in a proactive way. For instance, the Data Structures in C++ subject, where, although I passed, I felt that I had not learned it all to its maximum capacity. That is why I decided to become a data structures tutor for a year. Teaching other students consolidated my knowledge and reinforced my teaching capabilities.
                            </div>
                            </>
                        ),
                        },
                        {
                        id: "corporate-experience",
                        year: "2022",
                        content: (
                            <>
                            <div className="font-bold text-[20px] text-left">Corporate Experience</div>
                            <div className="text-gray-600 leading-relaxed text-[18px] text-left">
                                As I was seeking an experience in a corporate environment, I joined VTEX, a global company specializing in e-commerce.
                            </div>
                            </>
                        ),
                        },
                        {
                        id: "academic-exchange",
                        year: "2023",
                        content: (
                            <>
                            <div className="font-bold text-[20px] text-left">
                                Academic Exchange and First Contact with Research
                            </div>
                            <div className="text-gray-600 leading-relaxed text-[18px] text-left">
                                As I wanted to extend my horizons, I did an exchange Master's Program at Aix-Marseille Université, where I enrolled in computer science subjects. Parallel to that, I worked as a job étudiant, supporting peers with special needs during exams, which improved my capabilities with social responsibility. At the same period, I joined LIS-Lab as a paid intern, where I had my first deep contact with Research and developed a strong interest in that area.
                            </div>
                            </>
                        ),
                        },
                        {
                        id: "applied-research",
                        year: "2024",
                        content: (
                            <>
                            <div className="font-bold text-[20px] text-left">
                                Applied Research and Organizational Impact
                            </div>
                            <div className="text-gray-600 leading-relaxed text-[18px] text-left">
                                After the exchange program, I did a six-month paid internship at P&D Euranova in Marseille. Along with my persistence and initiative, I managed to negotiate with CEFET’s direction to authorize this internship, which was not allowed institutionally. This experience required reading diverse scientific papers and resulted in a rapport de stage, which served as a guide to developers within Euranova to code AI in a more frugal way. Besides, I presented monthly to the company the advancements of the project, in sessions of 30 minutes, strengthening my technical communication skills. All of that was balanced with my final thesis, which demanded great discipline and time management.
                            </div>
                            </>
                        ),
                        },
                        {
                        id: "course-conclusion",
                        year: "2025",
                        content: (
                            <>
                            <div className="font-bold text-[20px] text-left">
                                Course conclusion and Academic recognition
                            </div>
                            <div className="text-gray-600 leading-relaxed text-[18px] text-left">
                                During two semesters, I deepened my research in machine learning, analyzing dozens of papers and producing my undergraduate dissertation. That effort culminated in of the greatest conquests of my trajectory, which was receiving the maximum grade unanimously from the examining committee.
                            </div>
                            </>
                        ),
                        },
                        {
                        id: "professional-trajectory",
                        year: "2025",
                        content: (
                            <>
                            <div className="font-bold text-[20px] text-left">
                                Professional trajectory and Research progress
                            </div>
                            <div className="text-gray-600 leading-relaxed text-[18px] text-left">
                                Later, I started a career as a Web Developer, where I joined a senior team working with an agile methodology to develop a platform for Hapvida, one of the largest health plan companies in Brazil. In parallel, alongside Prof. Eduardo Bezerra, I developed the project Nemesis, derived from my thesis. That project won first place in a national contest with 44 other participants and was later presented by Prof. Bezerra and me at Painel Telebrasil 2025 in Brazil’s capital city, Brasília.
                            </div>
                            </>
                        ),
                        },
                    ]}
                    />


            </section>
            
        </div>
    );
};

export default AboutMe;
