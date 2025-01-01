import Country from "../components/Country";
import Filter from "../components/Filter/filter";
import useCountries from "../components/Hooks/useCountries";

const Home = () => {
    const { filteredCountries, search } = useCountries()

    return (
        <>
            <Filter onSearch={search} />
            <main className="main">
                <div className="container">
                    <section className="countries-grid">
                        {filteredCountries.map((card, index) => {
                            return <Country key={index} card={card} />
                        })}
                    </section>
                </div>
            </main>
        </>
    );
};

export default Home;
