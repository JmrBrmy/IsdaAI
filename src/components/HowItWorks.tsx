import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { Camera, Cpu, ShieldCheck, Database } from 'lucide-react';

const steps = [
  { 
    id: 1, 
    title: "Capture the Catch", 
    description: "Take or pick a clear photo of one fish, showing its eyes and gills. Choose the species or leave it on Auto.", 
    icon: <Camera className="w-5 h-5" />, 
    position: "left-[10%] top-[62%]" 
  },
  { 
    id: 2, 
    title: "On-Device AI Analysis", 
    description: "The AI model runs right on your phone and analyzes the photo locally. No internet connection is required.", 
    icon: <Cpu className="w-5 h-5" />, 
    position: "left-[35%] top-[27%]" 
  },
  { 
    id: 3, 
    title: "Instant Freshness Result", 
    description: "Get a clear Fresh or Stale classification alongside a confidence score in seconds.", 
    icon: <ShieldCheck className="w-5 h-5" />, 
    position: "left-[65%] top-[69%]" 
  },
  { 
    id: 4, 
    title: "Save & Track Locally", 
    description: "Tap Save to keep the result in your device's local history. It never leaves your phone.", 
    icon: <Database className="w-5 h-5" />, 
    position: "left-[90%] top-[36%]" 
  }
];

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(1);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 0.9], [0, 1]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.25) setActiveStep(1);
    else if (latest >= 0.25 && latest < 0.5) setActiveStep(2);
    else if (latest >= 0.5 && latest < 0.75) setActiveStep(3);
    else setActiveStep(4);
  });

  return (
    <div ref={containerRef} id="how-it-works" className="relative h-auto md:h-[350vh] bg-background scroll-mt-[80px]">
      <div className="relative md:sticky md:top-[80px] md:h-[calc(100dvh-80px)] overflow-hidden flex flex-col justify-center py-16 md:py-0">
        
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 h-full flex flex-col justify-center">
          
          {/* Reduced header margin and size */}
          <div className="max-w-2xl shrink-0 mb-4 md:mb-8">
            <p className="text-primary font-semibold tracking-wide uppercase text-xs mb-1">A simple offline process</p>
            <h2 className="text-2xl md:text-4xl font-bold text-primary-dark leading-tight">Four steps to safety.</h2>
          </div>

          {/* Desktop Layout (Curved Sticky Animation) */}
          {/* Reduced height to 450px to fit laptop screens */}
          <div className="hidden md:block relative w-full h-[450px]">
            
            {/* Recalculated path for the smaller 450px container */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 1000 450" preserveAspectRatio="none">
              <path 
                d="M 50 280 C 200 280, 250 120, 350 120 C 500 120, 550 310, 650 310 C 800 310, 800 160, 950 160" 
                fill="none" 
                stroke="#E2E8F0" 
                strokeWidth="8" 
                strokeLinecap="round" 
                className="opacity-50" 
              />
              <motion.path 
                d="M 50 280 C 200 280, 250 120, 350 120 C 500 120, 550 310, 650 310 C 800 310, 800 160, 950 160" 
                fill="none" 
                stroke="var(--color-primary)" 
                strokeWidth="4" 
                strokeLinecap="round" 
                style={{ pathLength }} 
              />
            </svg>

            {steps.map((step) => {
              const isActive = activeStep === step.id;
              const isPast = activeStep > step.id;
              const isRevealed = isActive || isPast;
              
              return (
                <div key={step.id} className={`absolute -translate-x-1/2 w-56 transition-all duration-500 z-20 ${step.position}`}>
                  <div className="relative flex justify-center -translate-y-1/2">
                    {/* Smaller circles (w-12) */}
                    <motion.div 
                      initial={false} 
                      animate={{ 
                        backgroundColor: isRevealed ? '#FFFFFF' : '#FFFFFF', 
                        color: isRevealed ? '#32363c' : '#32363c', 
                        borderColor: isRevealed ? 'var(--color-primary)' : '#E2E8F0' 
                      }} 
                      className="w-12 h-12 rounded-full border-2 flex items-center justify-center shadow-md relative z-20 bg-white"
                    >
                      <span className="text-base font-bold">{step.id.toString().padStart(2, '0')}</span>
                    </motion.div>
                  </div>
                  
                  {/* Tighter text block */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }} 
                    animate={{ opacity: isRevealed ? 1 : 1, y: isRevealed ? 0 : 0 }} 
                    transition={{ duration: 0.4 }} 
                    className="text-center mt-1"
                  >
                    <div className="flex justify-center mb-1 text-primary">{step.icon}</div>
                    <h3 className="font-bold mb-1 text-primary-dark text-sm">{step.title}</h3>
                    <p className="text-xs text-gray-600 leading-snug px-2">{step.description}</p>
                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* Mobile Layout (Simplified Stack) */}
          <div className="md:hidden flex flex-col gap-6">
            {steps.map((step) => (
              <div key={step.id} className="flex gap-4 bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0 shadow-md">
                  {step.id}
                </div>
                <div>
                  <h3 className="font-bold text-primary-dark text-base sm:text-lg mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}