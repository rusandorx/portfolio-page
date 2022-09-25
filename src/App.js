import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/navbar/Navbar'
import { Home } from './components/home/Home'
import { Skills } from './components/skills/Skills'
import { Projects } from './components/projects/Projects'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Skills/>
      <Projects/>
    </div>
  );
}

export default App;
