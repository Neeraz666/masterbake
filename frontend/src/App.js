// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Nav } from './components/nav'
import { Home } from './components/home';
// import { Footer } from './components/footer'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      < Nav />
      <Routes>
        { <Route path='/' element = {< Home />} />
        /*<Route path='menu/' element = {< Menu />} /> */}
      </Routes>
      {/* < Footer /> */}
    </BrowserRouter>
  );
}

export default App;
