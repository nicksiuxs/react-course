import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import FirstApp from "./FisrtApp.jsx";
import "./styles.css";
import CounterApp from "./CounterApp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CounterApp value={10} />
  </StrictMode>
);
