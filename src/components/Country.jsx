const Country = ({card}) => {
  const { flag, name, population, region, capital } = card;
  return (
    <a href="#" className="country scale-effect" data-country-name="Belize">
            <div className="country-flag">
              <img src={flag} alt="Belize FLag" />
            </div>
            <div className="country-info">
              <h2 className="country-title">{name}</h2>
              <ul className="country-brief">
                <li><strong>population: </strong>{population}</li>
                <li><strong>Region: </strong>{region}</li>
                <li><strong>capital: </strong>{capital}</li>
              </ul>
            </div>
          </a>
  );
};

export default Country