import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";
import Radio, { RadioGroup } from "./components/Radio";
import { useState } from "react";

function App() {
  const radioList = [
    {
      label: "BTC",
      value: "BTC",
    },
    {
      label: "ETH",
      value: "ETH",
    },
    {
      label: "SOL",
      value: "SOL",
    },
  ];
  const [selectedValue, setSelectedValue] = useState(radioList[0].value);
  return (
    <ThemeProvider theme={theme.default}>
      <RadioGroup
        row
        value={selectedValue}
        onChange={(val) => setSelectedValue(val)}
      >
        {radioList.map((radio) => (
          <Radio value={radio.value} key={radio.value} label={radio.label} />
        ))}
      </RadioGroup>
    </ThemeProvider>
  );
}

export default App;
