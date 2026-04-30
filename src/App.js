import 'O:/Portfolio/portfolio/src/assets/styles/App.css';
import NavBar from './Components/NavBar';
import Footprint from './Components/Footprint';
import Experience from './Components/Experience';
import Project from './Components/Project';
import Techstack from './Components/Techstack';
import Contact from './Components/Contact';

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <div className="hero-container">

        <div className="hero">
          <h1>Hi, I'm a Software Engineer</h1>
          <p>Welcome to my portfolio website! I'm passionate about creating innovative software solutions that make a difference. Explore my projects and experience to see how I can contribute to your next venture.</p>
        </div>
      </div>
      <Footprint />
      <Experience />
      <Project />
      <Techstack />
      <Contact />
    </div>
  );
}

export default App;
