import {
  Camera,
  WifiOff,
  Database,
  ShieldCheck,
  BookOpen,
  Zap,
  Video,
  ChefHat,
  Languages,
} from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  { icon: <WifiOff className="w-6 h-6 text-primary" />, title: "100% Offline Detection", description: "Powered by an on-device AI model. No internet, cloud, or server required." },
  { icon: <Zap className="w-6 h-6 text-primary" />, title: "Instant Classification", description: "Get a Fresh or Stale result with a confidence score in just 3-5 seconds." },
  { icon: <Camera className="w-6 h-6 text-primary" />, title: "Smart Image Capture", description: "Take a photo or pick one from the gallery. Choose the fish species or leave it on Auto, and the built-in guide helps you take clear eye and gill photos." },
  { icon: <Video className="w-6 h-6 text-primary" />, title: "Live Detection", description: "Point the camera at fish and see green (Fresh) and red (Stale) boxes in real time." },
  { icon: <Database className="w-6 h-6 text-primary" />, title: "Local Scan History", description: "Save any result to a local SQLite database on your phone. Review or delete past scans anytime." },
  { icon: <BookOpen className="w-6 h-6 text-primary" />, title: "Fish Info & Guide", description: "Built-in reference guide for the 6 supported species: Bangus, Tilapia, Andohaw, Timbungan, Silay, and Carabalyas." },
  { icon: <ChefHat className="w-6 h-6 text-primary" />, title: "Recipe Suggestions", description: "Got a fresh fish? Get cooking ideas that match the species, and save your favorites." },
  { icon: <Languages className="w-6 h-6 text-primary" />, title: "English, Tagalog & Dark Mode", description: "Switch the app language between English and Tagalog, and choose a Light or Dark theme." },
  { icon: <ShieldCheck className="w-6 h-6 text-primary" />, title: "Data Privacy First", description: "No account creation required. Your images and scan history never leave your device." }
];

export default function Features() {
  return (
    <section id="features" className="py-20 lg:py-28 bg-blue-100 scroll-mt-[80px] shadow-[0_-10px_30px_rgba(0,0,0,0.08)] relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-dark mb-4">Designed for the Modern Market</h2>
          <p className="text-base sm:text-lg text-gray-600">IsdaAI replaces subjective manual inspection with accessible, reliable AI technology right in your pocket.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-blue-100 hover:border-primary/30 hover:shadow-xl transition-all"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 sm:mb-6">
                {feature.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-primary-dark mb-2 sm:mb-3">{feature.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}