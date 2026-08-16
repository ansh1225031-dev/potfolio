import { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useTheme } from './hooks/useTheme';
import MainLayout from './layouts/MainLayout';

// Single-page sections (loaded eagerly for continuous scroll journey)
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Journey from './pages/Journey';
import Education from './pages/Education';
import Hackathon from './pages/Hackathon';
import Achievements from './pages/Achievements';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

// Standalone separate routes
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const Admin = lazy(() => import('./pages/Admin'));
const NotFound = lazy(() => import('./pages/NotFound'));

function LoadingFallback() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div className="loading-spinner" />
    </div>
  );
}

function SinglePage({ theme, toggleTheme }) {
  return (
    <>
      <section id="home"><Home /></section>
      <div className="section-divider" />
      <section id="about"><About /></section>
      <div className="section-divider" />
      <section id="skills"><Skills /></section>
      <div className="section-divider" />
      <section id="projects"><Projects /></section>
      <div className="section-divider" />
      <section id="journey"><Journey /></section>
      <div className="section-divider" />
      <section id="education"><Education /></section>
      <div className="section-divider" />
      <section id="hackathon"><Hackathon /></section>
      <div className="section-divider" />
      <section id="achievements"><Achievements /></section>
      <div className="section-divider" />
      <section id="resume"><Resume /></section>
      <div className="section-divider" />
      <section id="contact"><Contact /></section>
    </>
  );
}

export default function App() {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  return (
    <MainLayout theme={theme} toggleTheme={toggleTheme}>
      <AnimatePresence mode="wait">
        <Suspense fallback={<LoadingFallback />}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<SinglePage theme={theme} toggleTheme={toggleTheme} />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </AnimatePresence>
    </MainLayout>
  );
}
