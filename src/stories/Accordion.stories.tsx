import { ComponentStory, ComponentMeta } from "@storybook/react";

import Accordion from "../components/Accordion";

export default {
  title: "SURFACES/Accordion",
  component: Accordion,
  argTypes: {
    onChange: {
      action: "onChange",
    },
  },
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => {
  const dataSource = [
    {
      header: <div>header</div>,
      content: (
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            temporibus vitae? Quidem quam placeat, iusto soluta debitis
            consequuntur tempora sed a voluptates maiores repudiandae dolor?
            Deleniti ex cumque at iste!
          </p>
        </div>
      ),
    },
    {
      header: <div>header 2</div>,
      content: (
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            temporibus vitae? Quidem quam placeat, iusto soluta debitis
            consequuntur tempora sed a voluptates maiores repudiandae dolor?
            Deleniti ex cumque at iste!
          </p>
        </div>
      ),
    },
    {
      header: <div>header 3</div>,
      content: (
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            temporibus vitae? Quidem quam placeat, iusto soluta debitis
            consequuntur tempora sed a voluptates maiores repudiandae dolor?
            Deleniti ex cumque at iste!
          </p>
        </div>
      ),
    },
  ];
  return (
    <Accordion {...args}>
      {dataSource.map((item, index) => (
        <Accordion.Panel key={index} header={item.header}>
          {item.content}
        </Accordion.Panel>
      ))}
    </Accordion>
  );
};

export const Default = Template.bind({});
