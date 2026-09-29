import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Zap, TrendingUp, Rocket, Phone, Mail } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-100 via-violet-100/40 to-fuchsia-100/40">
      {/* Gradient Orbs - Cleaner background */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-violet-300 via-fuchsia-300 to-pink-300 rounded-full filter blur-3xl opacity-30"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -80, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-300 via-blue-300 to-violet-300 rounded-full filter blur-3xl opacity-30"
      />
      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 rounded-full filter blur-3xl opacity-25"
      />

      {/* Floating particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${2 + Math.random() * 4}px`,
            height: `${2 + Math.random() * 4}px`,
            background: i % 3 === 0 
              ? 'linear-gradient(135deg, #a78bfa 0%, #ec4899 100%)'
              : i % 3 === 1
              ? 'linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%)'
              : 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)',
            boxShadow: '0 0 10px currentColor',
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0, 0.8, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}

      {/* Scan lines effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, rgba(139, 92, 246, 0.03) 0px, transparent 2px)',
          backgroundSize: '100% 4px'
        }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 backdrop-blur-xl rounded-full border border-violet-400/30 text-violet-700 mb-8 shadow-lg shadow-violet-400/10"
        >
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{ 
              rotate: { duration: 2, repeat: Infinity, ease: "linear" },
              scale: { duration: 1, repeat: Infinity }
            }}
          >
            <Sparkles size={18} className="text-fuchsia-500" />
          </motion.div>
          <span className="text-sm bg-gradient-to-r from-violet-700 to-fuchsia-700 bg-clip-text text-transparent font-medium">
            Strategic IR & PR for Listed Companies
          </span>
          <motion.div
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="w-2 h-2 rounded-full bg-fuchsia-500"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-6xl lg:text-8xl text-gray-900 mb-6 leading-tight"
        >
          <motion.span
            className="inline-block"
            animate={{
              textShadow: [
                '0 0 20px rgba(139, 92, 246, 0.3)',
                '0 0 40px rgba(236, 72, 153, 0.5)',
                '0 0 20px rgba(139, 92, 246, 0.3)',
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            Shape Your
          </motion.span>
          <br />
          <motion.span 
            className="inline-block bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              backgroundSize: '200% 200%',
            }}
          >
            Market Narrative
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto"
        >
          Outsourced Investor Relations and Public Relations that keeps your investors informed, your reputation protected, and your valuation optimized.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8"
        >
          {/* Email button */}
          <motion.a
            href="mailto:pr@orobiz.com"
            className="group relative px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-full overflow-hidden shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-pink-600"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10 flex items-center gap-2">
              Professionalize Your IR
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight size={20} />
              </motion.div>
            </span>
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100"
              style={{
                boxShadow:
                  '0 0 30px rgba(236, 72, 153, 0.8), inset 0 0 20px rgba(236, 72, 153, 0.3)',
              }}
            />
          </motion.a>

          {/* Phone button */}
          <motion.a
            href="tel:+918830709272"
            className="relative px-8 py-4 bg-white/80 text-violet-700 rounded-full border-2 border-violet-400/50 backdrop-blur-sm overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            />
            <span className="relative z-10">Book Strategic Review</span>
          </motion.a>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {[
            { icon: Zap, label: 'Live in 48 Hours', color: 'from-yellow-400 to-orange-500' },
            { icon: TrendingUp, label: 'Always-On Communication', color: 'from-emerald-400 to-cyan-500' },
            { icon: Sparkles, label: 'Strategic Discretion', color: 'from-violet-400 to-fuchsia-500' }
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + i * 0.15, duration: 0.5 }}
              whileHover={{ 
                y: -5,
                scale: 1.03,
                transition: { duration: 0.2 }
              }}
              className="relative p-6 bg-white/60 backdrop-blur-xl rounded-2xl border border-violet-200/50 group overflow-hidden"
            >
              {/* Animated gradient border */}
              <motion.div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-20 blur-xl`}
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />
              
              <div className="relative z-10">
                <div className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br ${item.color} p-3 shadow-lg`}
                  style={{
                    boxShadow: `0 0 30px ${i === 0 ? 'rgba(251, 191, 36, 0.5)' : i === 1 ? 'rgba(16, 185, 129, 0.5)' : 'rgba(139, 92, 246, 0.5)'}`
                  }}
                >
                  <item.icon className="text-white w-full h-full" />
                </div>
                <span className="text-gray-900 font-medium">{item.label}</span>
              </div>

              {/* Holographic effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                style={{
                  background: 'linear-gradient(45deg, transparent 30%, rgba(139, 92, 246, 0.1) 50%, transparent 70%)',
                  backgroundSize: '200% 200%',
                }}
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%'],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-8 h-12 border-2 border-violet-400 rounded-full flex justify-center p-2 shadow-lg shadow-violet-400/30">
          <motion.div
            animate={{ y: [0, 16, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2 h-2 bg-gradient-to-b from-violet-500 to-fuchsia-500 rounded-full"
          />
        </div>
      </motion.div>
    </div>
  );
}