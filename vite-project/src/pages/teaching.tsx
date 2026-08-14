import React from "react";
import { ExternalLink } from "lucide-react";
import thumbnail_lstm from "../assets/thumbnail-LSTM.png";
import thumbnail_mlp from "../assets/Thumbnail-MLP.png";
import thumbnail_dec from "../assets/thumbnail-DEC.png";
import thumbnail_idec from "../assets/thumbnail-IDEC.png";
import { useLanguage } from "../contexts/LanguageContext";

type Lang = "en" | "fr" | "de";

const pageTitle: Record<Lang, string> = {
  en: "Teaching",
  fr: "Enseignement",
  de: "Lehre",
};

const watchLabel: Record<Lang, string> = {
  en: "Watch on YouTube",
  fr: "Regarder sur YouTube",
  de: "Auf YouTube ansehen",
};

/* ------------------------------------------------------------------ */
/*  Videos                                                             */
/* ------------------------------------------------------------------ */

type Video = {
  id: string;
  title: Record<Lang, string>;
  bullets: Record<Lang, string[]>;
  tech: string[];
  url: string;
  thumbnail: string;
  alt: string;
};

const videos: Video[] = [
  {
    id: "idec",
    url: "https://youtu.be/bDwUFPMXthE",
    thumbnail: thumbnail_idec,
    alt: "IDEC tutorial thumbnail",
    tech: ["Python", "NumPy", "PyTorch", "Deep Learning"],
    title: {
      en: "Improved Deep Embedded Clustering (IDEC)",
      fr: "Improved Deep Embedded Clustering (IDEC)",
      de: "Improved Deep Embedded Clustering (IDEC)",
    },
    bullets: {
      en: [
        "Explanation of IDEC, from the paper through to the implementation.",
        "Implementation of the IDEC class and its loss function.",
        "Results: 84.41% accuracy for IDEC, a 9% improvement over DEC.",
      ],
      fr: [
        "Explication d'IDEC, de l'article original jusqu'à l'implémentation.",
        "Implémentation de la classe IDEC et de sa fonction de perte.",
        "Résultats : 84,41 % d'exactitude pour IDEC, soit 9 % de mieux que DEC.",
      ],
      de: [
        "Erklärung von IDEC — vom Paper bis zur Implementierung.",
        "Implementierung der IDEC-Klasse und ihrer Verlustfunktion.",
        "Ergebnisse: 84,41 % Accuracy für IDEC, ein Plus von 9 % gegenüber DEC.",
      ],
    },
  },
  {
    id: "dec",
    url: "https://www.youtube.com/watch?v=pEKQtiNK7Zo",
    thumbnail: thumbnail_dec,
    alt: "DEC tutorial thumbnail",
    tech: ["Python", "NumPy", "PyTorch", "Deep Learning"],
    title: {
      en: "Deep Embedded Clustering (DEC)",
      fr: "Deep Embedded Clustering (DEC)",
      de: "Deep Embedded Clustering (DEC)",
    },
    bullets: {
      en: [
        "Explanation of the mathematical foundations behind DEC and how the model is derived from the original paper.",
        "Implementation of both DEC and the semi-supervised variant, SDEC, as Python classes.",
        "Evaluation on the MNIST dataset.",
        "Results: 75.33% accuracy for DEC and 87.12% for SDEC.",
      ],
      fr: [
        "Explication des fondements mathématiques derrière DEC et de la dérivation du modèle à partir de l'article original.",
        "Implémentation de DEC et de sa variante semi-supervisée SDEC sous forme de classes Python.",
        "Évaluation sur le jeu de données MNIST.",
        "Résultats : 75,33 % d'exactitude pour DEC et 87,12 % pour SDEC.",
      ],
      de: [
        "Erklärung der mathematischen Grundlagen von DEC und der Herleitung des Modells aus dem Original-Paper.",
        "Implementierung von DEC und der semi-überwachten Variante SDEC als Python-Klassen.",
        "Evaluation auf dem MNIST-Datensatz.",
        "Ergebnisse: 75,33 % Accuracy für DEC und 87,12 % für SDEC.",
      ],
    },
  },
  {
    id: "lstm",
    url: "https://www.youtube.com/watch?v=aqlrbDo8_bw",
    thumbnail: thumbnail_lstm,
    alt: "LSTM tutorial thumbnail",
    tech: ["Python", "NumPy", "LSTM", "BPTT", "RNN"],
    title: {
      en: "LSTM networks: architecture and implementation",
      fr: "Réseaux LSTM : architecture et implémentation",
      de: "LSTM-Netze: Architektur und Implementierung",
    },
    bullets: {
      en: [
        "Detailed explanation of the LSTM cell architecture (forget gate, input gate, output gate).",
        "How backpropagation through time (BPTT) works in recurrent networks.",
        "An implementation from scratch, using only native Python and NumPy — no deep learning frameworks.",
        "Demonstration as a character-level language model, predicting the next character from the full text context.",
      ],
      fr: [
        "Explication détaillée de l'architecture d'une cellule LSTM (porte d'oubli, porte d'entrée, porte de sortie).",
        "Fonctionnement de la rétropropagation à travers le temps (BPTT) dans les réseaux récurrents.",
        "Implémentation à partir de zéro, uniquement avec Python natif et NumPy — sans framework de deep learning.",
        "Démonstration en tant que modèle de langage au niveau des caractères, prédisant le caractère suivant à partir du contexte textuel complet.",
      ],
      de: [
        "Detaillierte Erklärung der LSTM-Zellarchitektur (Forget Gate, Input Gate, Output Gate).",
        "Funktionsweise von Backpropagation Through Time (BPTT) in rekurrenten Netzen.",
        "Implementierung von Grund auf — ausschließlich mit nativem Python und NumPy, ohne Deep-Learning-Frameworks.",
        "Demonstration als zeichenbasiertes Sprachmodell, das das nächste Zeichen aus dem gesamten Textkontext vorhersagt.",
      ],
    },
  },
  {
    id: "mlp",
    url: "https://www.youtube.com/watch?v=nhOInLJhjV4",
    thumbnail: thumbnail_mlp,
    alt: "MLP classifier tutorial thumbnail",
    tech: ["Python", "NumPy", "MLP", "MNIST", "Neural Networks", "Backpropagation"],
    title: {
      en: "MLP classifier: architecture and a from-scratch implementation",
      fr: "Classificateur MLP : architecture et implémentation à partir de zéro",
      de: "MLP-Klassifikator: Architektur und Implementierung von Grund auf",
    },
    bullets: {
      en: [
        "Detailed explanation of the MLP architecture and how neural networks classify data.",
        "Application to the MNIST dataset for handwritten digit recognition.",
        "Implementation from scratch: activation functions, loss function and the complete MLP class.",
        "Building the MLP class with initialize_weights, forward, backward and predict methods.",
        "Full training loop with results and performance analysis.",
      ],
      fr: [
        "Explication détaillée de l'architecture MLP et de la manière dont les réseaux de neurones classifient les données.",
        "Application au jeu de données MNIST pour la reconnaissance de chiffres manuscrits.",
        "Implémentation à partir de zéro : fonctions d'activation, fonction de perte et classe MLP complète.",
        "Construction de la classe MLP avec les méthodes initialize_weights, forward, backward et predict.",
        "Boucle d'entraînement complète avec résultats et analyse des performances.",
      ],
      de: [
        "Detaillierte Erklärung der MLP-Architektur und wie neuronale Netze Daten klassifizieren.",
        "Anwendung auf den MNIST-Datensatz zur Erkennung handgeschriebener Ziffern.",
        "Implementierung von Grund auf: Aktivierungsfunktionen, Verlustfunktion und die vollständige MLP-Klasse.",
        "Aufbau der MLP-Klasse mit den Methoden initialize_weights, forward, backward und predict.",
        "Vollständige Trainingsschleife mit Ergebnissen und Leistungsanalyse.",
      ],
    },
  },
];

