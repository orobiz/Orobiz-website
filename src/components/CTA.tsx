import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Mail, Phone, Zap, Sparkles } from 'lucide-react';

export function CTA() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-24 bg-gradient-to-br from-violet-100/50 via-fuchsia-100/40 to-pink-100/50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-25">
        <div className="absolute top-10 right-10 w-96 h-96 bg-violet-400 rounded-full filter blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-fuchsia-400 rounded-full filter blur-3xl" />
      </div>

      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${10 + i * 6}%`,
            top: `${20 + (i % 3) * 30}%`,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.2, 0.6, 0.2],
            rotate: [0, 180, 360],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4 + i * 0.3,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        >
          {i % 2 === 0 ? (
            <Zap className="text-violet-500/60" size={12 + i} />
          ) : (
            <Sparkles className="text-fuchsia-500/60" size={12 + i} />
          )}
        </motion.div>
      ))}

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-violet-700 via-fuchsia-700 to-pink-700 bg-clip-text text-transparent">
            Ready to Shape Your Narrative?
          </h2>
          
          <p className="text-xl text-gray-700 mb-16 max-w-2xl mx-auto">
            Partner with orobiz to professionalize your investor relations and market reputation management. Silence is not stability—let's build trust together.
          </p>

          {/* Our Other Ventures - Emphasized Section */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 pt-12 border-t border-violet-300/50"
          >
            <h3 className="text-gray-600 mb-8 tracking-wide">Our Other Ventures</h3>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
              <motion.a
                href="https://venture1.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex items-center gap-3 group cursor-pointer"
              >
                <span className="w-3 h-3 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 group-hover:shadow-lg group-hover:shadow-violet-500/50 transition-shadow" />
                <span className="text-gray-700 group-hover:text-violet-600 transition-colors text-lg">
                  Orobiz Capital
                </span>
              </motion.a>
              
              <motion.a
                href="https://venture2.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex items-center gap-3 group cursor-pointer"
              >
                <span className="w-3 h-3 rounded-full bg-gradient-to-r from-fuchsia-500 to-pink-500 group-hover:shadow-lg group-hover:shadow-fuchsia-500/50 transition-shadow" />
                <span className="text-gray-700 group-hover:text-fuchsia-600 transition-colors text-lg">
                  Orobiz Advisory
                </span>
              </motion.a>
              
              <motion.a
                href="https://venture3.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex items-center gap-3 group cursor-pointer"
              >
                <span className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-shadow" />
                <span className="text-gray-700 group-hover:text-cyan-600 transition-colors text-lg">
                  Orobiz Media
                </span>
              </motion.a>
              
              <motion.a
                href="https://venture4.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex items-center gap-3 group cursor-pointer"
              >
                <span className="w-3 h-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 group-hover:shadow-lg group-hover:shadow-emerald-500/50 transition-shadow" />
                <span className="text-gray-700 group-hover:text-emerald-600 transition-colors text-lg">
                  Orobiz Research
                </span>
              </motion.a>
            </div>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
}