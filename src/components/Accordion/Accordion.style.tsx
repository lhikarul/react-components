import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin-bottom: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid #4c4c57;
  padding: 0 1rem;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 82px;
  position: relative;
  cursor: pointer;
`;

export const PanelAnimation = styled.div<{ maxHeight: number }>`
  max-height: ${(props) => props.maxHeight}px;
  overflow: hidden;
  transition: max-height 0.3s ease-out;
`;
export const ArrowSwitch = styled.span<{ isUp: boolean }>`
  min-width: 1.5rem;
  cursor: pointer;
  > svg {
    transform: rotate(${(props) => (props.isUp ? "180deg" : "0deg")});
  }
`;
