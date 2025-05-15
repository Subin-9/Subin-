import './App.css';
import Contact from './Sections/Contact/Contact';
import Navbar from './Sections/Navbar/Navbar';
import Subu from './Sections/Subu/subu';
import Projects from './Sections/projects/projects';
import Skills from './Sections/skills/skills';

function App() {
  console.log('test');
  return (
<>     
      <Navbar />
      <Subu />
      <Skills />
      <Projects />
      <Contact />
      
      <footer>
        © 2025 Subin
      </footer>
    </>
  );
}
export default App;
