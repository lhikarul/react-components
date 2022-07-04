import styled from "@emotion/styled";

export const OverlayWrapper = styled.div<{
  position: { top: number; left: number };
  childrenSize: { width: number; height: number };
  isOpen: boolean;
}>`
  border-radius: 0.25rem;

  display: ${(props) => (props.isOpen ? "block" : "none")};
  width: ${(props) => props.childrenSize.width}px;
  position: absolute;
  z-index: 999;
  top: ${(props) => props.position.top}px;
  left: ${(props) => props.position.left}px;

  background-color: #ffffff;
  color: #111827;

  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.25rem;

  box-shadow: 0 3px 6px -4px rgb(0 0 0 / 12%), 0 6px 16px 0 rgb(0 0 0 / 8%),
    0 9px 28px 8px rgb(0 0 0 / 5%);
  transform: translate(
    calc(${(props) => props.childrenSize.width / 2}px - 50%),
    ${(props) => props.childrenSize.height + 0}px
  );
`;
