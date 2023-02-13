import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@emotion/react";
import { lightTheme } from "./themes";
import { Routing } from "./routes/Routing";
import { AuthProvider } from "./context";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Routing />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
