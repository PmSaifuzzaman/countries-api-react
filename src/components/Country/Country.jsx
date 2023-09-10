import { useState } from 'react';
import './Country.css';

const Country = ({country}) => {
    const {name, flags, area, population} = country;

   const [visited, setVisited] = useState(false);

   const handleVisited = () => {
        setVisited(true)
   };

    return (
        <div className='country'>
            <h3>Name:{name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Area: {area}</p>
            <p>Population: {population}</p>
            <button onClick={handleVisited}>Visited</button>
            {
                visited? 'I have Visited the Country' : 'I want to Visit'
            }
        </div>
    );
};

export default Country;