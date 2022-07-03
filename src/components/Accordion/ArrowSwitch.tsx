import { ArrowSwitch as ArrowSwitchStyled } from "./Accordion.style";
import ArrowDownIcon from "../../Icons/ArrowDown";

function ArrowSwitch(props: { onSwitch: () => void; isUp: boolean }) {
  const { onSwitch, isUp } = props;
  return (
    <ArrowSwitchStyled onClick={onSwitch} isUp={isUp}>
      <ArrowDownIcon width={14} height={7} />
    </ArrowSwitchStyled>
  );
}

export default ArrowSwitch;
