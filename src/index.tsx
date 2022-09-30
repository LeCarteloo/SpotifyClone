import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import App from "./App";
import MainMockup from "./assets/mockup-main6.png";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <img
      src={MainMockup}
      alt="Mockup"
      style={{
        position: "absolute",
        width: "auto",
        height: "100%",
        opacity: 0.5,
        userSelect: "none",
        pointerEvents: "none",
        zIndex: "99",
        display: "none",
      }}
    />
    <App />
  </React.StrictMode>
);

reportWebVitals();
