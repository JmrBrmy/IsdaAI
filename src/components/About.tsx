import { ArrowRight, Download } from 'lucide-react';

const team = [
  { name: "Ricianin L. Bontog", role: "Project Manager" },
  { name: "Dexter B. Tenchaves", role: "Software Developer" },
  { name: "Niño B. Labos", role: "Lead System Analyst" },
  { name: "Charity Cuysona", role: "System Analyst" },
  { name: "Jejomar T. Bermoy", role: "QA Lead" },
];

export default function About() {
  return (
    <section id="about" className="flex flex-col w-full scroll-mt-[72px]">
      
      {/* 1. Main About Text (Top) */}
      <div className="bg-background pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
            <div>
              <p className="text-primary font-semibold tracking-wide uppercase text-sm mb-4">
                Made for the modern market
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-dark leading-tight">
                Your catch deserves<br />
                a reliable check.
              </h2>
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                IsdaAI is an offline Android application for consumers, fish vendors, and market inspectors who want to verify fish freshness instantly without an internet connection.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Developed by students from Trinidad Municipal College, the app uses an on-device TensorFlow Lite model to analyze fish eyes and gills. Your scans and data are stored locally on your device, ensuring complete privacy and availability anywhere.
              </p>
              <a href="#how-it-works" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-light transition-colors group">
                See how it works
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Dark CTA Block (Middle) */}
      <div className="bg-primary py-20 px-6">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div>
            <p className="text-blue-200 font-semibold mb-2">Ready for your next market day?</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Keep your standards high.
            </h2>
            <p className="text-gray-300 text-lg">
              Your scans, history, and fish guide. All completely offline.
            </p>
          </div>

          {/* Added transition-all transform hover:-translate-y-0.5 */}
          <button className="flex items-center gap-3 bg-white text-primary-dark px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all transform hover:-translate-y-0.5 shadow-xl shrink-0">
            <Download className="w-6 h-6" />
            <div className="text-left">
              <div className="text-sm leading-tight">Download IsdaAI</div>
              <div className="text-xs text-gray-500 font-medium">Android APK • v1.0.0</div>
            </div>
          </button>

        </div>
      </div>

      {/* 3. The Development Team (Bottom) */}
      <div className="bg-background pt-16 pb-24 px-6">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-primary-dark">The Development Team</h3>
            <p className="text-gray-500 mt-2">College of Computer Studies</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {team.map((member, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-50 text-primary rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  {member.name.charAt(0)}
                </div>
                <h4 className="font-semibold text-primary-dark text-sm">{member.name}</h4>
                <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}