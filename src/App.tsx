import Button from "./components/Button";
import SearchIcon from "./Icons/Search";
import Switch from "./components/Switch";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme.default}>
      <Switch
        themeColor="primary"
        onChange={(checked) => console.log("checked ", checked)}
      />
    </ThemeProvider>
  );
}

export default App;
