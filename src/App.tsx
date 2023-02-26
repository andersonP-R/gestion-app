import { Suspense } from "react";
import { ThemeProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { lightTheme } from "./themes";
import { Routing } from "./routes/Routing";
import { AuthProvider, ClientProvider } from "./context";
import { FullScreenLoader } from "./components/ui";
import "./App.css";

function App() {
  return (
    <Suspense fallback={<FullScreenLoader />}>
      <AuthProvider>
        <ClientProvider>
          <ThemeProvider theme={lightTheme}>
            <CssBaseline />
            <Routing />
          </ThemeProvider>
        </ClientProvider>
      </AuthProvider>
    </Suspense>
  );
}

export default App;
