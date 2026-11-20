export default function Footer() {
  return (
    <footer className="bg-background border-t border-gray-200 py-8 sm:py-10 text-center text-gray-500 text-xs sm:text-sm px-4">
      <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3">
        <img 
          src="/logo.png" 
          alt="IsdaAI Logo" 
          className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover shadow-sm border border-gray-200" 
        />
        <span className="text-primary-dark font-semibold text-lg sm:text-xl tracking-wide">
          Isda<span className="text-primary">AI</span>
        </span>
      </div>
      <p>© {new Date().getFullYear()} IsdaAI Capstone Project. Trinidad Municipal College.</p>
    </footer>
  );
}