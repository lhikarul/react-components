import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";
import Radio, { RadioGroup } from "./components/Radio";
import { useState } from "react";

function App() {
  const list = [
    {
      value: "BTC",
      label: "BTC",
    },
    {
      value: "ETH",
      label: "ETH",
    },
    {
      value: "SOL",
      label: "SOL",
    },
  ];
  const [value, setValue] = useState(list[0]?.value);
  return (
    <ThemeProvider theme={theme.default}>
      <RadioGroup value={value} onChange={(val) => setValue(val)}>
        {list.map((item) => (
          <Radio value={item.value} label={item.label} key={item.value} />
        ))}
      </RadioGroup>
    </ThemeProvider>
  );
}

export default App;
