import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Jobs from './components/Jobs';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/jobs" element={<Jobs />}  />
    </Routes>
    </>
  )
}

export default App;
