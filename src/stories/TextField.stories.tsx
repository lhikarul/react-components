import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";

import TextField from "../components/TextField";
import Search from "../Icons/Search";

export default {
  title: "Inputs/TextField",
  component: TextField,
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => {
  const [value, setValue] = useState("");
  return (
    <TextField
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const Default = Template.bind({});

export const Disabled = Template.bind({});

Disabled.args = {
  isDisabled: true,
};

export const Error = Template.bind({});
Error.args = {
  isError: true,
};

export const Prefix = Template.bind({});
Prefix.args = {
  prefix: <Search />,
};
