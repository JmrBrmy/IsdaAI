import { Menu, Download } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const navLinks = [
  { id: 'hero', label: 'Home', href: '#hero' },
  { id: 'features', label: 'Features', href: '#features' },
  { id: 'how-it-works', label: 'How it Works', href: '#how-it-works' },
  { id: 'about', label: 'About', href: '#about' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
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
    isClickScrolling.current = true;
    setActiveSection(id);

    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(id);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 88;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }

    setTimeout(() => {
      isClickScrolling.current = false;
    }, 800);
  };

  return (
    <nav className="flex items-center justify-between px-6 h-[88px] bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100 shadow-sm">
      <div
        className="flex items-center gap-3 cursor-pointer"
        onClick={(e) => handleNavClick(e, 'hero')}
      >
        <img 
          src="/logo.png" 
          alt="IsdaAI Logo" 
          className="w-11 h-11 rounded-full object-cover shadow-sm border border-gray-200" 
        />
        <span className="text-2xl font-bold text-primary-dark">
          Isda<span className="text-primary">AI</span>
        </span>
      </div>

      <div className="hidden md:flex items-center gap-10 text-lg font-medium">
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

      <div className="flex items-center gap-4">
        {/* Converted button to anchor tag for download */}
        <a 
          href="/base.apk" 
          download="IsdaAI.apk"
          className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-base font-medium text-white bg-primary rounded-full hover:bg-primary-dark transition-all transform hover:-translate-y-0.5 shadow-md shadow-primary/20 cursor-pointer"
        >
          <Download className="w-5 h-5" />
          Download App
        </a>
        <button className="p-2 text-gray-600 md:hidden">
          <Menu className="w-7 h-7" />
        </button>
      </div>
    </nav>
  );
}