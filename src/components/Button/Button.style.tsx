import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const spin = keyframes`
  from {
    transform: rotate(0);
  }
  to{
    transform: rotate(359deg);
  }
`;

const containedStyle = (props: { color: string }) => css`
  background: ${props.color};
  color: #ffffff;
`;

const outlinedStyle = (props: { color: string }) => css`
  border: 1px solid ${props.color};
  background: #ffffff;
  color: ${props.color};
  &:hover {
    background: ${props.color}10;
  }
`;

const textStyle = (props: { color: string }) => css`
  background: #ffffff;
  color: ${props.color};
  &:hover {
    background: ${props.color}10;
  }
`;

const disabledStyle = css`
  background: #dadada;
  cursor: not-allowed;
  &:hover,
  &:active {
    opacity: 1;
  }
`;

const variantMap = {
  contained: containedStyle,
  outlined: outlinedStyle,
  text: textStyle,
};

type Variant = keyof typeof variantMap;

export const StyledButton = styled.button<{ variant: Variant; color: string }>`
  box-sizing: border-box;
  border-radius: 4px;
  border: none;
  outline: none;

  display: inline-flex;
  justify-content: center;
  align-items: center;

  min-width: 100px;
  height: 36px;

  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    opacity: 0.7;
  }

  ${(props) => variantMap[props.variant]}
  ${(props) => (props.disabled ? disabledStyle : null)}
`;

const spinning = styled.div<{ size: number; color: string }>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border: 1px solid ${(props) => props.color};
  border-top: 1px solid transparent;
  border-radius: 50%;
  animation: ${spin} 1s linear 0s infinite;
`;

export const Loading = styled(spinning)<{ variant: Variant; color: string }>`
  margin-right: 8px;
`;

export const Prepend = styled.span`
  margin-right: 8px;
`;

export const Append = styled.span`
  margin-left: 8px;
`;
