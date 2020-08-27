import React from "react";
import ReactDOM from "react-dom";
import Theme from "@quarkly/theme";

import QRCodeComponent from "./MyComponent";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Theme>
      <QRCodeComponent />
    </Theme>
  </React.StrictMode>,
  rootElement
);
