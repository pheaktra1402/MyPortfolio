import Projects from './components/Projects';
import Hero from './components/Hero';
import Education from './components/Education';
function App() {
  return (
    <div>
      <div className='hero'>
      <Hero/>
      </div>
      <Education/>
      <Projects />
    </div>
  );
}

export default App;