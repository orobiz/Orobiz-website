import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import logoImg from './logo/logoImg.png';

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

type Status = 'idle' | 'sending' | 'success' | 'error';

export function Footer() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const currentYear = new Date().getFullYear();
  const [status, setStatus] = useState<Status>('idle');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: new FormData(e.currentTarget),
      });
      const data = await res.json();

      if (data.success) {
        setStatus('success');
        formRef.current?.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputClass =
    'w-full px-4 py-3 bg-white border border-violet-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all text-sm';

  return (
    <footer
      id="footer"
      className="bg-gradient-to-br from-gray-100 via-violet-50 to-fuchsia-50 text-gray-700 relative overflow-hidden border-t border-violet-200/50"
    >
      {/* Subtle gradient orbs */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-10 w-96 h-96 bg-violet-400 rounded-full filter blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-fuchsia-400 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          {/* Left: Brand, Address & Contact */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={logoImg} alt="OroBiz logo" className="h-12 w-auto" />
                <div className="flex flex-col">
                  <span className="text-4xl font-black tracking-tight bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                    Orobiz
                  </span>
                  <span className="text-xs uppercase tracking-[0.25em] text-violet-500">
                    IR&nbsp;&nbsp;PR
                  </span>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed">
                Strategic Investor Relations and Public Relations for listed and growth-stage companies.
              </p>
            </div>

            {/* Address & Contact Info */}
            <div className="space-y-3">
              <motion.div
                className="flex items-start gap-3 group cursor-pointer"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <MapPin size={20} className="text-violet-500 mt-1 flex-shrink-0" />
                <div className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                  <div>Office No. 507, 5th Floor ,</div>
                  <div>The Summit Business Bay,</div>
                  <div>off. Western Express Highway Andheri - Kurla Road,</div>
                  <div>Andheri(East) Mumbai – 400093</div>
                </div>
              </motion.div>

              <motion.a
                href="tel:+919326620829"
                className="flex items-center gap-3 group cursor-pointer"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Phone size={20} className="text-fuchsia-500 flex-shrink-0" />
                <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                  +91 9326620829
                </span>
              </motion.a>

              <motion.a
                href="mailto:pr@orobiz.com"
                className="flex items-center gap-3 group cursor-pointer"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Mail size={20} className="text-cyan-500 flex-shrink-0" />
                <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                  pr@orobiz.com
                </span>
              </motion.a>
            </div>
          </div>

          {/* Middle: Map Section */}
          <div>
            <h3 className="text-gray-900 mb-6 text-lg bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
              Find Us
            </h3>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative h-[300px] rounded-2xl overflow-hidden border border-violet-200/50 shadow-lg bg-white/70 backdrop-blur-xl"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.8056758299163!2d72.85441776114595!3d19.11617905063457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8321e86b6f5%3A0x55486e84b2c90f9e!2sThe%20Summit%20Business%20Bay%2C%20Gundavali%2C%20Andheri%20East%2C%20Mumbai%2C%20Maharashtra%20400093!5e0!3m2!1sen!2sin!4v1790677079988!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>
          </div>

          {/* Right: Contact Form */}
          <div>
            <h3 className="text-gray-900 mb-6 text-lg bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
              Get In Touch
            </h3>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              {/* Web3Forms access key (from env) */}
              <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />

              {/* Optional email subject */}
              <input type="hidden" name="subject" value="New enquiry from Orobiz website" />

              {/* Spam honeypot: must stay empty */}
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className={inputClass}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className={inputClass}
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                className={inputClass}
                required
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                className={`${inputClass} resize-none`}
                required
              />

              <motion.button
                type="submit"
                disabled={status === 'sending'}
                whileHover={status === 'sending' ? undefined : { scale: 1.02, y: -2 }}
                whileTap={status === 'sending' ? undefined : { scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="w-full px-6 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-lg shadow-md hover:shadow-lg hover:shadow-violet-500/30 transition-all flex items-center justify-center gap-2 text-sm disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <span>{status === 'sending' ? 'Sending...' : 'Send Message'}</span>
                <Send size={16} />
              </motion.button>

              {status === 'success' && (
                <p className="text-sm text-green-600" role="status">
                  Thank you! Your message has been sent. We'll get back to you soon.
                </p>
              )}
              {status === 'error' && (
                <p className="text-sm text-red-600" role="alert">
                  Something went wrong. Please try again or email us at pr@orobiz.com.
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-violet-200/50"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600">© {currentYear} orobiz. All rights reserved.</p>
            <div className="flex gap-6">
              <a
                href="/privacy-policy.html"
                target="_blank"
                rel="noreferrer"
                className="text-gray-600 hover:text-violet-600 transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-and-conditions.html"
                target="_blank"
                rel="noreferrer"
                className="text-gray-600 hover:text-violet-600 transition-colors text-sm"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}