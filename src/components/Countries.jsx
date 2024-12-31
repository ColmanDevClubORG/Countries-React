import Country from '../components/Country';
import { nanoid } from 'nanoid';


const Countries = ({ countries, openModal }) => {
  return (
    <main className='main'>
      <div className='container'>
        <section className='countries-grid'>
          {countries.map((country,index)=>{
            if (index === 39) return null;
            return (
              <Country
                index={index}
                key={nanoid()}
                country={country}
                onClick={() => openModal(country)}
              />
            );
          })}
        </section>
      </div>
    </main>
  );
};

export default Countries;
