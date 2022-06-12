import { RadioProps } from "./types";
import { Radio as RadioStyled } from "./Radio.style";
import { useThemeColor } from "../../hooks/useThemeColor";

function Radio(props: RadioProps) {
  const {
    value,
    label,
    checked,
    className,
    onChange,
    themeColor = "primary",
  } = props;
  const { makeColor } = useThemeColor();
  const radioColor = makeColor({ themeColor, disabled: !checked });
  return (
    <RadioStyled className={className} color={radioColor}>
      <label>
        <input
          type="radio"
          value={value}
          onChange={onChange}
          checked={checked}
        />
        <span className="checkmark" />
        <span className="label">{label}</span>
      </label>
    </RadioStyled>
  );
}

export default Radio;
