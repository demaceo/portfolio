import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App"; // Updated import to match the new structure
import reportWebVitals from "./reportWebVitals";
import RouterProvider from "./RouterProvider";
import { Analytics } from "@vercel/analytics/react";

window.dataLayer = window.dataLayer || [];
function gtag() {
  window.dataLayer.push(arguments);
}
gtag("js", new Date());
gtag("config", "G-M3BBBKLMKF");

// Ensure root element exists before rendering
const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <RouterProvider>
        <App />
        <Analytics />
      </RouterProvider>
    </React.StrictMode>
  );
}

// Measure performance (optional, can be removed if not needed)
reportWebVitals();
