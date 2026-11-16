import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  // Force scroll to top on page refresh
  useEffect(() => {
    // 1. Prevent the browser from restoring the previous scroll position
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    
    // 2. Scroll to the very top of the page immediately on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans text-primary-dark selection:bg-primary/20 selection:text-primary-dark">
      <Navbar />
      
      <main className="relative">
        {/* Updated to top-[80px] and calc(100dvh-80px) */}
        <div id="hero" className="relative md:sticky md:top-[80px] md:h-[calc(100dvh-80px)] w-full z-0 overflow-hidden bg-[#EAF4FF]">
          <Hero />
        </div>
        
        <div className="relative z-10 flex flex-col">
          <Features />
          <HowItWorks />
          <About />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;