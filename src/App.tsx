import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";
import TextField from "./components/TextField";
import { useState } from "react";
import SearchSvg from "./Icons/Search";

function App() {
  const [value, setValue] = useState("");
  return (
    <ThemeProvider theme={theme.default}>
      <TextField
        prefix={<SearchSvg />}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </ThemeProvider>
  );
}

export default App;
