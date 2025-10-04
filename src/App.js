import Footer from './components/Footer';
import Header from './components/Header';
import './App.css';
import Projects from './sections/Projects';
import About from './sections/About';
import Intro from './sections/Intro';
import Skills from './sections/Skills';
import Contact from './sections/Contact';



function App() {
  return (
    <div>
       <Header/>
       <Intro/>
       <About/>
       <Projects/>
       <Skills/>
       <Contact/>
     <Footer/>
    
    </div>
    
  );
}

export default App;
