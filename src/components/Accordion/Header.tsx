import { HeaderWrapper, ArrowSwitch } from "./Accordion.style";
import ArrowDownIcon from "../../Icons/ArrowDown";
import { HeaderProps } from "./types";

function Header(props: HeaderProps) {
  const { children, isUp, onClick } = props;
  return (
    <HeaderWrapper onClick={onClick}>
      {children}
      <ArrowSwitch isUp={isUp}>
        <ArrowDownIcon />
      </ArrowSwitch>
    </HeaderWrapper>
  );
}

export default Header;
