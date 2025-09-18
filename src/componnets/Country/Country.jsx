import React from 'react';
import './country.css';
const Country = ({country}) => {
    console.log(country)
    return (
        <div className='country'>
            <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt} ></img>
            <h3>Name : {country.name.common}</h3>
            <p> population : {country.population.population}</p>
        </div>
    );
};

export default Country;