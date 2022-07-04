import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";
import Dropwdown from "./components/Dropdown";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <ThemeProvider theme={theme.default}>
      <Dropwdown
        isOpen={isOpen}
        onClick={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}
        overlay={<div>content</div>}
      >
        <div>title</div>
      </Dropwdown>
    </ThemeProvider>
  );
}

export default App;
