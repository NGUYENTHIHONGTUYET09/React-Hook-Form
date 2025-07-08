// Component này sử dụng react-hook-form để quản lý form và yup để xác thực dữ liệu
// Khi người dùng submit form, dữ liệu sẽ được lưu vào localStorage và chuyển hướng đến trang kết quả
// Các lỗi xác thực sẽ được hiển thị dưới mỗi trường nhập liệu nếu có lỗi
// Giao diện form đơn giản với các trường nhập liệu và nút đăng ký
// Sử dụng useNavigate để điều hướng đến trang kết quả sau khi đăng ký thành công
// Các trường nhập liệu được kết nối với react-hook-form thông qua register
// Các lỗi xác thực được hiển thị dưới mỗi trường nhập liệu nếu có lỗi
// Sử dụng yup để định nghĩa schema xác thực cho form
// Component này có thể được sử dụng trong ứng dụng React để tạo một form đăng ký người dùng
// Khi người dùng điền thông tin và nhấn nút đăng ký, dữ liệu sẽ được lưu vào localStorage
// và chuyển hướng đến trang kết quả để hiển thị thông tin đã đăng ký   
// Component này sử dụng các hook của React như useForm và useNavigate để quản lý trạng thái form và điều hướng
// Sử dụng yup để xác thực dữ liệu nhập vào form, đảm bảo người dùng nhập
// đúng định dạng và không để trống các trường bắt buộc
// Giao diện form được thiết kế đơn giản với các trường nhập liệu và nút đăng
// ký, giúp người dùng dễ dàng điền thông tin
// Khi người dùng submit form, dữ liệu sẽ được lưu vào localStorage để có thể truy
// cập và hiển thị trên trang kết quả
// Các lỗi xác thực sẽ được hiển thị dưới mỗi trường nhập liệu nếu có lỗi,  
// giúp người dùng biết được vấn đề và sửa chữa kịp thời
// Component này có thể được sử dụng trong các ứng dụng React để tạo một form đăng ký
// người dùng, giúp quản lý và xác thực dữ liệu nhập vào một cách hiệu quả
// Sử dụng react-hook-form để quản lý trạng thái form và yup để xác thực dữ liệu
// Khi người dùng điền thông tin và nhấn nút đăng ký, dữ liệu sẽ
// được lưu vào localStorage và chuyển hướng đến trang kết quả
// Các trường nhập liệu được kết nối với react-hook-form thông qua register
// Các lỗi xác thực sẽ được hiển thị dưới mỗi trường nhập liệu nếu có lỗi
// Sử dụng yup để định nghĩa schema xác thực cho form


// cách chạy
Sau khi làm ra dự án thì chạy nó bằng lệnh: 
	npm install react react-dom react-router-dom react-hook-form yup @hookform/resolvers
	npm install react-scripts
	npx react-scripts start
	Sau khi chạy oce thì run bằng -> npm start
 

 // push git 
 Dưới đây là **tổng hợp đầy đủ các bước** để bạn:

> ✅ Tạo nhánh mới
> ✅ Sửa lỗi repo lồng nhau (nếu có)
> ✅ Kết nối remote GitHub
> ✅ Commit & Push code lên GitHub

---

## 🚀 BƯỚC 1: Kiểm tra thư mục và vào đúng project

```bash
cd E:/PNJ_intern_2025/practice_code/Menu_SignUp
```

---

## 🚀 BƯỚC 2: Tạo nhánh mới

```bash
git checkout -b signup
```

📌 `signup` là tên nhánh mới. Bạn có thể thay tên theo mục đích như `feature/signup-form`.

---

## 🚀 BƯỚC 3: Sửa lỗi nếu lỡ clone repo khác vào trong thư mục

Nếu bạn có thư mục con như `React_intern_new` bị git hiểu nhầm là repo con (submodule):

```bash
git rm --cached -r React_intern_new
rm -rf React_intern_new                # Xóa luôn nếu không cần
git commit -m "fix: xóa repo con bị add nhầm"
```

---

## 🚀 BƯỚC 4: Kiểm tra hoặc thêm remote GitHub

```bash
git remote -v         # kiểm tra đã có chưa
```

Nếu chưa có, hãy thêm:

```bash
git remote add origin https://github.com/NGUYENTHIHONGTUYET09/React_intern.git
```

---

## 🚀 BƯỚC 5: Add, commit và push code lên GitHub

```bash
git add .
git commit -m "feat: thêm form đăng ký sử dụng react-hook-form"
git push -u origin signup
```

> `-u` giúp tự động thiết lập theo dõi nhánh `signup` với GitHub remote.

---

## 🧪 BƯỚC 6: Kiểm tra kết quả

1. Truy cập GitHub:
   👉 [https://github.com/NGUYENTHIHONGTUYET09/React\_intern](https://github.com/NGUYENTHIHONGTUYET09/React_intern)

2. Chọn nhánh `signup` ở góc trên trái (`main ⏷` → chọn `signup`)


## ✅ Tổng kết nhanh

| Mục tiêu         | Lệnh                           |
| ---------------- | ------------------------------ |
| Tạo nhánh mới    | `git checkout -b signup`       |
| Thêm file        | `git add .`                    |
| Commit           | `git commit -m "..."`          |
| Push nhánh mới   | `git push -u origin signup`    |
| Thêm remote      | `git remote add origin <URL>`  |
| Sửa lỗi repo con | `git rm --cached -r <thư-mục>` |



----- flow hoạt động: -----
Người dùng mở trang → thấy menu
Chọn “Đăng ký” → nhập form
Form sẽ:
Kiểm tra các trường (bắt buộc, định dạng, độ dài)
Hiển thị lỗi ngay nếu sai 
Nếu đúng → submit → lưu vào localStorage → chuyển sang /result
Trang Result đọc và hiển thị lại dữ liệu đã nhập