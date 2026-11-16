export default function Footer() {
  return (
    <footer className="bg-background border-t border-gray-200 py-10 text-center text-gray-400 text-sm">
      <div className="flex items-center justify-center gap-3 mb-3">
        {/* Replaced Fish icon with the new logo image */}
        <img 
          src="/logo.png" 
          alt="IsdaAI Logo" 
          className="w-9 h-9 rounded-full object-cover shadow-sm border border-white/10" 
        />
        <span className="text-black font-semibold text-xl tracking-wide">
          Isda<span className="text-primary-light">AI</span>
        </span>
      </div>
      <p>© {new Date().getFullYear()} IsdaAI Capstone Project. Trinidad Municipal College.</p>
      <p className="mt-1.5 opacity-80">All images and scans remain strictly on your device.</p>
    </footer>
  );
}