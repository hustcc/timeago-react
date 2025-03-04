// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { StrictMode } from "react";
import App from "./App.tsx";
import { render } from "react-dom";

const container = document.getElementById("root")!;
render(
  <StrictMode>
    <App />
  </StrictMode>,
  container,
);
