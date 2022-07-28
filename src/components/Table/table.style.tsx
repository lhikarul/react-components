import { css } from "@emotion/react";
import styled from "@emotion/styled";

const StripedStyle = css`
  tr:nth-of-type(2n + 1) td {
    background-color: #eaeaea;
  }
  tr:nth-of-type(2n) td {
    background-color: #ffffff;
  }
`;

const stickyLeftStyle = css`
  position: sticky;
  left: 0;
  z-index: 5;
  &:after {
    content: "";
    position: absolute;
    right: 15px;
    top: 0px;
    width: 10px;
    height: 100%;
    box-shadow: inset 10px 0 8px -8px #8f8f8f;
  }
`;

export const TableStyled = styled.table<{
  striped: boolean;
  rowClick?: boolean;
}>`
  * {
    box-sizing: border-box;
    border: none;
  }
  width: 100%;
  border-collapse: collapse;
  background-color: #ffffff;

  th,
  td {
    padding: 1rem;
    background-color: #ffffff;
  }

  thead {
    position: sticky;
    top: 0;
    z-index: 10;

    th {
      background-color: ${(props) => (props.striped ? "#000000" : "#FFFFFF")};
      color: ${(props) => (props.striped ? "#FFFFFF" : "#000000")};
      font-weight: 500;
      font-size: 0.875rem;
      line-height: 1.5rem;
      letter-spacing: 0.01071em;
      text-align: left;
    }
  }

  tbody {
    tr {
      ${(props) =>
        props.rowClick &&
        css`
          cursor: pointer;
        `}
    }
    td {
      color: rgba(0, 0, 0, 0.87);
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 1.43;
      letter-spacing: 0.01071em;
    }
    ${(props) =>
      !props.striped &&
      css`
        tr:hover {
          background-color: #eaeaea;
        }
      `}
    ${(props) => props.striped && StripedStyle}
  }
`;

export const Th = styled.th<{ fixed?: boolean }>`
  ${(props) => props.fixed && stickyLeftStyle}
`;

export const Td = styled.td<{ fixed?: boolean }>`
  ${(props) => props.fixed && stickyLeftStyle}
`;
