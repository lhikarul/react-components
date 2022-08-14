import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";
import { useState } from "react";
import PokemonList from "./containers/PokemonList";

function App() {
  const [offset, setOffset] = useState<number>(0);
  return (
    <ThemeProvider theme={theme.default}>
      <h3>Pokemon List</h3>
      <button onClick={() => setOffset(offset === 0 ? 20 : 0)}>
        Change Offset
      </button>
      <PokemonList offset={offset} />
    </ThemeProvider>
  );
}

export default App;
