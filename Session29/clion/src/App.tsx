import GetAllProduct from "./components/GetAllProduct";
import GetAllStudents from "./components/GetAllStudents";
import DisplayStudent from "./components/DisplayStudent";
import GetStudentById from "./components/GetStudentById";
import CreateStudent from "./components/createStudent";

export default function App() {
  return (
    <div>
      <GetAllProduct />
      <GetAllStudents />
      <DisplayStudent />
      <GetStudentById />
      <CreateStudent />
    </div>
  );
}
