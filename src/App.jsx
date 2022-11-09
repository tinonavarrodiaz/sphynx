import { useState, useEffect } from 'react';
import AOS from 'aos';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Accessibility from './components/accessibility/Accessibility';
import Footer from './components/Footer';
import Header from './components/Header';
import Buy from './pages/buy/Buy';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';
import Story from './pages/story/Story';
import Tequilas from './pages/tequilas/Tequilas';
import Privacy from './pages/Privacy';
import Cookie from './pages/Cookie';
import Catalogue from './pages/Catalogue2';

const ageGate = () => {
  const modalAge = document.createElement('div');
  console.log(modalAge);
  modalAge.className = 'modal-age';
  modalAge.innerHTML = `
    <div class="modal-age__container">
      <img src="/img/logo.svg" alt="logo">
      <p>You must be of legal drinking age according to your country
of residence to visit this site. By accesing you agree to
our privacy policy and use of cookies.</p>
      <button>Enter</button>
    </div>
  `;
  document.body.style = 'overflow: hidden;';
  document.body.appendChild(modalAge);
  const btn = modalAge.querySelector('button');
  btn.addEventListener('click', () => {
    sessionStorage.setItem('access', true);
    const video = document.querySelector('video');
    video ? video.play() : null;
    document.body.style = 'overflow-Y: auto;';
    modalAge.remove();
  });
};
function App() {
  // const [count, setCount] = useState(0);
  useEffect(() => {
    AOS.init({
      startEvent: 'load',
      easing: 'ease-out-back',
      duration: 850,
      // startEvent: 'DOMContentLoaded',
      useClassNames: true,
      // once: true,
    });
    const access = sessionStorage.getItem('access');
    // console.log(access);
    !access ? ageGate() : null;
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/story" element={<Story />} />
          <Route path="/tequilas" element={<Tequilas />} />
          <Route path="/where-to-buy" element={<Buy />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/cookie-policy" element={<Cookie />} />
        </Routes>
      </main>
      <Footer />
      <Accessibility />
    </BrowserRouter>
  );
}

export default App;
