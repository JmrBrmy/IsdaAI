import { ArrowRight, Download } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="flex flex-col w-full scroll-mt-[80px]">
      
      {/* 1. Main About Text (Top) */}
      <div className="bg-white pt-16 sm:pt-24 pb-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-24">
            <div>
              <p className="text-primary font-semibold tracking-wide uppercase text-xs sm:text-sm mb-3 sm:mb-4">Made for the modern market</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-dark leading-tight">
                Your catch deserves<br className="hidden sm:block" /> a reliable check.
              </h2>
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                IsdaAI is an offline Android application for consumers, fish vendors, and market inspectors who want to verify fish freshness instantly without an internet connection.
              </p>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                Developed by students from Trinidad Municipal College, the app uses an on-device TensorFlow Lite model to analyze fish eyes and gills. Your scans and data are stored locally on your device, ensuring complete privacy and availability anywhere.
              </p>
              <a href="#how-it-works" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-light transition-colors group">
                See how it works
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Dark CTA Block (Bottom) */}
      <div className="bg-primary py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          
          <div>
            <p className="text-blue-200 font-semibold text-sm sm:text-base mb-2">Ready for your next market day?</p>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
              Keep your standards high.
            </h2>
            <p className="text-gray-300 text-sm sm:text-lg">
              Your scans, history, and fish guide. All completely offline.
            </p>
          </div>

          <a 
            href="https://github.com/JmrBrmy/IsdaAI/releases/download/v1.0.0/base.apk" 
            className="inline-flex items-center justify-center gap-3 bg-white text-primary-dark px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold hover:bg-gray-100 transition-all transform hover:-translate-y-0.5 shadow-xl shrink-0 cursor-pointer w-full sm:w-auto"
          >
            <Download className="w-5 h-5 sm:w-6 sm:h-6" />
            <div className="text-left">
              <div className="text-sm sm:text-base leading-tight">Download IsdaAI</div>
              <div className="text-[10px] sm:text-xs text-gray-500 font-medium">Android APK • v1.0.0</div>
            </div>
          </a>

        </div>
      </div>

    </section>
  );
}