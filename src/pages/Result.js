import React from 'react';

function Result() {
  const data = JSON.parse(localStorage.getItem('formData'));

  if (!data) {
    return <div>Không có dữ liệu. Vui lòng đăng ký trước.</div>;
  }

  return (
    <div className="result">
      <h2>Thông tin đã đăng ký</h2>
      <ul>
        <li><strong>Tên đăng nhập:</strong> {data.username}</li>
        <li><strong>Email:</strong> {data.email}</li>
        <li><strong>Mật khẩu:</strong> {data.password}</li>
      </ul>
    </div>
  );
}

export default Result;
