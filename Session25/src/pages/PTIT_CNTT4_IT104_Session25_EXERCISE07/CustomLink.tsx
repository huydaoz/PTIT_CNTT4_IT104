import { Link } from "react-router-dom";
export default function CustomLink() {
  const check = "/home-page";

  const isValid = check === "/home-page";
  return (
    <div>
      <Link to={isValid ? "/home-page" : "/NotFound"}>Go to Home</Link>
    </div>
  );
}
