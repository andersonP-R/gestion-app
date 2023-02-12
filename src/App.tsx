import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@emotion/react";
import { lightTheme } from "./themes";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <h1>hola</h1>
    </ThemeProvider>
  );
}

export default App;
