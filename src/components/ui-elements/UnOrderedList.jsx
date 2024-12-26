const UnOrderedList = (props) => {
  return (
    <ul className={props.className} id={props.id}>
        {props.children}
    </ul>
  );
};

export default UnOrderedList;
