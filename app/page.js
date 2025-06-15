import AboutMe from './components/AboutMe';
import AdditionalSkills from './components/AdditionalSkills';
import Footer from './components/Footer';
import HeroBanner from './components/HeroBanner';
import NavigationBar from './components/NavigationBar';
import PortFolio from './components/PortFolio';
import SkillsShowcase from './components/SkillsShowcase';
import WorkExperience from './components/WorkExperience';
import ParticleBackground from './components/PrticleBackground';

export default function Home() {
  return (
    <main>
      {/* <ParticleBackground type="stars" /> */}
      {/* <ParticleBackground type="bubbles" /> */}
      {/* <ParticleBackground type="fireflies" /> */}
      {/* <ParticleBackground type="lines" /> */}
      {/* <ParticleBackground type="triangles" /> */}
      {/* <ParticleBackground type="confetti" /> */}
      {/* <ParticleBackground type="floatingEmoji" /> */}
      <ParticleBackground type="snow" />
      <NavigationBar />
      <HeroBanner />
      <AboutMe />
      <SkillsShowcase />

      <AdditionalSkills />
      <PortFolio />
      <WorkExperience />
      <Footer />
    </main>
  );
}
