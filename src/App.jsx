import Projects from './components/Projects';
import Hero from './components/Hero';
import Education from './components/Education';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Education/>
      <Projects />
      <Skills/>
    </div>
  );
}

export default App;