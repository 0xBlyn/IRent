import Header from './components/Header';
import './App.css';
import Searchbar from './components/Searchbar';
import Home from './components/Home';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Terms from './components/Terms';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Searchbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms_and_conditions" element={<Terms />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
