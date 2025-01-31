import './App.css'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Dictionary from './pages/dictionary/dictionary';
import Card from './components/card/Card';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Home />
        <Dictionary />
        <Card />
      </main>
      <Footer />
    </div>
  );
}

export default App;
