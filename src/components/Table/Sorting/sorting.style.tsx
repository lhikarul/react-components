import styled from "@emotion/styled";

export const SortIcon = styled.span<{ asc: boolean; color?: string }>`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 6px 8px 6px;
  border-color: transparent transparent
    ${(props) => (props.color ? props.color : "#7a8055")} transparent;
  transform: translateY(${(props) => (props.asc ? "-1px" : "1px")})
    rotate(${(props) => (props.asc ? "360deg" : "180deg")});
`;

export const Container = styled.div`
  display: inline-flex;
  align-items: center;
  .sort {
    margin-left: 0.25rem;
    display: inline-flex;
    flex-direction: column;
  }
`;

// export const Container = styled.div`
//   /* display: flex;
//   align-items: center; */
//   .sort {
//     /* margin-left: 0.25rem;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center; */
//     /* ${SortIcon} {
//       border-style: solid;
//       border-width: 0 6px 8px 6px;
//     } */
//   }
// `;
