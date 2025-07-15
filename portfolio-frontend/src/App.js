import './App.css';
import Projects from './projects';
import Skills from './Skills';
import Contact from './Contact';


function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>My Portfolio</h1>
        <Projects />
        <Skills />
        <Contact />
      </header>
    </div>
  );
}

export default App;
