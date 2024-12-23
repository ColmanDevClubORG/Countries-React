
const Country = ({card}) => {
  return (
    <a href="#" className="country scale-effect" data-country-name="Belize">
            <div className="country-flag">
              <img src={card.flag} alt="Belize FLag" />
            </div>
            <div className="country-info">
              <h2 className="country-title">{card.name}</h2>
              <ul className="country-brief">
                <li><strong>population: </strong>{card.population}</li>
                <li><strong>Region: </strong>{card.region}</li>
                <li><strong>capital: </strong>{card.capital}</li>
              </ul>
            </div>
          </a>
  );
};

export default Country