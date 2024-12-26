import UnOrderedList from "../ui-elements/UnOrderedList";

const Country = (props) => {
  return (
    <div className="country-info">
      <h2 className="country-title">{props.country.name}</h2>
      <UnOrderedList className="country-brief">
        <li>
          <strong>population: </strong>
          {props.country.population}
        </li>
        <li>
          <strong>Region: </strong>
          {props.country.region}
        </li>
        <li>
          <strong>capital: </strong>
          {props.country.capital}
        </li>
      </UnOrderedList>
    </div>
  );
};

export default Country;
