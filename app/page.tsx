import HeroContent from './components/HeroContent';
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import TechStack from './components/TechStack';

export default function Home() {
  return (
    <main className="relative w-full min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <section className="min-h-screen flex items-center justify-center py-20 w-full">
          <HeroContent />
        </section>
        
        <section className="py-20 w-full rounded-lg">
          <AboutMe />
        </section>
        
        <section className="py-20 w-full bg-black/30 backdrop-blur-sm rounded-lg">
          <Services />
        </section>
        
        <section className="py-20 w-full rounded-lg">
          <Portfolio />
        </section>
        
        <section className="py-20 w-full bg-black/30 backdrop-blur-sm rounded-lg">
          <TechStack />
        </section>
        
        <section className="py-20 w-full rounded-lg">
          <Testimonials />
        </section>
        
        <section className="py-20 w-full bg-black/30 backdrop-blur-sm rounded-lg">
          <Contact />
        </section>
      </div>
    </main>
  );
}
