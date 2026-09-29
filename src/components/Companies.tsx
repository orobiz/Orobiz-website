import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import avaxLogo from './logo/AvaxApparelsAndOrnaments.jpeg';
import gautamLogo from './logo/GautamExim.jpeg';
import lgtLogo from './logo/LGTHolidays.png';
import supertechLogo from './logo/SupertechEV.jpeg';
import shivashritLogo from './logo/ShivashritFoods.jpeg';
import mumkinsLogo from './logo/mumkins.jpg';

const companies = [
  { name: 'Shivashrit Foods', logo: shivashritLogo },
  { name: 'Supertech EV', logo: supertechLogo },
  { name: 'Avax Apparels and Ornaments', logo: avaxLogo },
  { name: 'Gautam Exim', logo: gautamLogo },
  { name: 'LGT Holidays', logo: lgtLogo },
  { name: 'Mumkins', logo: mumkinsLogo },
];

const marqueeCompanies = [...companies, ...companies];
const MARQUEE_WIDTH = 1400; // px – adjust if spacing changes
const MARQUEE_DURATION = 30; // seconds

// duplicate list for seamless loop
const scrollingCompanies = [...companies, ...companies];
const SCROLL_DURATION = 25; // seconds for one full loop

export function Companies() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="companies"
      className="py-24 bg-gradient-to-br from-violet-100/50 via-fuchsia-100/30 to-pink-100/50 relative overflow-hidden"
    >
      {/* Floating orbs */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-10 right-10 w-96 h-96 bg-violet-300 rounded-full filter blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.3, 1, 1.3],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-10 left-10 w-96 h-96 bg-fuchsia-300 rounded-full filter blur-3xl"
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
            className="text-4xl sm:text-5xl mb-4 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 bg-clip-text text-transparent inline-block"
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
            Trusted By Industry Leaders
          </motion.h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Leading companies trust us to manage their investor relations and market reputation
          </p>
        </motion.div>

{/* Auto-scrolling row */}
<div className="mt-4 relative">
  <div className="overflow-hidden">
    <motion.div
      className="flex gap-6"
      animate={{ x: [0, -MARQUEE_WIDTH] }}
      transition={{
        duration: MARQUEE_DURATION,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      {marqueeCompanies.map((company, index) => (
        <div key={`${company.name}-${index}`} className="flex-shrink-0 w-64">
          <CompanyCard company={company} />
        </div>
      ))}
    </motion.div>
  </div>
</div>

        {/* Additional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">
            Join these successful companies in shaping their market narrative
          </p>

          <motion.a
            href="tel:+918830709272"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-full shadow-lg shadow-violet-500/30 hover:shadow-xl hover:shadow-violet-500/40 transition-all"
          >
            Become a Partner
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

function CompanyCard({ company }: { company: (typeof companies)[0] }) {
  const isShivashrit = company.name === 'Shivashrit Foods';
  const isLgt = company.name === 'LGT Holidays';
  const isMumkins = company.name === 'Mumkins';

  return (
    <div className="relative p-6 bg-white/90 backdrop-blur-xl rounded-2xl border border-violet-200/50 hover:border-violet-400/60 transition-all group overflow-hidden shadow-md hover:shadow-xl hover:shadow-violet-200/50 cursor-pointer">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="relative z-10 flex flex-col items-center justify-center h-28">
        <div
          className={
            isLgt
              ? 'w-32 h-25 rounded-2xl bg-gradient-to-br from-violet-50 to-fuchsia-50 flex items-center justify-center mb-3 shadow-inner overflow-hidden'
              : isShivashrit
              ? 'w-24 h-24 rounded-2xl bg-gradient-to-br from-violet-50 to-fuchsia-50 flex items-center justify-center mb-3 shadow-inner overflow-hidden'
              : isMumkins
              ? 'w-24 h-24 rounded-2xl bg-gradient-to-br from-violet-50 to-fuchsia-50 flex items-center justify-center mb-3 shadow-inner overflow-hidden'
              : 'w-24 h-24 rounded-2xl bg-gradient-to-br from-violet-50 to-fuchsia-50 flex items-center justify-center mb-3 shadow-inner overflow-hidden'
          }
        >
          <img
            src={company.logo}
            alt={company.name}
            className="max-w-full max-h-full object-contain"
          />
        </div>

        <div className="text-gray-700 text-sm font-medium text-center group-hover:text-gray-900 transition-colors">
          {company.name}
        </div>
      </div>

      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100"
        style={{
          background:
            'linear-gradient(180deg, transparent 0%, rgba(139, 92, 246, 0.1) 50%, transparent 100%)',
        }}
        animate={{ y: ['-100%', '200%'] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  );
}
