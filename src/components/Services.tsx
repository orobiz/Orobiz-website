import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Megaphone, TrendingUp, Users, Newspaper, Target, Zap, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Users,
    title: 'Investor Communication',
    description: 'Regular newsletters on financials, interactive briefings with Q&A, and real-time alerts to keep investors informed and engaged.',
    color: 'from-violet-500 via-purple-500 to-fuchsia-500'
  },
  {
    icon: Newspaper,
    title: 'Media & PR',
    description: 'Drafting press releases, securing feature stories, and running crisis management protocols to shape your narrative.',
    color: 'from-cyan-500 via-blue-500 to-indigo-500'
  },
  {
    icon: Target,
    title: 'Online Reputation Management',
    description: 'Monitor sentiment across social media and forums, respond to queries, and publish success stories for social proof.',
    color: 'from-pink-500 via-rose-500 to-red-500'
  },
  {
    icon: Megaphone,
    title: 'Strategic Content',
    description: 'Create growth stories, humanize your brand with leadership content, and manage calendars for consistent visibility.',
    color: 'from-emerald-500 via-green-500 to-teal-500'
  },
  {
    icon: TrendingUp,
    title: 'Valuation Support',
    description: 'Ensure continuous transparent communication so silence is not perceived as instability affecting market value.',
    color: 'from-orange-500 via-amber-500 to-yellow-500'
  },
  {
    icon: Zap,
    title: 'Rapid Deployment',
    description: 'IR channels go live within 48 hours, followed by inaugural campaigns aligned with key financial events.',
    color: 'from-sky-500 via-cyan-500 to-teal-500'
  }
];

export function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-gray-50 to-violet-50/30 relative overflow-hidden">
      {/* Floating orbs */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-violet-300 to-fuchsia-300 rounded-full opacity-20 blur-3xl"
      />
      <motion.div
        animate={{
          rotate: -360,
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-cyan-300 to-emerald-300 rounded-full opacity-20 blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl sm:text-6xl mb-4 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 bg-clip-text text-transparent inline-block"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            style={{
              backgroundSize: '200% 200%',
            }}
          >
            Our Services
          </motion.h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive IR & PR framework for listed and growth-stage companies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index, inView }: { service: typeof services[0], index: number, inView: boolean }) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateX: -20 }}
      animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ 
        y: -15, 
        scale: 1.03,
        rotateY: 5,
        transition: { duration: 0.3 } 
      }}
      className="relative p-8 bg-white backdrop-blur-xl rounded-2xl border border-violet-200/50 hover:border-violet-400/60 transition-all group overflow-hidden shadow-lg shadow-violet-100/50 hover:shadow-xl hover:shadow-violet-200/60"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Animated gradient background */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10`}
        animate={{
          scale: [1, 1.5, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />
      
      {/* Glowing edge effect */}
      <motion.div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-30 blur-xl`}
        animate={{
          opacity: [0, 0.3, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />

      <motion.div 
        className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 z-10`}
        whileHover={{ 
          rotate: [0, -10, 10, -10, 0],
          scale: 1.15,
        }}
        transition={{ duration: 0.5 }}
        animate={{
          boxShadow: [
            '0 0 20px rgba(139, 92, 246, 0.3)',
            '0 0 40px rgba(236, 72, 153, 0.5)',
            '0 0 20px rgba(139, 92, 246, 0.3)',
          ],
        }}
        style={{
          transition: 'box-shadow 2s infinite',
        }}
      >
        <Icon className="text-white" size={32} />
      </motion.div>
      
      <h3 className="text-2xl text-gray-900 mb-3 relative z-10">{service.title}</h3>
      <p className="text-gray-600 relative z-10">{service.description}</p>
      
      {/* Holographic scan line */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, rgba(139, 92, 246, 0.1) 50%, transparent 100%)',
        }}
        animate={{
          y: ['-100%', '200%'],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Corner accents */}
      <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${service.color} opacity-20 blur-2xl rounded-bl-full`} />
      <div className={`absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr ${service.color} opacity-20 blur-2xl rounded-tr-full`} />
    </motion.div>
  );
}