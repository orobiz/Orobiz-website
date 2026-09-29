import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    content: 'Orobizz transformed our brand presence. Their strategic approach and creativity exceeded our expectations.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Marketing Director, GlobalCorp',
    content: 'The team at Orobizz is exceptional. They delivered results that significantly boosted our market visibility.',
    rating: 5,
  },
  {
    name: 'Emma Rodriguez',
    role: 'Founder, StyleHub',
    content: 'Working with Orobizz was a game-changer. Their expertise in PR and marketing is unmatched.',
    rating: 5,
  }
];

export function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-violet-50/30 relative overflow-hidden">
      {/* Subtle orbs */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-64 h-64 bg-violet-300 rounded-full filter blur-3xl" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-fuchsia-300 rounded-full filter blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl mb-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted by listed and growth-stage companies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial, index, inView }: { testimonial: typeof testimonials[0], index: number, inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ 
        y: -10,
        boxShadow: '0 20px 40px rgba(139, 92, 246, 0.15)',
        transition: { duration: 0.3 } 
      }}
      className="p-8 bg-white backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer group border border-violet-100 hover:border-violet-300"
    >
      {/* Quote icon */}
      <Quote className="text-violet-200 mb-4 group-hover:text-violet-300 transition-colors" size={40} />
      
      {/* Stars */}
      <div className="flex gap-1 mb-6">
        {[...Array(testimonial.rating)].map((_, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ duration: 0.3 }}
          >
            <Star className="fill-yellow-400 text-yellow-400" size={20} />
          </motion.div>
        ))}
      </div>

      <p className="text-gray-700 mb-8 leading-relaxed">
        "{testimonial.content}"
      </p>

      {/* Profile */}
      <div className="flex items-center gap-4">
        <motion.div 
          className="w-14 h-14 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          {testimonial.name.split(' ').map(n => n[0]).join('')}
        </motion.div>
        <div>
          <div className="text-gray-900 font-medium">{testimonial.name}</div>
          <div className="text-sm text-gray-500">{testimonial.role}</div>
        </div>
      </div>
    </motion.div>
  );
}