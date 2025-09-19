import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './countries.css'

const Countries = ({countriesPromise}) => {

    const [visitedCountries ,setVisitedCountries] = useState([]);
    const [visitedFlags ,setVisitedFlags] = useState([])

    const handleVisitedCountries = (country) =>{
         const newVisitedCountries = [...visitedCountries,country]
         setVisitedCountries(newVisitedCountries)
    }

    const handleVisitedFlags = (flags) =>{
        console.log('added now visited flags',flags)
        const newVisitedFlags = [...visitedFlags,flags]
        setVisitedFlags(newVisitedFlags)
    }

    const countriesData = use(countriesPromise);
    const countries = countriesData.countries
    return (
        <div>
            <h1>In the countries: {countries.length}</h1>
            <h3>Total Country visited : {visitedCountries.length}</h3>
            <h3>Total visited flags : {visitedFlags.length}</h3>
            <ol>
                {
                    visitedCountries.map(country => <li
                    key={country.cca3.cca3}
                    >{country.name.common}</li>)
                }
            </ol>
            <div className='visited-flags-container'>
                {
                    visitedFlags.map((flag,index) => <img src={flag} key={index} ></img>)
                }
            </div>
           <div className='countries'>
             {
                countries.map(country => <Country 
                    key={country.cca3.cca3}
                    country={country}
                    handleVisitedCountries ={handleVisitedCountries}
                    handleVisitedFlags ={handleVisitedFlags}
                    >
                    </Country>)
            }
           </div>
        </div>
    );
};

export default Countries;