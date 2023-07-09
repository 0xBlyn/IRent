import Header from './components/Header';
import './App.css';
import Searchbar from './components/Searchbar';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Searchbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
