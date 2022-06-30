import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const topIn = keyframes`
  0% {
    transform: translateY(-50%);
    opacity: 0;
  }
  100% {
    transform: translateY(100%);
    opacity: 1;
  }
`;

const topOut = keyframes`
      0% {
    transform: translateY(100%);
    opacity: 1;
  }
  100% {
    transform: translateY(-50%);
    opacity: 0;
  }
`;

const topStyle = (props: { visible: boolean }) => css`
  animation: ${props.visible ? topIn : topOut} 200ms ease-in-out forwards;
`;

export const Wrapper = styled.div<{ visible: boolean }>`
  display: inline-flex;
  align-items: center;
  margin-top: 20px;
  box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014,
    0 9px 28px 8px #0000000d;
  min-width: 300px;
  min-height: 52px;
  box-sizing: border-box;
  padding: 16px 20px;
  border-radius: 4px;
  background: #fff;
  & > *:first-of-type {
    margin-right: 12px;
  }
  ${topStyle}
`;
