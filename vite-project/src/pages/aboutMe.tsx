import React from "react";
import { TimelineComponent } from "../components/timeline";
import { useLanguage } from "../contexts/LanguageContext";

const AboutMe: React.FC = () => {
    const { language, t } = useLanguage();

    return (
        <div className="min-h-screen bg-gray-50 text-gray-800 mt-8 md:mt-0 ">
            {/* About Me */}
            <section className="max-w-3xl mx-auto py-12 px-6 space-y-6">
                <h1 className="text-4xl font-bold mb-2 text-center">{t("about.title")}</h1>
                <hr className="border-t border-gray-300 mt-2 mb-1.5 max-w-[80%] mx-auto mb-8" />
                
                <div>
                <div className="font-bold text-[20px] text-left">
                    {language === "en" ? "Identity as a Researcher" : "Identité en tant que chercheur"}
                </div>
                <div className="text-gray-600 leading-relaxed text-[18px] text-left">
                    {language === "en" ? (
                    <>
                        Each step of my trajectory has contributed to the researcher I am today, with my academic rigor and practical and didactic experience. 
                        Today, I understand well that difficulties and learning walk alongside each other. Because of that, I face each challenge with resilience 
                        and curiosity, which guide my evolution as a scientist, enabling me to create original solutions. I seek to deepen my engagement in computer 
                        science research, with special interest in developing and optimizing machine learning algorithms that unify theory and practice, contributing 
                        to technological advancements and society.
                    </>
                    ) : (
                    <>
                        Chaque étape de mon parcours a contribué au chercheur que je suis aujourd’hui, grâce à ma rigueur académique et à mon expérience pratique 
                        et didactique. J’ai désormais bien compris que les difficultés et l’apprentissage avancent ensemble. Pour cette raison, j’aborde chaque 
                        défi avec résilience et curiosité, qui orientent mon évolution en tant que scientifique et me permettent de créer des solutions originales. 
                        Je cherche à approfondir mon engagement dans la recherche en informatique, avec un intérêt particulier pour le développement et 
                        l’optimisation d’algorithmes d’apprentissage automatique qui unifient théorie et pratique, contribuant ainsi aux avancées technologiques 
                        et à la société.
                    </>
                    )}
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
                            {language === "en"
                                ? "Academic Beginnings and Time Management"
                                : "Débuts académiques et gestion du temps"}
                            </div>
                            <div className="text-gray-600 leading-relaxed text-[18px] text-left">
                            {language === "en" ? (
                                <>
                                My trajectory started with a BSc in Economics at Ibmec, where I participated in Ibmec Jr, a junior enterprise, while I started a BSc in Computer Science at CEFET/RJ. There were days when I moved between the two universities and still balanced projects of market viability at the Ibmec Jr. This moment of my life taught me, above all, to manage rigorously my time, to deal with different kinds of responsibilities, and to value interdisciplinarity between both courses.
                                </>
                            ) : (
                                <>
                                Mon parcours a commencé par un BSc en économie à l’Ibmec, où j’ai participé à Ibmec Jr, une junior entreprise, tout en commençant un BSc en informatique au CEFET/RJ. Il y avait des journées où je me déplaçais entre les deux universités tout en gérant des projets de viabilité sur le marché à Ibmec Jr. Ce moment de ma vie m’a surtout appris à gérer rigoureusement mon temps, à faire face à différents types de responsabilités et à valoriser l’interdisciplinarité entre les deux cursus.
                                </>
                            )}
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
                            {language === "en"
                                ? "Commitment to Growth and Overcoming Challenges"
                                : "Engagement envers la croissance et surmonter les défis"}
                            </div>
                            <div className="text-gray-600 leading-relaxed text-[18px] text-left">
                            {language === "en" ? (
                                <>
                                When deciding to dedicate myself entirely to Computer Science, I began facing my own limitations in a proactive way. For instance, the Data Structures in C++ subject, where, although I passed, I felt that I had not learned it all to its maximum capacity. That is why I decided to become a data structures tutor for a year. Teaching other students consolidated my knowledge and reinforced my teaching capabilities.
                                </>
                            ) : (
                                <>
                                En décidant de me consacrer entièrement à l’informatique, j’ai commencé à affronter mes propres limites de manière proactive. Par exemple, la matière Structures de Données en C++, où, bien que j’aie réussi, j’avais le sentiment de ne pas avoir appris tout son contenu à son maximum. C’est pourquoi j’ai décidé de devenir tuteur en structures de données pendant un an. Enseigner à d’autres étudiants a consolidé mes connaissances et renforcé mes capacités pédagogiques.
                                </>
                            )}
                            </div>
                        </>
                        ),
                    },
                    {
                        id: "corporate-experience",
                        year: "2022",
                        content: (
                            <>
                            <div className="font-bold text-[20px] text-left">
                                {language === "en" ? "Corporate Experience" : "Expérience en entreprise"}
                            </div>
                            <div className="text-gray-600 leading-relaxed text-[18px] text-left">
                                {language === "en" ? (
                                <>
                                    As I was seeking an experience in a corporate environment, I joined VTEX, a global company specializing in e-commerce.
                                </>
                                ) : (
                                <>
                                    Cherchant une expérience en entreprise, j’ai rejoint VTEX, une entreprise internationale spécialisée dans le commerce électronique.
                                </>
                                )}
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
                                {language === "en"
                                ? "Academic Exchange and First Contact with Research"
                                : "Échange académique et premier contact avec la recherche"}
                            </div>
                            <div className="text-gray-600 leading-relaxed text-[18px] text-left">
                                {language === "en" ? (
                                <>
                                    As I wanted to extend my horizons, I did an exchange Master's Program at Aix-Marseille Université, where I enrolled in computer science subjects. Parallel to that, I worked as a job étudiant, supporting peers with special needs during exams, which improved my capabilities with social responsibility. At the same period, I joined LIS-Lab as a paid intern, where I had my first deep contact with Research and developed a strong interest in that area.
                                </>
                                ) : (
                                <>
                                    Souhaitant élargir mes horizons, j’ai effectué un programme de Master en échange à l’Université Aix-Marseille, où je me suis inscrit à des matières en informatique. Parallèlement, j’ai travaillé comme job étudiant, en aidant des camarades en situation de handicap lors des examens, ce qui a renforcé mes compétences en responsabilité sociale. À la même période, j’ai rejoint LIS-Lab en tant que stagiaire rémunéré, où j’ai eu mon premier contact approfondi avec la recherche et développé un fort intérêt pour ce domaine.
                                </>
                                )}
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
                                    {language === "en"
                                    ? "Applied Research and Organizational Impact"
                                    : "Recherche appliquée et impact organisationnel"}
                                </div>
                                <div className="text-gray-600 leading-relaxed text-[18px] text-left">
                                    {language === "en" ? (
                                    <>
                                        After the exchange program, I did a six-month paid internship at P&D Euranova in Marseille. Along with my persistence and initiative, I managed to negotiate with CEFET’s direction to authorize this internship, which was not allowed institutionally. This experience required reading diverse scientific papers and resulted in a rapport de stage, which served as a guide to developers within Euranova to code AI in a more frugal way. Besides, I presented monthly to the company the advancements of the project, in sessions of 30 minutes, strengthening my technical communication skills. All of that was balanced with my final thesis, which demanded great discipline and time management.
                                    </>
                                    ) : (
                                    <>
                                        Après le programme d’échange, j’ai effectué un stage rémunéré de six mois chez P&D Euranova à Marseille. Grâce à ma persévérance et mon initiative, j’ai réussi à négocier avec la direction du CEFET l’autorisation de ce stage, qui n’était pas permise institutionnellement. Cette expérience a nécessité la lecture de divers articles scientifiques et a abouti à un rapport de stage servant de guide aux développeurs d’Euranova pour coder l’IA de manière plus économe. De plus, je présentais chaque mois à l’entreprise l’avancement du projet lors de sessions de 30 minutes, renforçant mes compétences en communication technique. Le tout était équilibré avec mon mémoire final, qui exigeait une grande discipline et gestion du temps.
                                    </>
                                    )}
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
                                    {language === "en"
                                    ? "Course conclusion and Academic recognition"
                                    : "Conclusion du cursus et reconnaissance académique"}
                                </div>
                                <div className="text-gray-600 leading-relaxed text-[18px] text-left">
                                    {language === "en" ? (
                                    <>
                                        During two semesters, I deepened my research in machine learning, analyzing dozens of papers and producing my undergraduate dissertation. That effort culminated in one of the greatest achievements of my trajectory: receiving the maximum grade unanimously from the examining committee.
                                    </>
                                    ) : (
                                    <>
                                        Pendant deux semestres, j’ai approfondi ma recherche en apprentissage automatique, en analysant des dizaines d’articles et en produisant mon mémoire de fin d’études. Cet effort a culminé dans l’une des plus grandes réussites de mon parcours : obtenir la note maximale à l’unanimité du jury d’examen.
                                    </>
                                    )}
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
                                    {language === "en"
                                    ? "Professional trajectory and Research progress"
                                    : "Parcours professionnel et avancées en recherche"}
                                </div>
                                <div className="text-gray-600 leading-relaxed text-[18px] text-left">
                                    {language === "en" ? (
                                    <>
                                        Later, I started a career as a Web Developer, where I joined a senior team working with an agile methodology to develop a platform for Hapvida, one of the largest health plan companies in Brazil. In parallel, alongside Prof. Eduardo Bezerra, I developed the project Nemesis, derived from my thesis. That project won first place in a national contest with 44 other participants and was later presented by Prof. Bezerra and me at Painel Telebrasil 2025 in Brazil’s capital city, Brasília.
                                    </>
                                    ) : (
                                    <>
                                        Par la suite, j’ai commencé une carrière de développeur web, rejoignant une équipe senior travaillant en méthodologie agile pour développer une plateforme pour Hapvida, l’une des plus grandes compagnies de santé au Brésil. Parallèlement, avec le Prof. Eduardo Bezerra, j’ai développé le projet Nemesis, dérivé de mon mémoire. Ce projet a remporté la première place dans un concours national avec 44 autres participants et a ensuite été présenté par le Prof. Bezerra et moi au Painel Telebrasil 2025 dans la capitale du Brésil, Brasília.
                                    </>
                                    )}
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
