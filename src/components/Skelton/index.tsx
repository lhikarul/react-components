import { SkeltonProps } from "./types";
import FlashBlock from "./FlashBlock";
import SlideBlock from "./SlideBlock";

const variantMap = {
  flash: FlashBlock,
  slide: SlideBlock,
};

function Skelton(props: SkeltonProps) {
  const {
    variant = "text",
    animation = "slide",
    width = 100,
    height = 100,
    style,
  } = props;
  const SkeltonComponent = variantMap[animation];
  return (
    <SkeltonComponent
      width={width}
      height={height}
      variant={variant}
      style={style}
    />
  );
}

export default Skelton;
