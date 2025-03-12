import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Application from "./App.jsx";
import Home from "./pages/Home.jsx";
import Register from "./pages/Register.jsx";
import Customers from "./components/Customers.jsx";
import Deals from "./components/Deals.jsx";
import Notes from "./components/Notes.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

const router = createBrowserRouter([
  {
    path: "/api",
    element: <Application />,
    children: [
      {
        path: "home",
        element: <Home />,
        children: [
          { index: true, element: <Navigate to="customers" replace /> },
          {
            path: "customers",
            element: <Customers />,
          },
          { path: "deals", element: <Deals /> },
          { path: "notes", element: <Notes /> },
        ],
      },
      { path: "register", element: <Register /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
