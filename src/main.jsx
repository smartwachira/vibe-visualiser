import React from "react"; // import React library
import { createRoot } from "react-dom/client"; // import createRoot from react-dom/client package
import App from "./App";
import "./styles.css";

createRoot(document.getElementById("root")).render(<App />); //createRoot method to render the App component into the root element in the HTML document