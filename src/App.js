
import './App.scss';
import Header from './Component/Header';
import Main from './Component/Main';
import About from './Component/About';
import Skill from './Component/Skill';
import Projects from './Component/Projects';
import Contact from './Component/Contact';
import Footer from './Component/Footer';

function App() {
  return (
    <>
   <Header/>
    <main>
   <Main/>
   <About/>
   <Skill/>
   <Projects/>
   <Contact/>
   <Footer/>
  </main>
  </>
  )
}

export default App;
