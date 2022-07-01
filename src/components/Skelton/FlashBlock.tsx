import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { SkeltonVariant } from "./types";

const flash = keyframes`
    from {
        opacity: 0.3;
    }
    to {
        opacity: 1;
    }
`;

const StyledFlashBlock = styled.div<{
  width: number | string;
  height: number | string;
  variant: SkeltonVariant;
}>`
  width: ${(props) =>
    typeof props.width === "number" ? props.width + "px" : props.width};
  height: ${(props) =>
    typeof props.height === "number" ? props.height + "px" : props.height};
  background: #eee;
  animation: ${flash} 0.8s ease-in-out alternate-reverse infinite;
`;

const FlashBlock = ({
  width,
  height,
  variant,
  style,
}: {
  width: number | string;
  height: number | string;
  variant: SkeltonVariant;
  style?: React.CSSProperties;
}) => {
  return (
    <StyledFlashBlock
      width={width}
      height={height}
      variant={variant}
      style={style}
    />
  );
};

export default FlashBlock;
