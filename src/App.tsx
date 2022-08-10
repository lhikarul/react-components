import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";
import Autocomplete from "./components/AutoComplete";

function App() {
  return (
    <ThemeProvider theme={theme.default}>
      <Autocomplete
        placeholder="please enter an crypto currency"
        options={["BTC", "ETH", "SOL", "AVAX", "NEAR", "BNB", "FTT"]}
      />
    </ThemeProvider>
  );
}

export default App;
