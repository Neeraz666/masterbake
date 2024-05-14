// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './components/home';
import { Menu } from './components/menu';
import { Footer } from './components/footer'
import { Nav } from './components/nav'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      < Nav />
      <Routes>
        <Route path='/' element = {< Home />} />
        <Route path='menu/' element = {< Menu />} />
      </Routes>
      < Footer />
    </BrowserRouter>
  );
}

export default App;
