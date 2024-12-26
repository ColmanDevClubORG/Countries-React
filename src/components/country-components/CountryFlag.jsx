const CountryFlag = (props) => {
  return (
    <div className="country-flag">
      <img src={props.src} alt={`${props.alt} flag`} />
    </div>
  );
};

export default CountryFlag;
