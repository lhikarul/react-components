import styled from "@emotion/styled";

export const PopperWrapper = styled.div`
  border: 1px solid rgb(154, 162, 169);
  border-top: none;
  color: #000000;

  ul,
  li {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  ul {
    padding: 0.5rem 0px;
    max-height: 40vh;
    overflow: auto;
  }

  li {
    padding: 6px 16px;
    display: flex;
    align-items: center;
    overflow: hidden;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.04);
    }
  }
`;
