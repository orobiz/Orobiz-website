import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Features } from './components/Features';
import { Stats } from './components/Stats';
import { Companies } from './components/Companies';
import { Testimonials } from './components/Testimonials';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { CursorGlow } from './components/CursorGlow';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <CursorGlow />
      <Navbar />
      <Hero />
      <Companies />
      <Services />
      <Features />
      <Stats />
      {/* <Testimonials /> */}
      <CTA />
      <Footer />
    </div>
  );
}