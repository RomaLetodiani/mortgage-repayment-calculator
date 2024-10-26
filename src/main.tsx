import { createRoot } from "react-dom/client";
import "./styles/index.css";
import "./styles/fonts.css";
import MainCard from "./components/MainCard/Main.card.tsx";

createRoot(document.getElementById("root")!).render(<MainCard />);
