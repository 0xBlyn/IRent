import Header from './components/Header';
import './App.css';
import Searchbar from './components/Searchbar';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Searchbar />
      <Home />
    </div>
  );
}

export default App;
