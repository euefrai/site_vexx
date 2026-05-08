import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Benefits from './components/Benefits';
import Portfolio from './components/Portfolio';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ProjectsPage from './components/ProjectsPage';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'projects'>('home');

  if (currentPage === 'projects') {
    return (
      <div className="min-h-screen bg-black font-['Inter',sans-serif] selection:bg-purple-500/30 selection:text-purple-200">
        <ProjectsPage onBack={() => {
          setCurrentPage('home');
          window.scrollTo(0, 0);
        }} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black font-['Inter',sans-serif] selection:bg-purple-500/30 selection:text-purple-200">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Benefits />
        <Portfolio onNavigate={(page) => setCurrentPage(page as any)} />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
