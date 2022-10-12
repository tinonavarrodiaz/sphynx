import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Accessibility from './components/accessibility/Accessibility';
import Footer from './components/Footer';
import Header from './components/Header';
import Buy from './pages/buy/Buy';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';
import Story from './pages/story/Story';
import Tequilas from './pages/tequilas/Tequilas';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story" element={<Story />} />
        <Route path="/tequilas" element={<Tequilas />} />
        <Route path="/where-to-buy" element={<Buy />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <Accessibility />
    </BrowserRouter>
  );
}

export default App;
