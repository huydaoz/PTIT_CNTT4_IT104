import { useEffect } from "react";
export default function Welcome() {
  useEffect(() => {
    console.log("component đã được render lần đầu!");
  }, []);
  return <h2>chào mừng bạn đến với ứng dụng</h2>;
}
