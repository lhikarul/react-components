import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const StyledTextField = styled.div<{
  isError?: boolean;
  isDisabled?: boolean;
  width?: number;
}>`
  border-radius: 2px;
  border: 1px solid #9aa2a9;
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
  padding-left: 1rem;
  box-shadow: 0px 1px 2px rgba(197, 169, 169, 0.05);

  display: flex;
  align-items: center;

  width: ${(props) => props.width + "px" || "100%"};
  ${(props) => (props.isError ? errorStyle : null)};
  ${(props) => (props.isDisabled ? disabledStyle : null)};
`;

export const Input = styled.input`
  padding-left: 0.5rem;
  width: 100%;
  outline: none;
  border: none;
  background: none;
  color: #000000;
  &::placeholder {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.25rem;
    color: #7a8085;
  }
`;

export const errorStyle = css`
  border: 1px solid #d0021b;
  &:hover {
    border: 1px solid #d0021b;
  }
`;

export const disabledStyle = css`
  border: 1px solid rgb(218, 218, 218);
  background: rgb(218, 218, 218, 0.133);
  cursor: not-allowed;
  input {
    cursor: not-allowed;
    background: none;
  }
`;
