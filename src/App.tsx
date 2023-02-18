import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@emotion/react";
import { lightTheme } from "./themes";
import { Routing } from "./routes/Routing";
import { AuthProvider } from "./context";
import "./App.css";
import { Suspense } from "react";
import { FullScreenLoader } from "./components/ui";

function App() {
  return (
    <Suspense fallback={<h1>Cargando</h1>}>
      <AuthProvider>
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          <Routing />
        </ThemeProvider>
      </AuthProvider>
    </Suspense>
  );
}

export default App;
