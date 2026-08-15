import Projects from './components/Projects';
import Hero from './components/Hero';
import Education from './components/Education';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Contact from './components/Contact';
function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Education/>
      <Projects />
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;