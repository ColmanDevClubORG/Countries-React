import React,{ useState, useEffect } from 'react';
import Header from '../components/Header';
import "../assets/css/details.css"
import { Link } from 'react-router-dom';
import BackButton from '../components/backButton';
import CountryDetails from '../components/CountryDetails';
const CardDetails = () => {

    const [DarkTheme, setDarkTheme] = useState(false);

    const onThemeToggle = (theme) => {
        setDarkTheme(theme);
    }

    useEffect(() => {
        if (DarkTheme) {
          document.body.classList.add("dark-theme");
        } else {
          document.body.classList.remove("dark-theme");
        }
      }, [DarkTheme]);

    return (
        <div>
            <Header onThemeToggle={onThemeToggle} />
            <Link to={`/`}>
            <BackButton />
            </Link>
            <div className="container">
                <section className="country-details">
                    <CountryDetails />
                </section>
            </div>
            
        </div>
    );


};

export default CardDetails;