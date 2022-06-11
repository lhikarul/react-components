import { SwitchButtonProps } from "./types";
import { SwitchContainer, SwitchButton, Label } from "./Switch.style";
import { useEffect, useRef, useState } from "react";
import { useThemeColor } from "../../hooks/useThemeColor";

function Switch(props: SwitchButtonProps) {
  const {
    disabled = false,
    themeColor = "primary",
    onChange,
    checkedText,
    unCheckedText,
    isChecked = false,
  } = props;
  const { makeColor } = useThemeColor();
  const [checked, setChecked] = useState(isChecked);
  const [labelWidth, setLabelWidth] = useState(0);

  const labelRef = useRef<HTMLDivElement | null>(null);

  const switchColor = makeColor({ themeColor, disabled: !checked });
  const switchButtonSize = 18;
  const switchWidth = switchButtonSize + labelWidth;

  const handleSwitch = () => {
    if (disabled) return;
    setChecked((checked) => !checked);
  };

  useEffect(() => {
    const minLabelSize = switchButtonSize * 1.2;
    const labelWidth = labelRef?.current?.clientWidth;
    if (labelWidth) {
      setLabelWidth(labelWidth < minLabelSize ? minLabelSize : labelWidth);
    }
  }, []);

  useEffect(() => {
    onChange(checked);
  }, [checked, onChange]);

  return (
    <SwitchContainer
      height={18}
      disabled={disabled}
      switchColor={switchColor}
      switchWidth={switchWidth}
      onClick={handleSwitch}
    >
      <SwitchButton size={18} checked={checked} switchWidth={switchWidth} />
      <Label
        ref={labelRef}
        padding={18 / 3}
        labelWidth={40}
        switchWidth={switchWidth}
        checked={checked}
      >
        {checked ? unCheckedText : checkedText}
      </Label>
    </SwitchContainer>
  );
}

export default Switch;
