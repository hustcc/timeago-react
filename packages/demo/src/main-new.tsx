// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { StrictMode } from "react";
import App from "./App.tsx";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root")!;
createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
