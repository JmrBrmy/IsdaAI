import { Menu, X, Download } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const navLinks = [
  { id: 'hero', label: 'Home', href: '#hero' },
  { id: 'features', label: 'Features', href: '#features' },
  { id: 'how-it-works', label: 'How it Works', href: '#how-it-works' },
  { id: 'about', label: 'About', href: '#about' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isClickScrolling = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isClickScrolling.current) return;
      const triggerPoint = window.innerHeight / 3;
      let current = 'hero';
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= triggerPoint) {
            current = link.id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLElement>, id: string) => {
    e.preventDefault();
    setIsMenuOpen(false); // Close mobile menu on click
    isClickScrolling.current = true;
    setActiveSection(id);

    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(id);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }

    setTimeout(() => {
      isClickScrolling.current = false;
    }, 800);
  };

  return (
    <nav className="flex items-center justify-between px-4 sm:px-6 h-[80px] bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100 shadow-sm">
      <div
        className="flex items-center gap-2 sm:gap-3 cursor-pointer"
        onClick={(e) => handleNavClick(e, 'hero')}
      >
        <img 
          src="/logo.png" 
          alt="IsdaAI Logo" 
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover shadow-sm border border-gray-200" 
        />
        <span className="text-xl sm:text-2xl font-bold text-primary-dark">
          Isda<span className="text-primary">AI</span>
        </span>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8 lg:gap-10 text-base lg:text-lg font-medium">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.id)}
            className={`relative group flex flex-col items-center py-2 transition-colors duration-300 ${
              activeSection === link.id 
                ? 'text-primary font-semibold'
                : 'text-gray-600 hover:text-primary'
            }`}
          >
            {link.label}
            <span
              className={`absolute bottom-0 left-0 w-full h-[2.5px] bg-primary transition-transform duration-300 ease-out origin-left
                ${
                  activeSection === link.id
                    ? 'scale-x-100'
                    : 'scale-x-0 group-hover:scale-x-100'
                }
              `}
            ></span>
          </a>
        ))}
      </div>

      <div className="flex items-center gap-3 sm:gap-4">
        <a 
          href="https://github.com/JmrBrmy/IsdaAI/releases/download/v1.0.0/base.apk" 
          download="IsdaAI.apk"
          className="hidden sm:inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 text-sm sm:text-base font-medium text-white bg-primary rounded-full hover:bg-primary-dark transition-all transform hover:-translate-y-0.5 shadow-md shadow-primary/20 cursor-pointer"
        >
          <Download className="w-4 h-4 sm:w-5 sm:h-5" />
          Download App
        </a>
        
        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 text-gray-600 md:hidden hover:bg-gray-100 rounded-lg transition-colors"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-[80px] left-0 w-full bg-white border-b border-gray-100 shadow-lg md:hidden flex flex-col py-4 px-6 gap-2">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.id)}
              className={`py-3 px-4 rounded-xl text-base font-medium transition-colors ${
                activeSection === link.id 
                  ? 'bg-primary/10 text-primary' 
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a 
            href="https://github.com/JmrBrmy/IsdaAI/releases/download/v1.0.0/base.apk" 
            download="IsdaAI.apk"
            className="mt-2 flex items-center justify-center gap-2 w-full py-3 text-base font-medium text-white bg-primary rounded-xl hover:bg-primary-dark transition-colors"
          >
            <Download className="w-5 h-5" />
            Download APK
          </a>
        </div>
      )}
    </nav>
  );
}