import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import App from "./App";
import { clerkKey } from "./lib/config";
import { initTheme } from "./lib/theme";
import "./index.css";

initTheme();
const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {clerkKey ? (
      <ClerkProvider publishableKey={clerkKey} appearance={{ variables: { colorPrimary: "#2D336B", borderRadius: "0.75rem" } }}>
        {app}
      </ClerkProvider>
    ) : app}
  </React.StrictMode>,
);
