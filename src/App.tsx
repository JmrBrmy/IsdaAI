import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background font-sans text-primary-dark selection:bg-primary/20 selection:text-primary-dark">
      <Navbar />
      
      <main className="relative">
        {/* Updated to top-[88px] and calc(100dvh-88px) */}
        <div id="hero" className="sticky top-[88px] h-[calc(100dvh-88px)] w-full z-0 overflow-hidden bg-[#EAF4FF]">
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