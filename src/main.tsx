import { createRoot } from "react-dom/client";
import "./styles/index.css";
import "./styles/fonts.css";
import MainCard from "./components/MainCard/Main.card.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainCard />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />,
);
