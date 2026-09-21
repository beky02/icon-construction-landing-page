import { SiteFooter } from './components/SiteFooter';
import { SiteNav } from './components/SiteNav';
import { About } from './sections/About';
import { Contact } from './sections/Contact';
import { Footprint } from './sections/Footprint';
import { Heritage } from './sections/Heritage';
import { Hero } from './sections/Hero';
import { Impact } from './sections/Impact';
import { Projects } from './sections/Projects';
import { Services } from './sections/Services';
import { Transformation } from './sections/Transformation';

export default function App() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <div className="sawtooth" aria-hidden="true" />
        <About />
        <Services />
        <Projects layout="side-by-side" />
        <Footprint />
        <Transformation />
        <Heritage />
        <Impact />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
