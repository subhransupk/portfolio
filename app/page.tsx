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
      <HeroContent />
      <AboutMe />
      <Services />
      <Portfolio />
      <TechStack />
      <Testimonials />
      <Contact />
    </main>
  );
}
