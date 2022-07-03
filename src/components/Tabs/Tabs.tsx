import TabGroup from "./TabGroup";
import Tab from "./Tab";
import { TabsProps } from "./types";

function Tabs(props: TabsProps) {
  const { className, options, value, onChange, gap } = props;
  return (
    <TabGroup className={className} onChange={onChange} value={value} gap={gap}>
      {options.map((option) => (
        <Tab key={option.value} label={option.label} value={option.value} />
      ))}
    </TabGroup>
  );
}

export default Tabs;
