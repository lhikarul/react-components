import Radio, { RadioGroup } from "./components/Radio";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";
import { useState } from "react";
import { toastMessage } from "./components/Toast";
import Button from "./components/Button";

function App() {
  const [value, setValue] = useState(0);
  const handleOnClick = () => {
    setValue(value + 1);
    toastMessage.success({
      content: `${value}`,
    });
  };
  return (
    <ThemeProvider theme={theme.default}>
      <Button
        onClick={handleOnClick}
        // onClick={() =>
        //   toastMessage.success({
        //     content: `${value}`,
        //   })
        // }
      >
        12345
      </Button>
    </ThemeProvider>
  );
}

export default App;
