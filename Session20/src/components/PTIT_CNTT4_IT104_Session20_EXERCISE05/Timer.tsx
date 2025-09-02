import { useState, useEffect } from "react";

export default function Timer() {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h3>Bộ đếm thời gian hẹ hẹ</h3>
      <p>Thời gian đã trôi qua hẹ hẹ: {count} giây</p>
    </div>
  );
}
