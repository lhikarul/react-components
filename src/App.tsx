import { ThemeProvider } from "@emotion/react";
import useWindowSize from "./hooks/useWindowSize";
import { theme } from "./theme";

function App() {
  const { width, height } = useWindowSize();
  return (
    <ThemeProvider theme={theme.default}>
      <div>
        <div>width: {width}</div>
        <div>height: {height}</div>
      </div>
    </ThemeProvider>
  );
}

export default App;
