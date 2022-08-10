import { ThemeProvider } from "@emotion/react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";
import { theme } from "../theme";

import Radio, { RadioGroup } from "../components/Radio";

export default {
  title: "Inputs/Radio",
  component: RadioGroup,
} as ComponentMeta<typeof RadioGroup>;

const Template: ComponentStory<typeof RadioGroup> = (args) => {
  const radioList = [
    {
      label: "BTC",
      value: "BTC",
    },
    {
      label: "ETH",
      value: "ETH",
    },
    {
      label: "SOL",
      value: "SOL",
    },
  ];
  const [selectedValue, setSelectedValue] = useState(radioList[0].value);
  return (
    <ThemeProvider theme={theme.default}>
      <RadioGroup
        {...args}
        value={selectedValue}
        onChange={(val) => setSelectedValue(val)}
      >
        {radioList.map((radio) => (
          <Radio value={radio.value} key={radio.value} label={radio.label} />
        ))}
      </RadioGroup>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

export const Row = Template.bind({});

Row.args = {
  row: true,
};
