
import './App.css';
import About from './Component/About';
import Hero from './Component/Hero';
import Navbar from './Component/Navbar';
import Skill from './Component/Skills';


function App() {
  return (
  <div className="contaninerHome">
  
  <Navbar/>
  <Hero/>
  <About/>
  <Skill/>
  
  </div>
  
  )
}

export default App;
