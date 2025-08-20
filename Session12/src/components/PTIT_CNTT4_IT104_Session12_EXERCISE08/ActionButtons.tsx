interface ActionButtonsProps {
  onEdit: () => void;
  onDelete: () => void;
}

export default function ActionButtons({
  onEdit,
  onDelete,
}: ActionButtonsProps) {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <button
        style={{
          backgroundColor: "#f1f1f1",
          border: "1px solid #ccc",
          borderRadius: "4px",
          padding: "5px 10px",
          cursor: "pointer",
        }}
        onClick={onEdit}
      >
        Sửa
      </button>
      <button
        style={{
          backgroundColor: "red",
          color: "white",
          border: "none",
          borderRadius: "4px",
          padding: "5px 10px",
          cursor: "pointer",
        }}
        onClick={onDelete}
      >
        Xóa
      </button>
    </div>
  );
}
