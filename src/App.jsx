// import { useState } from 'react'
import './App.css'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Dictionary from './pages/dictionary/dictionary';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Dictionary />
      <Footer />
    </div>
  );
}

export default App;
