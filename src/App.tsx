import { Suspense } from "react";
import { ThemeProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { lightTheme } from "./themes";
import { Routing } from "./routes/Routing";
import { AuthProvider } from "./context";
import { FullScreenLoader } from "./components/ui";
import "./App.css";

function App() {
  return (
    <Suspense fallback={<FullScreenLoader />}>
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
