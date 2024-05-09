// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './components/home';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {< Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
