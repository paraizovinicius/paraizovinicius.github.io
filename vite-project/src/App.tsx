import './App.css'
import LandingPage from './pages/landingPage.tsx'
import AboutMe from './pages/aboutMe.tsx';
import Projects from './pages/projects.tsx';
import Teaching from './pages/teaching.tsx'
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <Routes>
        <Route
            path="/"
            element={
              <LandingPage />
            }
        />
        <Route
            path="/AboutMe"
            element={
              <AboutMe />
            }
        />
        <Route
            path="/Projects"
            element={
              <Projects />
            }
        />
        <Route
            path="/Teaching"
            element={
              <Teaching />
            }
        />
      </Routes>
    </>
  )
}

export default App
