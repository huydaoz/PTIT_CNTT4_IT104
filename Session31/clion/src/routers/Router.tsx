import { createBrowserRouter } from "react-router-dom";
import ListPost from "../pages/ListPost.tsx";

export const router = createBrowserRouter([
  {
    path: "/list-post",
    element: <ListPost />,
  },
]);
