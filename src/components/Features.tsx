import { Camera, WifiOff, Database, ShieldCheck, BookOpen, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <WifiOff className="w-6 h-6 text-primary" />,
    title: "100% Offline Detection",
    description: "Powered by an on-device TensorFlow Lite model. No internet, cloud, or server required."
  },
  {
    icon: <Zap className="w-6 h-6 text-primary" />,
    title: "Instant Classification",
    description: "Get a Fresh or Stale result with a confidence score in just 3-5 seconds."
  },
  {
    icon: <Camera className="w-6 h-6 text-primary" />,
    title: "Smart Image Capture",
    description: "Capture using your camera or select from the gallery. Built-in guidance ensures clear eye and gill photos."
  },
  {
    icon: <Database className="w-6 h-6 text-primary" />,
    title: "Local Scan History",
    description: "Every scan is saved locally to an SQLite database. Review or delete past results anytime."
  },
  {
    icon: <BookOpen className="w-6 h-6 text-primary" />,
    title: "Fish Info & Guide",
    description: "Built-in reference guide for the 6 supported species: Bangus, Tilapia, Andohaw, Katambak, Timbungan, and Carabalyas."
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-primary" />,
    title: "Data Privacy First",
    description: "No account creation required. Your images and scan history never leave your device."
  }
];

export default function Features() {
  return (
    // Added an upward-facing shadow: shadow-[0_-10px_30px_rgba(0,0,0,0.08)]
    <section 
      id="features" 
      className="min-h-screen flex flex-col justify-center py-20 bg-blue-50 scroll-mt-[88px] shadow-[0_-10px_30px_rgba(0,0,0,0.08)] relative"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-dark mb-4">
            Designed for the Modern Market
          </h2>
          <p className="text-lg text-gray-600">
            IsdaAI replaces subjective manual inspection with accessible, reliable AI technology right in your pocket.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-white border border-blue-100 hover:border-primary/30 hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-primary-dark mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}