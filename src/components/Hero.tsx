import { Download, Smartphone, ShieldCheck, Zap, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 max-w-[1440px] mx-auto gap-4 lg:gap-8 min-h-[calc(100vh-80px)] lg:min-h-[calc(100dvh-80px)] w-full py-8 lg:py-0">
      
      {/* DYNAMIC BACKGROUND LAYER */}
      <div className="absolute inset-0 -z-10 bg-[#EAF4FF] overflow-hidden rounded-b-[2rem]">
        <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'radial-gradient(#3B82F6 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
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
        className="flex-1 max-w-xl z-10 w-full lg:pl-10 pt-4 lg:pt-0"
      >

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-primary-dark leading-tight drop-shadow-sm">
          Isda<span className="text-primary">AI</span>
        </h1>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-700 mt-3 sm:mt-4 mb-4 sm:mb-6">
          Know your catch is fresh, instantly.
        </h2>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8">
          Turn your smartphone into a powerful freshness detector. Use AI-powered image recognition to verify fish quality completely offline. Log results and ensure safety in seconds.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
          <a 
            href="https://github.com/JmrBrmy/IsdaAI/releases/download/v1.0.0/base.apk" 
            download="IsdaAI.apk"
            className="inline-flex justify-center items-center gap-2 px-6 py-3.5 bg-primary text-white rounded-full font-semibold hover:bg-primary-dark transition-all shadow-lg shadow-primary/30 hover:shadow-primary/40 transform hover:-translate-y-0.5 cursor-pointer w-full sm:w-auto"
          >
            <Download className="w-5 h-5" />
            Download for Android
          </a>
          
          {/* Replaced with Discover Features */}
          <a 
            href="#features"
            className="inline-flex justify-center items-center gap-2 px-6 py-3.5 border-2 border-white bg-white/70 backdrop-blur-md text-gray-700 rounded-full font-semibold hover:border-primary hover:text-primary transition-all transform hover:-translate-y-0.5 shadow-sm w-full sm:w-auto cursor-pointer"
          >
            <ChevronDown className="w-5 h-5" />
            Discover Features
          </a>
        </div>

        <div className="flex flex-wrap gap-x-4 sm:gap-x-6 gap-y-2 sm:gap-y-3 text-xs sm:text-sm text-gray-600 font-medium border-t border-blue-200/60 pt-4 sm:pt-6">
          <div className="flex items-center gap-1.5 sm:gap-2"><ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-primary" /><span>No Internet Required</span></div>
          <div className="flex items-center gap-1.5 sm:gap-2"><Zap className="w-4 h-4 sm:w-5 sm:h-5 text-primary" /><span>Instant Results</span></div>
          <div className="flex items-center gap-1.5 sm:gap-2"><Smartphone className="w-4 h-4 sm:w-5 sm:h-5 text-primary" /><span>Android APK v1.0</span></div>
        </div>
      </motion.div>

      {/* Right Column: The Hero Graphic */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex-1 relative flex justify-center items-center w-full max-w-[800px] h-[35vh] sm:h-[45vh] lg:h-[80vh] z-10 mt-4 lg:mt-0"
      >
        <img 
          src="/hero-graphic.png" 
          alt="IsdaAI Mobile App showing fishing scanning interface" 
          className="w-full h-full object-contain object-center drop-shadow-2xl"
        />
      </motion.div>
    </section>
  );
}