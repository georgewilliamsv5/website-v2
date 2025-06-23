/**
 * @copyright 2025 George Lloyd Williams V
 * @license Apache-2.0
 */

/**
 * Node Modules
 */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

/**
 * Components
 */
import App from "./App.tsx";

/**
 * CSS link
 */
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
