import { ThemeProvider } from "@emotion/react";
import useWindowScroll from "./hooks/useWindowScroll";

import { theme } from "./theme";

function App() {
  const { x, y } = useWindowScroll();
  return (
    <ThemeProvider theme={theme.default}>
      <div>
        <div>x: {x}</div>
        <div>y: {y}</div>
      </div>
    </ThemeProvider>
  );
}

export default App;
