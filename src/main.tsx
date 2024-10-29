import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { inputGlobalStyles } from "./globalStyles";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {inputGlobalStyles}
    <App />
  </StrictMode>
);
