export interface Post {
  id: number;
  title: string;
  excerpt: string;
  content: string;
}

export const posts: Post[] = [
  {
    id: 1,
    title: "Bắt đầu với React",
    excerpt: "Giới thiệu về React và cách khởi tạo dự án",
    content:
      "React là một thư viện JavaScript mạnh mẽ để xây dựng giao diện người dùng. Nó cho phép bạn chia UI thành các component có thể tái sử dụng. React sử dụng Virtual DOM để tối ưu hóa việc cập nhật giao diện. Đây là công cụ phổ biến trong phát triển web hiện đại.",
  },
  {
    id: 2,
    title: "Sử dụng TailwindCSS",
    excerpt: "Tailwind giúp bạn viết CSS nhanh và tiện lợi",
    content:
      "TailwindCSS là một framework CSS tiện lợi, cung cấp các class sẵn có để xây dựng UI. Thay vì viết CSS thủ công, bạn có thể kết hợp class ngay trong HTML hoặc JSX. Điều này giúp tăng tốc phát triển và giữ cho mã ngắn gọn, dễ bảo trì.",
  },
  {
    id: 3,
    title: "Giới thiệu về React Router",
    excerpt: "Hướng dẫn tạo route và chuyển trang với React Router",
    content:
      "React Router là một thư viện phổ biến để xử lý điều hướng trong ứng dụng React. Nó cho phép bạn định nghĩa nhiều route và liên kết chúng với các component. Với React Router, bạn có thể tạo SPA (Single Page Application) mà vẫn có nhiều trang hiển thị.",
  },
  {
    id: 4,
    title: "Quản lý state với Redux",
    excerpt: "Redux giúp quản lý state tập trung",
    content:
      "Redux là một thư viện quản lý state cho các ứng dụng JavaScript. Nó lưu toàn bộ state trong một store duy nhất. Redux giúp đồng bộ dữ liệu giữa các component dễ dàng hơn. Đây là lựa chọn tốt cho ứng dụng lớn cần quản lý nhiều dữ liệu.",
  },
  {
    id: 5,
    title: "Hooks trong React",
    excerpt: "useState, useEffect và các hook phổ biến",
    content:
      "Hooks được giới thiệu từ React 16.8, giúp bạn dùng state và lifecycle trong function component. useState dùng để quản lý state, useEffect dùng cho side effect. Ngoài ra còn nhiều hook khác như useContext, useReducer, rất hữu ích.",
  },
];
