import Header from "./Header";
import Menu from "./Menu";
import Main from "./Main";
import Footer from "./Footer";

export default function AdminIndex() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header />
      <div style={{ display: "flex", flex: 1 }}>
        <Menu />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            margin: "20px",
          }}
        >
          <Main />
          <Footer />
        </div>
      </div>
    </div>
  );
}
