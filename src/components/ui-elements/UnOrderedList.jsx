const UnOrderedList = ({ className, items }) => {
  return (
    <ul className={className}>
      {items.map((item, index) => (
        <li key={index} {...item.extraProps}>
          <strong>{item.label} </strong>
          {item.value}
        </li>
      ))}
    </ul>
  );
};

export default UnOrderedList;
