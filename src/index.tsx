import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/App";
import mockResponse from "./mock/mock-data";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App mockResponse={mockResponse} />
  </React.StrictMode>
);
