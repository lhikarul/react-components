import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";
import Accordion from "./components/Accordion";

function App() {
  const dummyDataSource = [
    {
      content: "content 1",
    },
    {
      content: "content 2",
    },
    {
      content: "content 3",
    },
    {
      content: "content 4",
    },
  ];
  return (
    <ThemeProvider theme={theme.default}>
      <Accordion onChange={(value) => console.log("value ", value)}>
        {dummyDataSource.map((item, index) => (
          <Accordion.Panel header={<div>header</div>} key={index}>
            <div>{item.content}</div>
          </Accordion.Panel>
        ))}
      </Accordion>
    </ThemeProvider>
  );
}

export default App;
