import Contact from "./pages/PTIT_CNTT4_IT104_Session25_EXERCISE01+2/Contact";
import Home from "./pages/PTIT_CNTT4_IT104_Session25_EXERCISE01+2/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Logins from "./pages/PTIT_CNTT4_IT104_Session25_EXERCISE03/Logins";
import Registers from "./pages/PTIT_CNTT4_IT104_Session25_EXERCISE04/Registers";
import Found from "./pages/PTIT_CNTT4_IT104_Session25_EXERCISE05/Found";
import Homes from "./pages/PTIT_CNTT4_IT104_Session25_EXERCISE06/Homes";
import Detail from "./pages/PTIT_CNTT4_IT104_Session25_EXERCISE06/Detail";
import Product from "./pages/PTIT_CNTT4_IT104_Session25_EXERCISE06/Product";
import "./App.css";
import HomePage from "./pages/PTIT_CNTT4_IT104_Session25_EXERCISE07/HomePage";
import CustomLink from "./pages/PTIT_CNTT4_IT104_Session25_EXERCISE07/CustomLink";
import NotFound from "./pages/PTIT_CNTT4_IT104_Session25_EXERCISE07/NotFound";
import ListUser from "./pages/PTIT_CNTT4_IT104_Session25_EXERCISE08/ListUser";
import UserDetail from "./pages/PTIT_CNTT4_IT104_Session25_EXERCISE08/UserDetail";
import Login from "./pages/PTIT_CNTT4_IT104_Session25_EXERCISE09/Login";
import Register from "./pages/PTIT_CNTT4_IT104_Session25_EXERCISE09/Register";

export default function App() {
  const routers = [
    { path: "/", element: <Home /> },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/logins",
      element: <Logins />,
    },
    {
      path: "/registers",
      element: <Registers />,
    },
    {
      path: "*",
      element: <Found />,
    },
    {
      path: "www",
      element: <Homes />,
      children: [
        {
          path: "home",
          element: <Home />,
        },
        { path: "detail", element: <Detail /> },
        {
          path: "product",
          element: <Product />,
        },
      ],
    },
    {
      path: "/home-page",
      element: <HomePage />,
    },
    {
      path: "/CustomLink",
      element: <CustomLink />,
    },
    {
      path: "/NotFound",
      element: <NotFound />,
    },
    {
      path: "/ListUser",
      element: <ListUser />,
    },
    {
      path: "/user/:id",
      element: <UserDetail />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ];
  return (
    <div>
      <RouterProvider router={createBrowserRouter(routers)} />
    </div>
  );
}
