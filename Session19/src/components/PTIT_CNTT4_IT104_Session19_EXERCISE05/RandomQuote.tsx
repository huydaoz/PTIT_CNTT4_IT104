import { useState } from "react";

export default function RandomQuote() {
  const quotes: string[] = [
    "Học, học nữa, học mãi.",
    "Thất bại là mẹ thành công.",
    "Không gì là không thể.",
    "Kiến tha lâu đầy tổ.",
    "Muốn đi nhanh hãy đi một mình, muốn đi xa hãy đi cùng nhau.",
  ];

  const [quote, setQuote] = useState<string>("");

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div>
      <h2>Random</h2>
      <p>{quote}</p>
      <button onClick={getRandomQuote}>Lấy câu nói mới</button>
    </div>
  );
}
