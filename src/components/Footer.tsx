import { motion } from 'motion/react';
import { Twitter, Linkedin, Instagram, Facebook, MapPin, Phone, Mail, Send } from 'lucide-react';
import { Logo } from './Logo';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import logoImg from './logo/logoImg.png'
import { useRef } from 'react';
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

export function Footer() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const currentYear = new Date().getFullYear();
  // const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter', color: 'from-violet-500 to-purple-500' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'from-blue-500 to-cyan-500' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'from-fuchsia-500 to-pink-500' },
    { icon: Facebook, href: '#', label: 'Facebook', color: 'from-indigo-500 to-violet-500' }
  ];

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // Handle form submission
  //   console.log('Form submitted:', formData);
  // };

  return (
    <footer id="footer" className="bg-gradient-to-br from-gray-100 via-violet-50 to-fuchsia-50 text-gray-700 relative overflow-hidden border-t border-violet-200/50">
      {/* Subtle gradient orbs */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-10 w-96 h-96 bg-violet-400 rounded-full filter blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-fuchsia-400 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          {/* Left: Brand, Address & Social */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={logoImg}
                  alt="OroBiz logo"
                  className="h-12 w-auto"
                />
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
                  <div>A/601, Kedarnath Apts,</div>
                  <div>Beside Ovripada Metro Station,</div>
                  <div>Western Express Highway,</div>
                  <div>Dahisar East, Mumbai 400068</div>
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

            {/* Social Links */}
            {/* <div className="flex gap-4">
              {socialLinks.map((social, i) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.2, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    className="w-10 h-10 bg-white backdrop-blur-sm rounded-full flex items-center justify-center border border-violet-200 hover:border-violet-400 hover:bg-violet-50 transition-all"
                    aria-label={social.label}
                  >
                    <Icon size={18} className="text-gray-600 hover:text-violet-600 transition-colors" />
                  </motion.a>
                );
              })}
            </div> */}
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d351.05444970738904!2d72.86394486412522!3d19.243203005156893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0dd679cdae3%3A0xbe4f722ca837868c!2sOvripada%2C%20Parbat%20Nagar%2C%20Borivali%2C%20Mumbai%2C%20Maharashtra%20400068!5e0!3m2!1sen!2sin!4v1765255436408!5m2!1sen!2sin"
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
                <form
                  action="https://api.web3forms.com/submit"
                  method="POST"
                  className="space-y-4"
                  onSubmit={() => {
                    // let the browser submit to Web3Forms
                    // then clear inputs immediately
                    setTimeout(() => {
                      formRef.current?.reset();
                    }, 0);
                  }}
                >
                  {/* Web3Forms access key */}
                  <input
                    type="hidden"
                    name="access_key"
                    value={WEB3FORMS_ACCESS_KEY}
                  />

                  {/* Optional: redirect URL after success */}
                  {/* <input type="hidden" name="redirect" value="https://yourdomain.com/thank-you" /> */}

                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-white border border-violet-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all text-sm"
                    required
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-white border border-violet-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all text-sm"
                    required
                  />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone Number"
                    className="w-full px-4 py-3 bg-white border border-violet-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all text-sm"
                    required
                  />

                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-4 py-3 bg-white border border-violet-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all text-sm resize-none"
                    required
                  />

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="w-full px-6 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-lg shadow-md hover:shadow-lg hover:shadow-violet-500/30 transition-all flex items-center justify-center gap-2 text-sm"
                  >
                    <span>Send Message</span>
                    <Send size={16} />
                  </motion.button>
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
            <p className="text-gray-600">© 2024 orobiz. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="/privacy-policy.html" target='_blank' className="text-gray-600 hover:text-violet-600 transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="/terms-and-conditions.html" target='_blank' className="text-gray-600 hover:text-violet-600 transition-colors text-sm">
                Terms of Service
              </a>
              {/* <a href="#" className="text-gray-600 hover:text-violet-600 transition-colors text-sm">
                Cookie Policy
              </a> */}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
