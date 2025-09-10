import { useParams } from "react-router-dom";

export default function Team() {
  const { teamId } = useParams();
  return (
    <div>
      <h3>{teamId}</h3>
    </div>
  );
}
