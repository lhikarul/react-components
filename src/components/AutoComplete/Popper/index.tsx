function PopperItem(props: { item: string; onClick: (val: string) => void }) {
  const { item, onClick } = props;
  return (
    <li onClick={() => onClick(item)}>
      <span>{item}</span>
    </li>
  );
}

function Popper({
  options,
  onSelect,
}: {
  options: string[];
  onSelect: (val: string) => void;
}) {
  return (
    <ul>
      {options.map((option, index) => (
        <PopperItem
          key={index}
          item={option}
          onClick={(val: string) => onSelect(val)}
        />
      ))}
    </ul>
  );
}

export default Popper;
