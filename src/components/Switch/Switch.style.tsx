import { css } from "@emotion/react";
import styled from "@emotion/styled";

const transitionStyle = css`
  transition: left 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    right 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;

export const SwitchContainer = styled.div<{
  switchWidth: number;
  height: number;
  switchColor: string;
  disabled: boolean;
}>`
  width: ${(props) => props.switchWidth}px;
  height: ${(props) => props.height}px;
  background: ${(props) => props.switchColor};
  display: inline-flex;
  color: #fff;
  border-radius: 50px;
  position: relative;
  border: 3px solid ${(props) => props.switchColor};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

export const SwitchButton = styled.div<{
  size: number;
  checked: boolean;
  switchWidth: number;
}>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: 50px;
  background: #fff;
  position: absolute;
  ${(props) => {
    if (props.checked) {
      return `left: ${props.switchWidth - props.size}px;`;
    }
    return `left: 0px`;
  }};
  ${transitionStyle};
`;

export const Label = styled.div<{
  padding: number;
  checked: boolean;
  labelWidth: number;
  switchWidth: number;
}>`
  position: absolute;
  font-size: 14px;
  white-space: nowrap;
  top: 50%;
  transform: translateY(-50%);
  padding: 0px ${(props) => props.padding}px;
  ${(props) => {
    if (props.checked) {
      return `right: ${props.switchWidth - props.labelWidth}px;`;
    }
    return `
    right: 0px;
    `;
  }}
  ${transitionStyle}
`;
