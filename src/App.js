import './App.css';
import About from './components/About';
import Achievements from './components/Achievements';
import Header from './components/Header';
import Pigeons from './components/Pigeons';

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Achievements/>
      <Pigeons/>
    </div>
  );
}

export default App;
