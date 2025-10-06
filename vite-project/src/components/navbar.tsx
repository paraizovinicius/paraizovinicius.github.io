import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { US, FR } from 'country-flag-icons/react/3x2'

export default function Navbar() {
  const navigate = useNavigate();
  const [bgColor, setBgColor] = useState("bg-[#212830]");
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setBgColor(scrollY > 100 ? "bg-gray-900" : "bg-[#212830]");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0
        ${bgColor}
        transition-colors duration-500
        flex 
        flex-col md:flex-col 
        md:h-full md:w-[15%] 
        w-full h-16
        md:p-2 p-2
        md:items-start items-center justify-center
        z-50
      `}
    >
      <div className="hidden md:block md:w-full md:h-[20%]">
        <span className="font-bold text-md text-white md:mb-4">
          Vinicius Paraizo
        </span>
        <hr className="border-t border-white" />
      </div>

      <div className="flex flex-row md:flex-col md:w-full w-auto md:space-y-20 space-x-4 md:space-x-0 md:h-full">
        <span
          className="text-white text-md md:text-lg py-1 px-2 md:px-4 hover:underline hover:text-orange-300 cursor-pointer"
          onClick={() => {
            navigate("/");
            window.scrollTo(0, 0);
          }}
        >
          Home
        </span>

        <span
          className="text-white text-md md:text-lg py-1 px-2 md:px-4 hover:underline hover:text-orange-300 cursor-pointer"
          onClick={() => {
            navigate("/AboutMe");
            window.scrollTo(0, 0);
          }}
        >
          {language === "en" ? (<>About Me</>) : (<>À propos de moi</>)}
        </span>

        <span
          className="text-white text-md md:text-lg py-1 px-2 md:px-4 hover:underline hover:text-orange-300 cursor-pointer"
          onClick={() => {
            navigate("/Projects");
            window.scrollTo(0, 0);
          }}
        >
          {language === "en" ? (<>Projects</>) : (<>Projets</>)}
        </span>

        <div className="flex gap-2 items-center mx-auto">
          <span
            className={`text-sm text-white/80 px-2 py-1 rounded hover:underline hover:text-orange-300 cursor-pointer ${language === "en" ? "text-orange font-bold" : ""}`}
            onClick={() => setLanguage("en")}
            aria-label="Set English"
          >
            EN <US title="United States" className="mt-1"/>
          </span>
          <span
            className={`text-sm text-white/80 px-2 py-1 rounded hover:underline hover:text-orange-300 cursor-pointer ${language === "fr" ? "text-orange font-bold" : ""}`}
            onClick={() => setLanguage("fr")}
            aria-label="Set French"
          >
            FR <FR title="France" className="mt-1"/>
          </span>
        </div>

      </div>
    </nav>
  );
}