import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

// pages
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
