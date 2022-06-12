import Radio, { RadioGroup } from "./components/Radio";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";
import { useState } from "react";

function App() {
  const radioList = [
    {
      value: "BTC",
      label: "BTC",
    },
    {
      value: "ETH",
      label: "ETH",
    },
    {
      value: "SOl",
      label: "SOL",
    },
  ];
  const [value, setValue] = useState(radioList[0].value);
  const handleRadioSelect = (value: string) => {
    setValue(value);
  };
  return (
    <ThemeProvider theme={theme.default}>
      <RadioGroup value={value} onChange={(val) => handleRadioSelect(val)}>
        {radioList.map((radio) => (
          <Radio value={radio.value} key={radio.value} label={radio.label} />
        ))}
      </RadioGroup>
    </ThemeProvider>
  );
}

export default App;
