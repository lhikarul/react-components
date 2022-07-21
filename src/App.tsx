import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";
import Dropwdown from "./components/Dropdown";
import { useState } from "react";
import useInterval from "./hooks/useInterval";

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [count, setCount] = useState(0);
  const [delay, setDelay] = useState(1000);
  const [isRunning, toggleIsRunning] = useState(false);

  useInterval(
    () => {
      setCount(count + 1);
    },
    isRunning ? delay : null
  );

  return (
    <div>
      <div>
        delay:{" "}
        <input
          value={delay}
          onChange={(event) => setDelay(Number(event.target.value))}
        />
      </div>
      <h1>count: {count}</h1>
      <div>
        <button onClick={() => toggleIsRunning((val) => !val)}>
          {isRunning ? "stop" : "start"}
        </button>
      </div>
    </div>

    // <ThemeProvider theme={theme.default}>
    //   <Dropwdown
    //     isOpen={isOpen}
    //     onClick={() => setIsOpen(true)}
    //     onClose={() => setIsOpen(false)}
    //     overlay={<div>content</div>}
    //   >
    //     <div>title</div>
    //   </Dropwdown>
    // </ThemeProvider>
  );
}

export default App;
