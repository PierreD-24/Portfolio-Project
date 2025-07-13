import './App.css';
import Projects from './projects';
import Skills from './Skills';


function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>My Portfolio</h1>
        <Projects />
        <Skills />
      </header>
    </div>
  );
}

export default App;
