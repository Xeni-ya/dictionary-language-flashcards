import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Dictionary from './pages/dictionary/dictionary';
import Card from './components/card/Card';
import Missing from './components/missing/Missing';
import { observer } from 'mobx-react';
import { WordStoreContext } from './store/store';
import { useContext } from 'react';

const App = observer(() => {
  const store = useContext(WordStoreContext)

  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/cards" element={<Card />} />
            <Route path="/dictionary" element={<Dictionary store={store} />} />
            <Route path="*" element={<Missing />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
});

export default App;
