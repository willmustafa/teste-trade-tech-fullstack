import { createBrowserRouter } from "react-router-dom";
import LoginView from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Results from "../pages/Results";
import Historic from "../pages/Historic";
import Main from "layout/Main";

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
    element: <Main />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "resultados",
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
