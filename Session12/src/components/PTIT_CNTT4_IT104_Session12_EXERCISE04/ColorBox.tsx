interface ColorBoxProps {
  color: string;
}

function ColorBox({ color }: ColorBoxProps) {
  return (
    <div
      style={{
        width: "200px",
        height: "200px",
        backgroundColor: color,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      Box
    </div>
  );
}

export default ColorBox;
