import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

const stats = [
  { number: 10, suffix: '+', label: 'Listed Companies Served' },
  { number: 48, suffix: 'hrs', label: 'To Go Live' },
  { number: 50, suffix: '+', label: 'Investor Briefings' },
  { number: 100, suffix: '%', label: 'Client Retention' }
];

export function Stats() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-24 bg-gradient-to-br from-violet-200/60 via-fuchsia-200/50 to-pink-200/60 relative overflow-hidden">
      {/* Simplified background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-64 h-64 bg-violet-400 rounded-full filter blur-3xl" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-fuchsia-400 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl mb-4 bg-gradient-to-r from-violet-700 via-fuchsia-700 to-pink-700 bg-clip-text text-transparent">Our Impact</h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Measurable results that speak to our excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ stat, index, inView }: { stat: typeof stats[0], index: number, inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      let startTime: number;
      const duration = 2000;
      const startValue = 0;
      const endValue = stat.number;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const value = Math.floor(progress * (endValue - startValue) + startValue);
        setCount(value);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [inView, stat.number]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.08,
        y: -5,
        transition: { duration: 0.2 }
      }}
      className="text-center p-8 bg-white/60 backdrop-blur-md rounded-2xl border border-violet-300/50 hover:bg-white/80 hover:border-violet-400/70 transition-all cursor-pointer shadow-lg shadow-violet-300/30 hover:shadow-xl hover:shadow-violet-400/40"
    >
      <div className="text-5xl sm:text-6xl bg-gradient-to-br from-violet-600 via-fuchsia-600 to-pink-600 bg-clip-text text-transparent mb-3">
        {count}{stat.suffix}
      </div>
      <div className="text-gray-700">{stat.label}</div>
    </motion.div>
  );
}