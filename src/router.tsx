import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Details from "./routes/Details";
import Home from "./routes/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/character/:id",
        element: <Details />,
      },
    ],
  },
]);

export default router;
