import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import { DarkModeContextProvider } from "./context/DarkModeContext";
import { ChakraProvider } from "@chakra-ui/react";

// TODO: refactoring ok - add comments later 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DarkModeContextProvider>
    <AuthContextProvider>
      <BrowserRouter>
      <ChakraProvider>
        <App/>
      </ChakraProvider>
      </BrowserRouter>
    </AuthContextProvider>
    </DarkModeContextProvider>
  </React.StrictMode>
);
