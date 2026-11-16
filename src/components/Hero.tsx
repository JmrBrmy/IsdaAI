import { Download, Smartphone, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-center px-6 max-w-[1440px] mx-auto gap-8 min-h-[calc(100vh-88px)] w-full">
      
      {/* DYNAMIC BACKGROUND LAYER */}
      <div className="absolute inset-0 -z-10 bg-[#EAF4FF] overflow-hidden rounded-b-[2rem]">
        <div 
          className="absolute inset-0 opacity-[0.15]" 
          style={{ 
            backgroundImage: 'radial-gradient(#3B82F6 1px, transparent 1px)', 
            backgroundSize: '32px 32px' 
          }}
        ></div>

        <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-bl from-blue-200/40 to-transparent transform -skew-x-12 origin-top-right"></div>
        <div className="absolute bottom-0 left-0 w-[50%] h-[70%] bg-gradient-to-tr from-blue-100/60 to-transparent transform skew-x-12 origin-bottom-left"></div>

        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-300/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-200/30 rounded-full blur-[120px]"></div>
      </div>

      {/* Left Column: Text & CTA */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1 max-w-xl z-10 py-12 lg:py-0 lg:pl-10"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/60 backdrop-blur-sm border border-blue-200 text-primary font-semibold text-xs mb-6 uppercase tracking-wider shadow-sm">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          100% Offline AI Detection
        </div>

        <h1 className="text-5xl lg:text-7xl font-extrabold text-primary-dark leading-tight drop-shadow-sm">
          Isda<span className="text-primary">AI</span>
        </h1>
        <h2 className="text-2xl lg:text-3xl font-semibold text-gray-700 mt-4 mb-6">
          Know your catch is fresh, instantly.
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Turn your smartphone into a powerful freshness detector. Use AI-powered image recognition to verify fish quality completely offline. Log results and ensure safety in seconds.
        </p>

        <div className="flex flex-wrap gap-4 mb-8">
          {/* Converted button to anchor tag for download */}
          <a 
            href="https://github.com/JmrBrmy/IsdaAI/releases/download/v1.0.0/base.apk" 
            download="IsdaAI.apk"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-white rounded-full font-semibold hover:bg-primary-dark transition-all shadow-lg shadow-primary/30 hover:shadow-primary/40 transform hover:-translate-y-0.5 cursor-pointer"
          >
            <Download className="w-5 h-5" />
            Download for Android
          </a>
          
          <button className="inline-flex items-center gap-2 px-6 py-3.5 border-2 border-white bg-white/70 backdrop-blur-md text-gray-700 rounded-full font-semibold hover:border-primary hover:text-primary transition-all transform hover:-translate-y-0.5 shadow-sm">
            <Smartphone className="w-5 h-5" />
            Try the Web App
          </button>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-600 font-medium border-t border-blue-200/60 pt-6">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-primary" />
            <span>No Internet Required</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-primary" />
            <span>Instant Results</span>
          </div>
          <div className="flex items-center gap-2">
            <Smartphone className="w-5 h-5 text-primary" />
            <span>Android APK v1.0</span>
          </div>
        </div>
      </motion.div>

      {/* Right Column: The Hero Graphic */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex-1 relative flex justify-center items-center w-full max-w-[800px] h-full lg:h-[80vh] z-10"
      >
        <img 
          src="/hero-graphic.png" 
          alt="IsdaAI Mobile App showing fish scanning interface" 
          className="w-full h-full object-contain object-center drop-shadow-2xl mr-30"
        />
      </motion.div>
      
    </section>
  );
}