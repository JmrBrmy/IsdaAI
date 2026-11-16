import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { Camera, Cpu, ShieldCheck, Database } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: "Capture the Catch",
    description: "Use the built-in camera or gallery to take a clear photo of the fish's eyes and gills.",
    icon: <Camera className="w-6 h-6 md:w-8 md:h-8" />,
    position: "left-[10%] top-[65%]",
  },
  {
    id: 2,
    title: "On-Device AI Analysis",
    description: "Our embedded TensorFlow Lite model processes the image locally. No internet connection is required.",
    icon: <Cpu className="w-6 h-6 md:w-8 md:h-8" />,
    position: "left-[35%] top-[30%]",
  },
  {
    id: 3,
    title: "Instant Freshness Result",
    description: "Get a clear Fresh or Stale classification alongside a confidence score in seconds.",
    icon: <ShieldCheck className="w-6 h-6 md:w-8 md:h-8" />,
    position: "left-[65%] top-[70%]",
  },
  {
    id: 4,
    title: "Save & Track Locally",
    description: "Results are saved securely to your device's local SQLite database for future reference.",
    icon: <Database className="w-6 h-6 md:w-8 md:w-8" />,
    position: "left-[90%] top-[35%]",
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
    <div 
      ref={containerRef} 
      id="how-it-works" 
      className="relative h-[600vh] bg-background scroll-mt-[88px]"
    >
      <div className="sticky top-[88px] h-[calc(100dvh-88px)] overflow-hidden flex flex-col justify-center">
        
        <div className="max-w-7xl mx-auto w-full px-6 h-full flex flex-col justify-center">
          
          {/* Header */}
          <div className="max-w-2xl shrink-0">
            <p className="text-primary font-semibold tracking-wide uppercase text-sm mb-2">
              A simple offline process
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-primary-dark leading-tight">
              Four steps to safety.
            </h2>
          </div>

          {/* Desktop Layout (Curved Sticky Animation) */}
          <div className="hidden md:block relative w-full h-[400px]">
            
            {/* The SVG Curve - Recalculated path to drop exactly between numbers and text */}
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none z-10" 
              viewBox="0 0 1000 400" 
              preserveAspectRatio="none"
            >
              <path
                d="M 50 300 C 200 300, 250 160, 350 160 C 500 160, 550 320, 650 320 C 800 320, 800 180, 950 180"
                fill="none"
                stroke="#E2E8F0"
                strokeWidth="15"
                strokeLinecap="round"
                className="opacity-50"
              />
              <motion.path
                d="M 50 300 C 200 300, 250 160, 350 160 C 500 160, 550 320, 650 320 C 800 320, 800 180, 950 180"
                fill="none"
                stroke="var(--color-primary)"
                strokeWidth="7"
                strokeLinecap="round"
                style={{ pathLength }}
              />
            </svg>

            {/* The Steps */}
            {steps.map((step) => {
              const isActive = activeStep === step.id;
              const isPast = activeStep > step.id;
              const isRevealed = isActive || isPast;
              
              return (
                <div 
                  key={step.id} 
                  // Removed -translate-y-1/2 from the parent so the text flows down naturally
                  className={`absolute -translate-x-1/2 w-64 transition-all duration-500 z-20 ${step.position}`}
                >
                  {/* Step Circle - Added -translate-y-1/2 here to lock it in its original spot */}
                  <div className="relative flex justify-center -translate-y-1/2">
                    <motion.div 
                      initial={false}
                      animate={{ 
                        scale: isActive ? 1 : 1,
                        backgroundColor: isRevealed ? '#FFFFFF' : '#FFFFFF',
                        color: isRevealed ? '#32363c' : '#32363c',
                        borderColor: isRevealed ? 'var(--color-primary)' : '#E2E8F0'
                      }}
                      className="w-16 h-16 rounded-full border-1 flex items-center justify-center shadow-lg relative z-20 bg-white"
                    >
                      <span className="text-xl font-bold">{step.id.toString().padStart(2, '0')}</span>
                    </motion.div>
                  </div>

                  {/* Step Content - Added mt-12 to push icons and text down away from the line */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ 
                      opacity: isRevealed ? 1 : 1, 
                      y: isRevealed ? 0 : 0
                    }}
                    transition={{ duration: 0.4 }}
                    className="text-center mb-50"
                  >
                    <div className="flex justify-center mb-1 text-primary">
                      {step.icon}
                    </div>
                    <h3 className="font-bold mb-2 text-primary-dark text-lg">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden flex flex-col gap-8 pb-10">
            {steps.map((step) => (
              <div key={step.id} className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0 shadow-md">
                  {step.id}
                </div>
                <div>
                  <h3 className="font-bold text-primary-dark text-lg mb-1">{step.title}</h3>
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