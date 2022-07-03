import styled from "@emotion/styled";
import { ReactElement } from "react";
import { useTabContext } from "../TabContext";

interface TabPanelPrpos {
  children: ReactElement;
  value: string;
}

const Container = styled.div`
  margin-top: 1rem;
`;

function TabPanel(props: TabPanelPrpos) {
  const { children, value } = props;
  const context = useTabContext();
  return <Container>{value === context.value && children}</Container>;
}

export default TabPanel;
