import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import RegisterForm from './pages/RegisterForm';
import Result from './pages/Result';
import './App.css';

function App() {
  return (
    <div className="App">
      <Menu />
      <div className="container">
        <Routes>
          <Route path="/" element={<RegisterForm />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
