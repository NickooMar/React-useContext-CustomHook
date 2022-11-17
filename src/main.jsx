// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import "./index.css";

// import { ExampleContextProvider } from "./Context/ExampleContextProvider";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <ExampleContextProvider>
//       <App />
//     </ExampleContextProvider>
//   </React.StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { ExampleContextProvider } from "./Context/ExampleContextProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ExampleContextProvider>
      <App />
    </ExampleContextProvider>
  </React.StrictMode>
);
