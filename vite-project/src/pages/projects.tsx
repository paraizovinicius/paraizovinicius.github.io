import React from "react";
import ProjectCard from "../components/projectCard";
import { useLanguage } from "../contexts/LanguageContext";

const Projects: React.FC = () => {
    const { language, t } = useLanguage();
    return (
        <div className="min-h-screen pl-0 md:pl-22 md:pl-0 mx-auto bg-gray-50 text-gray-800 py-12 px-6 mt-8 md:mt-0">
            <h1 className="text-4xl font-bold mb-8 text-center">{t("projects.title")}</h1>
            <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-1 pl-4">
                <ProjectCard
                    title={
                        language === "en"
                        ? "Government Spending Audit: A Natural Language Processing Approach"
                        : "Audit des dépenses publiques : une approche par traitement automatique du langage (NLP)"
                    }
                    description={
                        language === "en" ? (
                        <div>
                            Applied a non-official Deep Embedded Clustering (DEC) algorithm implementation from{" "}
                            <a
                            href="https://github.com/vlukiyanov/pt-dec/tree/master"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 underline"
                            >
                            vlukiyanov/pt-dec
                            </a>{" "}
                            to group public spending records of local government (TCE/RJ). Preprocessing included converting 1.4M records from CSV to Parquet format and transforming text fields into semantic embeddings. Processing involved training an autoencoder for dimensionality reduction, followed by DEC clustering. Achieved a silhouette score of 0.9172, indicating highly coherent clusters.
                        </div>
                        ) : (
                        <div>
                            Application d’une implémentation non officielle de l’algorithme Deep Embedded Clustering (DEC) depuis{" "}
                            <a
                            href="https://github.com/vlukiyanov/pt-dec/tree/master"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 underline"
                            >
                            vlukiyanov/pt-dec
                            </a>{" "}
                            pour regrouper les enregistrements de dépenses publiques du gouvernement local (TCE/RJ). Le prétraitement comprenait la conversion de 1,4 million d’enregistrements de CSV en format Parquet et la transformation des champs textuels en embeddings sémantiques. Le traitement impliquait l’entraînement d’un autoencodeur pour la réduction de dimension, suivi du clustering DEC. Un score de silhouette de 0,9172 a été atteint, indiquant des clusters très cohérents.
                        </div>
                        )
                    }
                    tech={["Pytorch", "DEC", "NLP", "Streamlit", "LangChain", "Chroma"]}
                    github="https://github.com/AILAB-CEFET-RJ/tcene"
                />

                <ProjectCard
                    title="Nemesis"
                    description={
                        language === "en" ? (
                        <div>
                            Developed in collaboration with Prof. Eduardo Bezerra and M.Sc Wellington Amaral, Nemesis 
                            (Notas de EMpenho com Estratégia Semântica e Inteligência de Sistemas) is a web application 
                            with database integration via FastAPI.
                            <hr className="border-t border-gray-300 mt-2 mb-1.5 max-w-[80%] mx-auto" />
                            <ul className="list-disc pl-6 text-left space-y-2">
                            <li>Direct and semantic database queries.</li>
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
                        </div>
                        ) : (
                        <div>
                            Développé en collaboration avec le Prof. Eduardo Bezerra et le M.Sc Wellington Amaral, Nemesis 
                            (Notas de EMpenho com Estratégia Semântica e Inteligência de Sistemas) est une application web 
                            intégrée à une base de données via FastAPI.
                            <hr className="border-t border-gray-300 mt-2 mb-1.5 max-w-[80%] mx-auto" />
                            <ul className="list-disc pl-6 text-left space-y-2">
                            <li>Requêtes directes et sémantiques sur la base de données.</li>
                            <li>
                                Projection 3D des enregistrements de dépenses, utilisant un Autoencodeur Débruité pour mapper les embeddings sémantiques dans un espace tridimensionnel afin de détecter des regroupements.
                            </li>
                            <li>
                                Accès à la table de "fracionamento" (paiements fractionnés), générée via un algorithme de regroupement basé sur des graphes avec règles de filtrage.
                            </li>
                            <li>
                                Analyse de surfacturation, comparant les enregistrements filtrés avec des enregistrements sémantiquement similaires d’autres municipalités la même année en utilisant pgvector dans PostgreSQL.
                            </li>
                            </ul>
                        </div>
                        )
                    }
                    tech={["React", "FastAPI", "SQLAlchemy", "Pgvector", "SDAE"]}
                    github="https://github.com/AILAB-CEFET-RJ/nemesis"
                    demo=""
                />

                <ProjectCard
                    title={language === "en" ? "SCRNA-Seq Analysis" : "Analyse SCRNA-Seq"}
                    description={
                        language === "en" ? (
                        <div>
                            Implementation created to benchmark several clustering algorithms: SDEC, DEC, KMeans, and Spectral Clustering. 
                            This work extends a previous project,{" "}
                            <a
                            href="https://github.com/AILAB-CEFET-RJ/brca-scrna-seq/tree/master"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 underline"
                            >
                            SCRNA-Seq Analysis of BRCA Patients
                            </a>
                            , which compared KMeans and Spectral Clustering across different preprocessing pipelines (Standard Scaler and PCA). 
                            My main contribution was integrating DEC and implementing SDEC from scratch, based on the unofficial DEC implementation{" "}
                            <a
                            href="https://github.com/vlukiyanov/pt-dec/tree/master"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 underline"
                            >
                            vlukiyanov/pt-dec
                            </a>
                            . The key modification was enhancing the DEC loss function by incorporating a semi-supervised component using pairwise constraints, improving clustering performance on labeled data.
                        </div>
                        ) : (
                        <div>
                            Implémentation créée pour évaluer plusieurs algorithmes de regroupement : SDEC, DEC, KMeans et Clustering Spectral. 
                            Ce travail prolonge un projet précédent,{" "}
                            <a
                            href="https://github.com/AILAB-CEFET-RJ/brca-scrna-seq/tree/master"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 underline"
                            >
                            SCRNA-Seq Analysis of BRCA Patients
                            </a>
                            , qui comparait KMeans et Clustering Spectral à travers différents pipelines de prétraitement (Standard Scaler et PCA). 
                            Ma principale contribution a été d’intégrer DEC et d’implémenter SDEC à partir de zéro, en me basant sur l’implémentation non officielle de DEC{" "}
                            <a
                            href="https://github.com/vlukiyanov/pt-dec/tree/master"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 underline"
                            >
                            vlukiyanov/pt-dec
                            </a>
                            . La modification clé consistait à améliorer la fonction de perte de DEC en intégrant une composante semi-supervisée utilisant des contraintes par paires, améliorant ainsi les performances du regroupement sur des données étiquetées.
                        </div>
                        )
                    }
                    tech={["PyTorch", "SDEC"]}
                    github="https://github.com/paraizovinicius/SCRNA-Seq"
                />
            </div>
        </div>
    );
};

export default Projects;
