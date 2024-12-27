import { Link } from "react-router-dom";
import Country from "../country-components/Country";
import CountryFlag from "../country-components/CountryFlag";

const Card = (props) => {
  return (
    <Link
      to={`/details/${props.country.name}`}
      className="country scale-effect"
      data-country-name={props.country.name}
      isDarkMode={props.isDarkMode}
    >
      <CountryFlag src={props.country.flag} alt={props.country.name} />
      <Country country={props.country}></Country>
    </Link>
  );
};

export default Card;