/* ------------------------------------------------------------------ */
/*  Card                                                               */
/* ------------------------------------------------------------------ */

const VideoCard: React.FC<{ video: Video; lang: Lang }> = ({ video, lang }) => (
  <div className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row md:gap-6">
    <div className="flex-1">
      <h2 className="text-2xl font-semibold mb-2">{video.title[lang]}</h2>

      <ul className="list-disc pl-6 text-left space-y-2 mt-2 mb-4 text-gray-700">
        {video.bullets[lang].map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 mb-4 md:mb-0">
        {video.tech.map((tech) => (
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
      href={video.url}
      rel="noopener noreferrer"
      target="_blank"
      className="relative group overflow-hidden rounded-2xl shadow-lg mt-4 md:mt-0 block md:w-64 md:flex-shrink-0 md:self-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
    >
      <img
        src={video.thumbnail}
        alt={video.alt}
        className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black opacity-70 md:opacity-0 group-hover:opacity-50 transition-all duration-300 flex items-center justify-center pointer-events-none">
        <div className="md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 text-white text-lg font-semibold">
          <ExternalLink className="w-6 h-6" />
          {watchLabel[lang]}
        </div>
      </div>
    </a>
  </div>
);

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

const Teaching: React.FC = () => {
  const { language } = useLanguage();
  const lang = (["en", "fr", "de"].includes(language) ? language : "en") as Lang;

  return (
    <div className="min-h-screen mx-auto bg-gray-50 text-gray-800 py-12 px-6 mt-8 md:mt-0">
      <h1 className="text-4xl font-bold mb-8 text-center">{pageTitle[lang]}</h1>

      <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-1">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} lang={lang} />
        ))}
      </div>
    </div>
  );
};

export default Teaching;
