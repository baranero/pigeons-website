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
      {/* <Achievements/> */}
      <Pigeons/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

{/* <a href="https://www.freepik.com/free-photo/seagulls-birds-fly-blue-sky_9129605.htm#page=3&query=pigeons&position=17&from_view=search&track=sph">Image by devmaryna</a> on Freepik */}