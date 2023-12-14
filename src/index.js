import React from "react";
import ReactDOM from "react-dom/client";
import "@radix-ui/themes/styles.css";

import { Theme } from "@radix-ui/themes";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Theme
      appearance="light"
      accentColor="brown"
      scaling="100%"
      panelBackground="solid"
      radius="small"
    >
      <App />
    </Theme>
  </React.StrictMode>
);
