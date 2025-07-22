import './App.css';
import ProjectShowcase from './ProjectShowcase';
import Skills from './Skills';
import Contact from './Contact';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function App() {
  return (
    <div className='App'>
      <header className='hero-section'>
        <div className='hero-content'>
          <h1>Pierre Dahrouj</h1>
          <h2>Full Stack Developer</h2>
          <p>Building modern web applications with C# and React</p>
        </div>
      </header>

      <main className="main-content">
        <section id="projects" className='section'>
          <ProjectShowcase />
        </section>

        <section id="skills" className='section'>
          <Skills />
        </section>

        <section id="contact" className="section">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
