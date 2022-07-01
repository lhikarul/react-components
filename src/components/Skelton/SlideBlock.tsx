import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { SkeltonVariant } from "./types";

const slide = keyframes`
    from {
        left: -150%;
    }
    to {
        left: 100%;
    }
`;

const StyledSlideBlock = styled.div<{
  width: number | string;
  height: number | string;
  variant: SkeltonVariant;
}>`
  width: ${(props) =>
    typeof props.width === "number" ? props.width + "px" : props.width};
  height: ${(props) =>
    typeof props.height === "number" ? props.height + "px" : props.height};

  ${(props) => {
    if (props.variant === "circular") {
      return `border-radius: 50%`;
    } else if (props.variant === "text") {
      return `border-radius: 4px/6.7px;`;
    }
  }};

  background: #eee;
  position: relative;
  overflow: hidden;
  &:before {
    content: "";
    position: absolute;
    height: 100%;
    width: 80px;
    top: 0px;
    background: linear-gradient(
      to right,
      transparent 0%,
      #ffffff99 50%,
      transparent 100%
    );
    animation: ${slide} 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;
    box-shadow: 0 4px 10px 0 #ffffff33;
  }
`;

const SlideBlock = ({
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
    <StyledSlideBlock
      width={width}
      height={height}
      variant={variant}
      style={style}
    />
  );
};

export default SlideBlock;
