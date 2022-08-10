import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Radio = styled.div<{ color: string }>`
  position: relative;
  input {
    position: absolute;
    opacity: 0;
  }
  label {
    padding-left: 2rem;
    line-height: 24px;
    cursor: pointer;
    font-weight: 500;
    font-size: 18px;
  }

  input:checked ~ .checkmark:after {
    display: block;
  }
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: #ffffff;
    border-radius: 50%;
    border: 2px solid ${(props) => props.color};
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
    top: 4px;
    left: 4px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${(props) => props.color};
  }
`;

export const RowStyled = css`
  display: flex;
  > div:not(:last-of-type) {
    margin-right: 0.5rem;
    margin-bottom: 0;
  }
`;

export const RadioGroupStyled = styled.div<{ row: boolean }>`
  > div:not(:last-of-type) {
    margin-bottom: 0.5rem;
  }
  ${(props) => props.row && RowStyled}
`;
