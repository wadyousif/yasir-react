import './App.css';
import Header from './Component/Header';
import Home from './Component/Home';
import Contact from './Component/Contact';
import About from './Component/About';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Home/>
        <About/>
        <Contact/> 
      </header>
    </div>
  );
}

export default App;
