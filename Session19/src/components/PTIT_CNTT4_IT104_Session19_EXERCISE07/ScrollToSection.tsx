import { useRef } from "react";

export default function ScrollToSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <button
        onClick={handleScroll}
        style={{
          margin: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Đi tới phần nội dung
      </button>

      <div style={{ height: "1000px", background: "#f0f0f0" }}>
        <p style={{ padding: "20px" }}>
          Đây là phần nội dung dài giả lập để bạn cuộn xuống dưới. Kéo chuột
          hoặc bấm nút để tới phần mục tiêu bên dưới.
        </p>
      </div>

      <div
        ref={sectionRef}
        style={{
          height: "300px",
          background: "#90caf9",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        Đây là phần mục tiêu
      </div>
    </div>
  );
}
