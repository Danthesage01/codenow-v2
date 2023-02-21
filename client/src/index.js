import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { theme } from "./themes/defaults";
import AuthAppProvider from "./context/authContext/authContext";
import FeatureProvider from "./context/featureContext/featureContext";
import QuizProvider from "./context/quizContext/quizContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthAppProvider>
      <QuizProvider>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </QuizProvider>
    </AuthAppProvider>
  </React.StrictMode>
);
