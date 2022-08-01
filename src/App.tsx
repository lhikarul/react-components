import { ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";
import Dropwdown from "./components/Dropdown";
import { theme } from "./theme";

const Demo = styled.div`
  margin-top: 100px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 24px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DashboardStyled = styled.span`
  color: #1976d2;
  cursor: pointer;
`;

const MenuList = styled.div`
  padding: 0.5rem 0;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 20%) 0px 5px 5px -3px,
    rgb(0 0 0 / 14%) 0px 8px 10px 1px, rgb(0 0 0 / 12%) 0px 3px;
`;

const MenuItem = styled.div`
  padding: 0.5rem 1rem;
  cursor: pointer;
  &:hover {
    background-color: #eaeaea;
  }
`;

function App() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <ThemeProvider theme={theme.default}>
      <Demo>
        <Dropwdown
          isOpen={open}
          onClick={() => setOpen(true)}
          onClose={() => setOpen(false)}
          overlay={
            <MenuList>
              {["BTC", "ETH", "SOL"].map((item) => (
                <MenuItem key={item} onClick={() => setOpen(false)}>
                  {item}
                </MenuItem>
              ))}
            </MenuList>
          }
        >
          <DashboardStyled>DASHBOARD</DashboardStyled>
        </Dropwdown>
      </Demo>
    </ThemeProvider>
  );
}

export default App;
