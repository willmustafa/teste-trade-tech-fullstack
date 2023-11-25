import { createBrowserRouter } from "react-router-dom";
import LoginView from "../pages/Login";
import Results from "../pages/Results";
import Historic from "../pages/Historic";
import Main from "layout/Main";
import LayoutDashboard from "layout/LayoutDashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "",
        element: <LoginView />
      },
    ]
  },
  {
    path: "/app",
    element: <LayoutDashboard />,
    children: [
      {
        path: "",
        element: <Results />,
      },
      {
        path: "historico",
        element: <Historic />,
      },
    ],
  },
]);

export default router;
