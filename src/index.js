/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "theme-ui";
import Button from "./Button";
import "./styles.css";

const theme = {
  fonts: {
    body: "system-ui, sans-serif",
    heading: '"Avenir Next", sans-serif',
    monospace: "Menlo, monospace"
  },
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#33e"
  }
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div sx={{ color: "primary", fontFamily: "body" }} className="App">
        <p>Hello CodeSandbox</p>
        <h2>Start editing to see some magic happen!</h2>
        <Button>Yo</Button>
      </div>
    </ThemeProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
