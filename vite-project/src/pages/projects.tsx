import React from "react";
import ProjectCard from "../components/projectCard";

const Projects: React.FC = () => {
    return (
        <div className="min-h-screen pl-0 md:pl-22 md:max-w-[70%] mx-auto bg-gray-50 text-gray-800 py-12 px-6 mt-8 md:mt-0">
            <h1 className="text-4xl font-bold mb-8 text-center">Projects</h1>
            <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-1">
                <ProjectCard
                    title="Government Spending Audit: A Natural Language Processing Approach"
                    description={<div>Applied a non-official Deep Embedded Clustering (DEC) algorithm implementation from <a href="https://github.com/vlukiyanov/pt-dec/tree/master" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
                                vlukiyanov/pt-dec
                            </a> to group public spending records of local government (TCE/RJ). Preprocessing included converting 1.4M records from CSV to Parquet format and transforming text fields into semantic embeddings. Processing involved training an autoencoder for dimensionality reduction, followed by DEC clustering. Achieved a silhouette score of 0.9172, indicating highly coherent clusters.</div>}
                    tech={["Pytorch", "DEC", "NLP", "Streamlit", "LangChain", "Chroma"]}
                    github="https://github.com/AILAB-CEFET-RJ/tcene"
                />

                <ProjectCard
                    title="Nemesis"
                    description={<div>
                        Developed in collaboration with Prof. Eduardo Bezerra and M.sc Wellington Amaral, Nemesis 
                        (Notas de EMpenho com Estratégia Semântica e Inteligência de Sistemas) is a web application 
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

                <ProjectCard
                    title="SCRNA-Seq Analysis"
                    description={
                        <div>
                            Implementation created to benchmark several clustering algorithms: SDEC, DEC, KMeans, and Spectral Clustering. 
                            This work extends a previous project, <a href="https://github.com/AILAB-CEFET-RJ/brca-scrna-seq/tree/master" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">SCRNA-Seq Analysis of BRCA Patients</a>, which compared KMeans and Spectral Clustering across different preprocessing pipelines (Standard Scaler and PCA). 
                            My main contribution was integrating DEC and implementing SDEC from scratch, based on the unofficial DEC 
                            implementation <a href="https://github.com/vlukiyanov/pt-dec/tree/master" target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
                                vlukiyanov/pt-dec
                            </a>. 
                            The key modification was enhancing the DEC loss function by incorporating a semi-supervised component using pairwise constraints, improving clustering performance on labeled data.
                        </div>
                    }
                    tech={["PyTorch", "SDEC"]}
                    github="https://github.com/paraizovinicius/SCRNA-Seq"
                />
            </div>
        </div>
    );
};

export default Projects;
