import './App.css';
import About from './components/About';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Pigeons from './components/Pigeons';

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Achievements/>
      <Pigeons/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
