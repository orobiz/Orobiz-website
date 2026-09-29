import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { CheckCircle2, Award, Shield, Rocket, Sparkles, Target } from 'lucide-react';

const features = [
  { text: 'Strategic discretion in channel selection', icon: Target },
  { text: 'Scalable from routine to major announcements', icon: Shield },
  { text: 'Strict confidentiality around financials', icon: Sparkles },
  { text: 'Quarterly performance reviews', icon: Rocket },
  { text: 'Analytics and investor update packs', icon: CheckCircle2 },
  { text: 'Process-driven rapid implementation', icon: Award }
];

export function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="features" className="py-24 bg-gradient-to-br from-white to-gray-100 relative overflow-hidden">
      {/* Subtle orbs */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-64 h-64 bg-violet-300 rounded-full filter blur-3xl" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-fuchsia-300 rounded-full filter blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl sm:text-5xl mb-6 text-gray-900">
              Why Choose
              <br />
              <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                ORO Business Advisors?
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              More than an execution agency—a strategic partner for investor relations and market reputation management.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.text}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ x: 10, backgroundColor: 'rgba(139, 92, 246, 0.05)', transition: { duration: 0.2 } }}
                    className="flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all group"
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="flex-shrink-0"
                    >
                      <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-md group-hover:shadow-lg group-hover:shadow-violet-300 transition-shadow">
                        <Icon className="text-white" size={20} />
                      </div>
                    </motion.div>
                    <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{feature.text}</span>
                  </motion.div>
                );
              })}
            </div>

            {/* <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="mt-10 px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-full shadow-lg shadow-violet-500/30 hover:shadow-xl hover:shadow-violet-500/40 transition-all"
            >
              Discover More
            </motion.button> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="relative h-[500px] flex items-center justify-center"
          >
            {/* Simplified rotating rings */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute rounded-full border-2 ${
                  i % 2 === 0 ? 'border-violet-200' : 'border-fuchsia-200'
                }`}
                style={{
                  width: `${300 + i * 80}px`,
                  height: `${300 + i * 80}px`,
                }}
                animate={{
                  rotate: i % 2 === 0 ? 360 : -360,
                }}
                transition={{
                  duration: 20 + i * 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            ))}

            {/* Center stat */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative z-10 p-10 bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-3xl shadow-2xl cursor-pointer"
            >
              <div className="text-6xl text-white mb-2">48hrs</div>
              <div className="text-sm text-violet-100">IR Channels Live</div>
            </motion.div>

            {/* Floating icons */}
            {[Award, Rocket, Sparkles, Target].map((Icon, i) => (
              <motion.div
                key={i}
                className="absolute cursor-pointer"
                style={{
                  top: `${20 + Math.sin(i * Math.PI / 2) * 40}%`,
                  left: `${50 + Math.cos(i * Math.PI / 2) * 45}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
                whileHover={{ scale: 1.2, rotate: 360 }}
              >
                <div className="w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center border border-violet-100 hover:border-violet-300 hover:shadow-2xl transition-all">
                  <Icon className="text-violet-600" size={28} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}