import { memo } from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import avaxLogo from './logo/AvaxApparelsAndOrnaments.jpeg';
import gautamLogo from './logo/GautamExim.jpeg';
import lgtLogo from './logo/LGTHolidays.png';
import supertechLogo from './logo/SupertechEV.jpeg';
import shivashritLogo from './logo/ShivashritFoods.jpeg';
import mumkinsLogo from './logo/mumkins.jpg';
import tnbLogo from './logo/ShreeTNBPolymers.png';

const companies = [
  { name: 'Shivashrit Foods', logo: shivashritLogo },
  { name: 'Supertech EV', logo: supertechLogo },
  { name: 'Avax Apparels and Ornaments', logo: avaxLogo },
  { name: 'Gautam Exim', logo: gautamLogo },
  { name: 'LGT Holidays', logo: lgtLogo },
  { name: 'Mumkins', logo: mumkinsLogo },
  { name: 'Shree TNB Polymers', logo: tnbLogo },
];

// duplicate list for a seamless loop
const marqueeCompanies = [...companies, ...companies];
const MARQUEE_DURATION = 30; // seconds for one full loop

/*
  All continuous animations live in CSS and only touch `transform` and `opacity`,
  so the browser runs them on the GPU compositor without repainting.
*/
const css = `
@keyframes companies-marquee {
  from { transform: translate3d(0, 0, 0); }
  to   { transform: translate3d(-50%, 0, 0); }
}
@keyframes companies-orb-a {
  0%, 100% { transform: scale(1);   opacity: 0.55; }
  50%      { transform: scale(1.3); opacity: 0.9; }
}
@keyframes companies-orb-b {
  0%, 100% { transform: scale(1.3); opacity: 0.55; }
  50%      { transform: scale(1);   opacity: 0.9; }
}
@keyframes companies-shimmer {
  from { transform: translate3d(0, -100%, 0); }
  to   { transform: translate3d(0, 200%, 0); }
}

.companies-marquee-track {
  animation: companies-marquee ${MARQUEE_DURATION}s linear infinite;
  will-change: transform;
  backface-visibility: hidden;
}
.companies-marquee-track:hover { animation-play-state: paused; }

.companies-orb {
  will-change: transform, opacity;
  pointer-events: none;
}
.companies-orb-a { animation: companies-orb-a 4s ease-in-out infinite; }
.companies-orb-b { animation: companies-orb-b 7s ease-in-out infinite; }

/* shimmer only runs while the card is hovered */
.companies-shimmer { opacity: 0; transition: opacity 0.2s; }
.companies-card:hover .companies-shimmer {
  opacity: 1;
  animation: companies-shimmer 2s linear infinite;
}

@media (prefers-reduced-motion: reduce) {
  .companies-marquee-track,
  .companies-orb-a,
  .companies-orb-b,
  .companies-card:hover .companies-shimmer { animation: none; }
}
`;

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
      <style>{css}</style>

      {/*
        Floating orbs: a radial gradient fades to transparent on its own, so the
        expensive `filter: blur()` is no longer needed. Blurring a 384px element
        while scaling it forces a re-raster every frame, which caused the flicker.
      */}
      <div
        aria-hidden
        className="companies-orb companies-orb-a absolute top-10 right-10 w-96 h-96 rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(196,181,253,0.45) 0%, rgba(196,181,253,0) 70%)',
        }}
      />
      <div
        aria-hidden
        className="companies-orb companies-orb-b absolute bottom-10 left-10 w-96 h-96 rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(240,171,252,0.45) 0%, rgba(240,171,252,0) 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Static gradient text: animating background-position repaints every frame */}
          <h2 className="text-4xl sm:text-5xl mb-4 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 bg-clip-text text-transparent inline-block">
            Trusted By Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Leading companies trust us to manage their investor relations and market reputation
          </p>
        </motion.div>

        {/* Auto-scrolling row */}
        <div className="mt-4 relative">
          <div className="overflow-hidden py-4">
            {/* w-max + mr-6 (not gap) keeps both copies identical so -50% loops seamlessly */}
            <div className="companies-marquee-track flex w-max">
              {marqueeCompanies.map((company, index) => (
                <div
                  key={`${company.name}-${index}`}
                  className="flex-shrink-0 w-64 mr-6"
                >
                  <CompanyCard company={company} />
                </div>
              ))}
            </div>
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
            href="tel:+919326620829"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-full shadow-lg shadow-violet-500/30 hover:shadow-xl hover:shadow-violet-500/40 transition-shadow"
          >
            Become a Partner
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

const CompanyCard = memo(function CompanyCard({
  company,
}: {
  company: (typeof companies)[0];
}) {
  const isLgt = company.name === 'LGT Holidays';

  return (
    // backdrop-blur removed: 14 blurred cards inside a moving layer is very costly
    <div className="companies-card relative p-6 bg-white/95 rounded-2xl border border-violet-200/50 hover:border-violet-400/60 transition-[border-color,box-shadow] group overflow-hidden shadow-md hover:shadow-xl hover:shadow-violet-200/50 cursor-pointer">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center justify-center">
        <div
          className={`${
            isLgt ? 'w-32' : 'w-24'
          } h-24 p-2 rounded-2xl bg-white flex items-center justify-center mb-3 shadow-inner overflow-hidden`}
        >
          <img
            src={company.logo}
            alt={company.name}
            width={96}
            height={96}
            loading="lazy"
            decoding="async"
            draggable={false}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="text-gray-700 text-sm font-medium text-center group-hover:text-gray-900 transition-colors">
          {company.name}
        </div>
      </div>

      <div
        aria-hidden
        className="companies-shimmer absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, transparent 0%, rgba(139, 92, 246, 0.1) 50%, transparent 100%)',
        }}
      />
    </div>
  );
});