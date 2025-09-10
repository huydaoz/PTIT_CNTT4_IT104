import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Student from "./pages/PTIT_CNTT4_IT104_Session26_EXERCISE02/Student";

import "./App.css";
import Students from "./pages/PTIT_CNTT4_IT104_Session26_EXERCISE03+4/Students";
import PrivateRouter from "./pages/PTIT_CNTT4_IT104_Session26_EXERCISE05+6/PrivateRouter";
import Account from "./pages/PTIT_CNTT4_IT104_Session26_EXERCISE05+6/Account";
import Login from "./pages/PTIT_CNTT4_IT104_Session26_EXERCISE05+6/Login";
import Team from "./pages/PTIT_CNTT4_IT104_Session26_EXERCISE07/Team";
import Teams from "./pages/PTIT_CNTT4_IT104_Session26_EXERCISE07/Teams";
import TeamsIndex from "./pages/PTIT_CNTT4_IT104_Session26_EXERCISE07/TeamsIndex";
import ListProduct from "./pages/PTIT_CNTT4_IT104_Session26_EXERCISE10/ListProduct";
import ProductDetails from "./pages/PTIT_CNTT4_IT104_Session26_EXERCISE01/ProductDetails";
import ProductDetail from "./pages/PTIT_CNTT4_IT104_Session26_EXERCISE10/ProductDetail";
export default function App() {
  const routers = [
    {
      path: "/product/:id",
      element: <ProductDetails />,
    },
    {
      path: "/student/:name",
      element: <Student />,
    },
    {
      path: "/student",
      element: <Students />,
    },
    {
      path: "/account",
      element: <PrivateRouter element={<Account />} />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/teams",
      element: <Teams />,
      children: [
        {
          index: true,
          element: <TeamsIndex />,
        },
        {
          path: "/teams/:teamId",
          element: <Team />,
        },
      ],
    },
    {
      path: "/list-product",
      element: <ListProduct />,
    },
    {
      path: "/product/:id",
      element: <ProductDetail />,
    },
  ];
  return (
    <div>
      <RouterProvider router={createBrowserRouter(routers)} />
    </div>
  );
}
