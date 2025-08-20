import Cart from "./Cart";

export default function Main() {
  return (
    <main
      style={{
        flex: 1,
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "10px",
        backgroundColor: "#ffeeee",
        padding: "20px",
      }}
    >
      {Array.from({ length: 12 }).map((_, index) => (
        <Cart key={index} />
      ))}
    </main>
  );
}
