import React from "react";
import { ExternalLink } from "lucide-react";
import thumbnail_lstm from '../assets/thumbnail-LSTM.png'
import thumbnail_mlp from '../assets/Thumbnail-MLP.png'
import { useLanguage } from "../contexts/LanguageContext";

const Teaching: React.FC = () => {
    const { language } = useLanguage();

    return (
        <div className="min-h-screen pl-0 md:pl-22 md:pl-0 mx-auto bg-gray-50 text-gray-800 py-12 px-6 mt-8 md:mt-0">
            <h1 className="text-4xl font-bold mb-8 text-center">Teaching</h1>
            <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-1 pl-4">
                
                {/* LSTM Video Card */}
                <div className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row md:gap-6 mb-4">
                    <div className="flex-1">
                        <h2 className="text-2xl font-semibold mb-2">
                            {language === "en" ? "LSTM Networks: Architecture & Implementation" : "Réseaux LSTM : Architecture et Implémentation"}
                        </h2>
                        <div className="text-gray-700 mb-4">
                            {language === "en" ? (
                                <div>
                                    A deep dive into Long Short-Term Memory (LSTM) networks:
                                    <ul className="list-disc pl-6 text-left space-y-2 mt-2">
                                        <li>Detailed explanation of the LSTM cell architecture (forget gate, input gate, output gate).</li>
                                        <li>How Backpropagation Through Time (BPTT) works in recurrent networks.</li>
                                        <li>A "raw" implementation using only native Python and NumPy (no deep learning frameworks).</li>
                                        <li>Demonstration as a character-level language model, predicting the next character based on the entire text context.</li>
                                    </ul>
                                </div>
                            ) : (
                                <div>
                                    Une exploration approfondie des réseaux Long Short-Term Memory (LSTM) :
                                    <ul className="list-disc pl-6 text-left space-y-2 mt-2">
                                        <li>Explication détaillée de l'architecture d'une cellule LSTM (porte d'oubli, porte d'entrée, porte de sortie).</li>
                                        <li>Fonctionnement de la rétropropagation à travers le temps (BPTT) dans les réseaux récurrents.</li>
                                        <li>Implémentation utilisant uniquement Python natif et NumPy (sans frameworks de deep learning).</li>
                                        <li>Démonstration en tant que modèle de langage au niveau des caractères, prédisant le prochain caractère en fonction du contexte textuel complet.</li>
                                    </ul>
                                </div>
                            )}
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4 md:mb-0">
                            {["Python", "NumPy", "LSTM", "BPTT", "RNN"].map((tech) => (
                                <span
                                    key={tech}
                                    className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    <a
                        href="https://www.youtube.com/watch?v=aqlrbDo8_bw"
                        rel="noopener noreferrer"
                        target="_blank" 
                        className="relative group overflow-hidden rounded-2xl shadow-lg mt-4 md:mt-0 block md:w-64 md:flex-shrink-0 md:self-center"
                    >
                        <img
                            src={thumbnail_lstm}
                            alt="LSTM Tutorial Thumbnail"
                            className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black md:opacity-0 opacity-70 group-hover:opacity-50 transition-all duration-300 flex items-center justify-center pointer-events-none">
                            <div className="md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 text-white text-lg font-semibold">
                                <ExternalLink className="w-6 h-6" />
                                {language === "en" ? "Watch on YouTube" : "Regarder sur YouTube"}
                            </div>
                        </div>
                    </a>
                </div>

                {/* MLP Classifier Video Card */}
                <div className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row md:gap-6 mb-4">
                    <div className="flex-1">
                        <h2 className="text-2xl font-semibold mb-2">
                            {language === "en" ? "MLP Classifier: Architecture & From-Scratch Implementation" : "Classificateur MLP : Architecture et Implémentation from-scratch"}
                        </h2>
                        <div className="text-gray-700 mb-4">
                            {language === "en" ? (
                                <div>
                                    A comprehensive guide to Multi-Layer Perceptron (MLP) classifiers:
                                    <ul className="list-disc pl-6 text-left space-y-2 mt-2">
                                        <li>Detailed explanation of MLP architecture and how neural networks classify data.</li>
                                        <li>Application to the MNIST dataset for handwritten digit recognition.</li>
                                        <li>From-scratch implementation: activation functions, loss function, and the complete MLP class.</li>
                                        <li>Building the MLP class with initialize_weights, forward, backward, and predict methods.</li>
                                        <li>Full training loop demonstration with results and performance analysis.</li>
                                    </ul>
                                </div>
                            ) : (
                                <div>
                                    Un guide complet sur les classificateurs Perceptron Multicouche (MLP) :
                                    <ul className="list-disc pl-6 text-left space-y-2 mt-2">
                                        <li>Explication détaillée de l'architecture MLP et comment les réseaux de neurones classifient les données.</li>
                                        <li>Application au dataset MNIST pour la reconnaissance de chiffres manuscrits.</li>
                                        <li>Implémentation from-scratch : fonctions d'activation, fonction de perte, et la classe MLP complète.</li>
                                        <li>Construction de la classe MLP avec les méthodes initialize_weights, forward, backward et predict.</li>
                                        <li>Démonstration complète de la boucle d'entraînement avec résultats et analyse des performances.</li>
                                    </ul>
                                </div>
                            )}
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4 md:mb-0">
                            {["Python", "NumPy", "MLP", "MNIST", "Neural Networks", "Backpropagation"].map((tech) => (
                                <span
                                    key={tech}
                                    className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    <a
                        href="https://www.youtube.com/watch?v=nhOInLJhjV4"
                        rel="noopener noreferrer"
                        target="_blank" 
                        className="relative group overflow-hidden rounded-2xl shadow-lg mt-4 md:mt-0 block md:w-64 md:flex-shrink-0 md:self-center"
                    >
                        <img
                            src={thumbnail_mlp}
                            alt="MLP Classifier Tutorial Thumbnail"
                            className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black md:opacity-0 opacity-70 group-hover:opacity-50 transition-all duration-300 flex items-center justify-center pointer-events-none">
                            <div className="md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 text-white text-lg font-semibold">
                                <ExternalLink className="w-6 h-6" />
                                {language === "en" ? "Watch on YouTube" : "Regarder sur YouTube"}
                            </div>
                        </div>
                    </a>
                </div>

            </div>
        </div>
    );
};

export default Teaching;
