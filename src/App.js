import Footer from './components/Footer';
import Header from './components/Header';
import './App.css';
import Projects from './sections/Projects';
import About from './sections/About';
import Intro from './sections/Intro';



function App() {
  return (
    <div>
       <Header/>
       <Intro/>
       <About/>
       <Projects/>
     <Footer/>
    
    </div>
    
  );
}

export default App;
