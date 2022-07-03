import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";
import { useState } from "react";
import Tabs, { TabPanel, TabContext } from "./components/Tabs";

function App() {
  const options = [
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
  const [selectedValue, setSelectedValue] = useState(options[0].value);
  return (
    <ThemeProvider theme={theme.default}>
      <TabContext value={selectedValue}>
        <Tabs
          options={options}
          value={selectedValue}
          onChange={(value) => setSelectedValue(value)}
          gap={48}
        />
        <TabPanel value="BTC">
          <div>BTC Content</div>
        </TabPanel>
        <TabPanel value="ETH">
          <div>ETH Content</div>
        </TabPanel>
        <TabPanel value="SOL">
          <div>SOL Content</div>
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}

export default App;
