import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Page/HomePage/HomePage';
import Layout from './Layout/Layout';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout Component={HomePage} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
