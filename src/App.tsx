import { ThemeProvider } from "@emotion/react";
import { useEffect, useState } from "react";
import SimpleVirtualizedList from "./components/SimpleVirtualizedList";
import { theme } from "./theme";

const ITEM_COUNT = 500;

function App() {
  const [items, setItems] = useState<{ index: number; name: string }[]>([]);

  useEffect(() => {
    setItems(
      new Array(ITEM_COUNT)
        .fill(null)
        .map((_, i) => ({ index: i, name: `Item ${i}` }))
    );
  }, []);
  return (
    <ThemeProvider theme={theme.default}>
      <SimpleVirtualizedList
        itemCount={items.length}
        itemHeight={40}
        windowHeight={400}
        renderItem={({ index, style }) => {
          const i = items[index];
          return (
            <div key={i.name} className="item" style={style}>
              <label>{i.name}</label>
            </div>
          );
        }}
      />
    </ThemeProvider>
  );
}

export default App;
