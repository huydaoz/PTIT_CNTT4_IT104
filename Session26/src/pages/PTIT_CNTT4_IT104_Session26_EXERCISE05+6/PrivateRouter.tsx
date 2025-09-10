import { Navigate } from "react-router-dom";

export default function PrivateRouter(props: { element: React.ReactElement }) {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return props.element;
}
