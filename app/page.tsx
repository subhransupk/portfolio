import HeroContent from './components/HeroContent';
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import TechStack from './components/TechStack';

export default function Home() {
  return (
    <main className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="min-h-screen flex items-center justify-center">
          <HeroContent />
        </section>
        
        <section className="py-20">
          <AboutMe />
        </section>
        
        <section className="py-20 bg-black/30">
          <Services />
        </section>
        
        <section className="py-20">
          <Portfolio />
        </section>
        
        <section className="py-20 bg-black/30">
          <TechStack />
        </section>
        
        <section className="py-20">
          <Testimonials />
        </section>
        
        <section className="py-20 bg-black/30">
          <Contact />
        </section>
      </div>
    </main>
  );
}
