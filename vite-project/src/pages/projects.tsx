import React from "react";
import ProjectCard from "../components/projectCard";

const Projects: React.FC = () => {
    return (
        <div className="min-h-screen pl-0 md:pl-22 max-w-[90%] md:max-w-[70%] mx-auto bg-gray-50 text-gray-800 py-12 px-6 mt-8 md:mt-0">
            <h1 className="text-4xl font-bold mb-8 text-center">Projects</h1>
            <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-1">
                <ProjectCard
                    title="Government Spending Audit: A Natural Language Processing Approach"
                    description={<div>Developed and applied a Deep Embedded Clustering (DEC) algorithm to group public spending records (Notas de Empenho) from TCE/RJ. Preprocessing included converting 1.4M records from CSV to Parquet format and transforming text fields into semantic embeddings. Processing involved training an autoencoder for dimensionality reduction, followed by DEC clustering. Achieved a silhouette score of 0.9172, indicating highly coherent clusters.</div>}
                    tech={["Pytorch", "DEC", "NLP", "Streamlit", "LangChain", "Chroma"]}
                    github="https://github.com/AILAB-CEFET-RJ/tcene"
                />

                <ProjectCard
                    title="Nemesis"
                    description={<div>
                        Developed in collaboration with Prof. Eduardo Bezerra and M.sc Wellington Amaral, Nemesis 
                        (Notas de EMPenho com Estratégia Semântica e Inteligência de Sistemas) is a web application 
                        with database integration via FastAPI.
                        <hr className="border-t border-gray-300 mt-2 mb-1.5 max-w-[80%] mx-auto" />
                        <ul className="list-disc pl-6 text-left space-y-2">
                            <li>
                                Direct and semantic database queries.
                            </li>
                            <li>
                                3D projection of spending records, using a Denoised Autoencoder to map semantic embeddings into three-dimensional space for group detection.
                            </li>
                            <li>
                                Access to the 'fracionamento' (split payments) table, generated through a graph-based grouping algorithm with filtering rules.
                            </li>
                            <li>
                                Overpricing analysis, comparing filtered spending records with semantically similar records from other municipalities in the same year using pgvector in PostgreSQL.
                            </li>
                        </ul>
                        </div>}
                    tech={["React", "FastAPI", "SQLAlchemy", "Pgvector", "SDAE"]}
                    github="https://github.com/AILAB-CEFET-RJ/nemesis"
                    demo=""
                />
            </div>
        </div>
    );
};

export default Projects;
