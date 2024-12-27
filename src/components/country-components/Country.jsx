import UnOrderedList from "../ui-elements/UnOrderedList";

const Country = ({ country }) => {
  const { name, population, region, capital } = country;
  const countryDetails = [
    { label: "Population:", value: population },
    { label: "Region:", value: region },
    { label: "Capital:", value: capital },
  ];

  return (
    <div className="country-info">
      <h2 className="country-title">{name}</h2>
      <UnOrderedList className="country-brief" items={countryDetails} />
    </div>
  );
};

export default Country;
