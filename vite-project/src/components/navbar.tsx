import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { US, FR } from 'country-flag-icons/react/3x2'
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const navigate = useNavigate();
  const [bgColor, setBgColor] = useState("bg-[#212830]");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
        md:items-start items-center
        z-50
      `}
    >
      {/* Desktop Header */}
      <div className="hidden md:block md:w-full md:h-[20%]">
        <span className="font-bold text-md text-white md:mb-4">
          Vinicius Paraizo
        </span>
        <hr className="border-t border-white" />
      </div>

      {/* Mobile Header with Hamburger */}
      <div className="flex md:hidden w-full justify-between items-center px-4">
        <span className="font-bold text-md text-white">Vinicius Paraizo</span>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 hover:text-orange-300 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex md:flex-col md:w-full md:space-y-20 md:h-full">
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
            navigate("/Teaching");
            window.scrollTo(0, 0);
          }}
        >
          {language === "en" ? (<>Teaching</>) : (<>Teaching</>)}
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

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-gray-900 shadow-lg py-4 flex flex-col space-y-4">
          <span
            className="text-white text-lg py-2 px-6 hover:bg-gray-800 hover:text-orange-300 cursor-pointer transition-colors"
            onClick={() => {
              navigate("/");
              window.scrollTo(0, 0);
              setMobileMenuOpen(false);
            }}
          >
            Home
          </span>

          <span
            className="text-white text-lg py-2 px-6 hover:bg-gray-800 hover:text-orange-300 cursor-pointer transition-colors"
            onClick={() => {
              navigate("/AboutMe");
              window.scrollTo(0, 0);
              setMobileMenuOpen(false);
            }}
          >
            {language === "en" ? (<>About Me</>) : (<>À propos de moi</>)}
          </span>

          <span
            className="text-white text-lg py-2 px-6 hover:bg-gray-800 hover:text-orange-300 cursor-pointer transition-colors"
            onClick={() => {
              navigate("/Teaching");
              window.scrollTo(0, 0);
              setMobileMenuOpen(false);
            }}
          >
            {language === "en" ? (<>Teaching</>) : (<>Teaching</>)}
          </span>

          <span
            className="text-white text-lg py-2 px-6 hover:bg-gray-800 hover:text-orange-300 cursor-pointer transition-colors"
            onClick={() => {
              navigate("/Projects");
              window.scrollTo(0, 0);
              setMobileMenuOpen(false);
            }}
          >
            {language === "en" ? (<>Projects</>) : (<>Projets</>)}
          </span>

          <div className="flex gap-4 items-center justify-center py-2 border-t border-gray-700 mt-2">
            <span
              className={`text-base text-white/80 px-3 py-2 rounded hover:bg-gray-800 hover:text-orange-300 cursor-pointer transition-colors ${language === "en" ? "text-orange-300 font-bold" : ""}`}
              onClick={() => setLanguage("en")}
              aria-label="Set English"
            >
              EN <US title="United States" className="inline w-6 h-4 ml-1"/>
            </span>
            <span
              className={`text-base text-white/80 px-3 py-2 rounded hover:bg-gray-800 hover:text-orange-300 cursor-pointer transition-colors ${language === "fr" ? "text-orange-300 font-bold" : ""}`}
              onClick={() => setLanguage("fr")}
              aria-label="Set French"
            >
              FR <FR title="France" className="inline w-6 h-4 ml-1"/>
            </span>
          </div>
        </div>
      )}
    </nav>
  );
}