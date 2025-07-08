import React from 'react';
import { useForm } from 'react-hook-form'; // Thư viện react-hook-form để quản lý form
import { yupResolver } from '@hookform/resolvers/yup'; // Thư viện yup để xác thực dữ liệu
import * as yup from 'yup'; // Thư viện yup để định nghĩa schema xác thực
// schema dùng để xác thực dữ liệu nhập vào form và đảm bảo rằng người dùng nhập đúng định dạng và yêu cầu cần thiết trước khi gửi form.
import { useNavigate } from 'react-router-dom'; // Thư viện react-router-dom để điều hướng giữa các trang và lấy dữ liệu từ localStorage

const schema = yup.object().shape({ // Định nghĩa schema xác thực với yup
  username: yup.string().required('Vui lòng nhập tên đăng nhập'),
  email: yup.string().email('Email không hợp lệ').required('Vui lòng nhập email'),
  password: yup.string().min(6, 'Mật khẩu tối thiểu 6 ký tự').required('Vui lòng nhập mật khẩu'),
});

function RegisterForm() {
  const navigate = useNavigate(); // Sử dụng useNavigate để điều hướng đến trang kết quả
  const { register, handleSubmit, formState: { errors } } = useForm({ // Sử dụng useForm để quản lý trạng thái form
    // và handleSubmit để xử lý sự kiện gửi form
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    // Lưu dữ liệu vào localStorage để Result page lấy ra hiển thị
    localStorage.setItem('formData', JSON.stringify(data));// Chuyển đổi dữ liệu thành chuỗi JSON và lưu vào localStorage
    navigate('/result'); // chuyển sang trang kết quả
  };

  return ( // Giao diện form đăng ký
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h2> Đăng ký tài khoản</h2>
      <div className="form-group">
        <label>Tên đăng nhập</label>
        <input {...register('username')} /> {/* Sử dụng register để kết nối input với react-hook-form */}
        {errors.username && <p className="error">{errors.username.message}</p>}   {/* Hiển thị lỗi nếu có */}
      </div>
      <div className="form-group">
        <label>Email</label>
        <input {...register('email')} />
        {errors.email && <p className="error">{errors.email.message}</p>}
      </div>
      <div className="form-group">
        <label>Mật khẩu</label>
        <input type="password" {...register('password')} />
        {errors.password && <p className="error">{errors.password.message}</p>}
      </div>
      <button type="submit"><strong>Đăng ký</strong> </button>
    </form>
  );
}

export default RegisterForm; // Xuất component RegisterForm để sử dụng trong các file khác
// Component này sử dụng react-hook-form để quản lý form và yup để xác thực dữ liệu
