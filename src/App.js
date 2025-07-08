import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Thư viện quản lý định tuyến
import Menu from './components/Menu'; // Thẻ điều hướng menu
import RegisterForm from './pages/RegisterForm'; // Trang đăng ký
import Result from './pages/Result'; // Trang kết quả hiển thị thông tin đã đăng ký
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

export default App; // Component App là thành phần chính của ứng dụng, quản lý các route và hiển thị menu
// Nó sử dụng react-router-dom để định tuyến giữa các trang đăng ký và kết quả
