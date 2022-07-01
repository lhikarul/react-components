import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";
import Skelton from "./components/Skelton";

function App() {
  return (
    <ThemeProvider theme={theme.default}>
      <Skelton width={200} height={20} style={{ marginBottom: 6 }} />
      <Skelton variant="rectangular" style={{ marginBottom: 6 }} />
      <Skelton
        width={100}
        height={100}
        variant="circular"
        style={{ marginBottom: 6 }}
      />
    </ThemeProvider>
  );
}

export default App;
