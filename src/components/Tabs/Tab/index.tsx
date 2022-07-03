import styled from "@emotion/styled";
import type { ReactElement } from "react";
import { TabProps } from "../types";
const StyledTab = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 1.6875rem;
  color: #000000;
  max-width: 360px;
  min-width: 100px;
  color: ${(props) => (props.isActive ? "#1976d2" : "#000000")};
`;

function Tab(props: TabProps) {
  const { label, value } = props;

  return (
    <StyledTab
      //@ts-ignore
      onClick={props.onClick}
      //@ts-ignore
      isActive={props.isActive}
    >
      {label}
    </StyledTab>
  );
}

export default Tab;
