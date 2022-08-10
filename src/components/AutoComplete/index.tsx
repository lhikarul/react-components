import { useState } from "react";
import Dropdown from "../Dropdown";
import Popper from "./Popper";
import { PopperWrapper } from "./Autocomplete.style";
import TextField from "../TextField";

interface AutocompleteProps {
  placeholder?: string;
  width?: number;
  options: string[];
}

function Autocomplete(props: AutocompleteProps) {
  const { placeholder, width, options } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  return (
    <Dropdown
      isOpen={isOpen}
      onClick={() => setIsOpen((val) => !val)}
      onClose={() => setIsOpen(false)}
      overlay={
        <PopperWrapper>
          <Popper
            options={options}
            onSelect={(val) => {
              setValue(val);
              setIsOpen(false);
            }}
          />
        </PopperWrapper>
      }
    >
      <TextField
        width={width}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
    </Dropdown>
  );
}

export default Autocomplete;
