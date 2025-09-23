// import Counter from "./components/Counter";
// import RandomList from "./components/RandomList";
// import Theme from "./components/Theme";
// import ViewMode from "./components/ViewMode";
// import Sidebars from "./components/Sidebars";
// import LanguageSwitcher from "./components/LanguageSwitcher";
// import UserList from "./components/UserList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";

export default function App() {
  return (
    <div>
      {/* <Counter /> */}
      {/* <RandomList /> */}
      {/* <Theme /> */}
      {/* <ViewMode /> */}
      {/* <Sidebars /> */}
      {/* <LanguageSwitcher /> */}
      {/* <UserList /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
