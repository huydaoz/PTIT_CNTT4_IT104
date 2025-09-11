import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./components/PTIT_CNTT4_IT104_Session27_EXERCISE01/Home";
import About from "./components/PTIT_CNTT4_IT104_Session27_EXERCISE01/About";
import Contact from "./components/PTIT_CNTT4_IT104_Session27_EXERCISE01/Contact";
import Nav from "./components/PTIT_CNTT4_IT104_Session27_EXERCISE01/Nav";
import ListProduct from "./components/PTIT_CNTT4_IT104_Session27_EXERCISE02/ListProduct";
import ProductDetail from "./components/PTIT_CNTT4_IT104_Session27_EXERCISE02/ProductDetail";
import TaskList from "./components/PTIT_CNTT4_IT104_Session27_EXERCISE03/TaskList";
import TaskDetail from "./components/PTIT_CNTT4_IT104_Session27_EXERCISE03/TaskDetail";
import ProductList from "./components/PTIT_CNTT4_IT104_Session27_EXERCISE04/ProductList";
import BlogLayout from "./components/PTIT_CNTT4_IT104_Session27_EXERCISE05/BlogLayout";
import Posts from "./components/PTIT_CNTT4_IT104_Session27_EXERCISE05/Posts";
import PostDetail from "./components/PTIT_CNTT4_IT104_Session27_EXERCISE05/PostDetail";
import Homes from "./components/PTIT_CNTT4_IT104_Session27_EXERCISE06/Homes";
import Detail from "./components/PTIT_CNTT4_IT104_Session27_EXERCISE06/Detail";
import Product from "./components/PTIT_CNTT4_IT104_Session27_EXERCISE06/Product";
import Homee from "./components/PTIT_CNTT4_IT104_Session27_EXERCISE07/Homee";
import Aboutt from "./components/PTIT_CNTT4_IT104_Session27_EXERCISE07/Aboutt";
import NotFound from "./components/PTIT_CNTT4_IT104_Session27_EXERCISE07/NotFound";

export default function App() {
  const routers = [
    {
      path: "",
      element: <Nav />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
    {
      path: "/product",
      element: <ListProduct />,
    },
    {
      path: "/product/:id",
      element: <ProductDetail />,
    },
    {
      path: "/task",
      element: <TaskList />,
    },
    {
      path: "/task/:id",
      element: <TaskDetail />,
    },
    {
      path: "/product-list",
      element: <ProductList />,
    },
    {
      path: "/product-list/:id",
      element: <ProductList />,
    },
    {
      path: "/blog",
      element: <BlogLayout />,
      children: [
        {
          path: "posts",
          element: <Posts />,
        },
        {
          path: "posts/:id",
          element: <PostDetail />,
        },
      ],
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
      path: "homee",
      element: <Homee />,
    },
    {
      path: "/aboutt",
      element: <Aboutt />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ];
  return (
    <div>
      <RouterProvider router={createBrowserRouter(routers)} />
    </div>
  );
}
