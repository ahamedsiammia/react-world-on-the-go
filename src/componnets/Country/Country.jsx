import { useState } from 'react';
import './country.css';
const Country = ({country}) => {

    const [visited,setVisited] = useState(false);
    // console.log(country.area.area)
    const handleVisited = () =>{
        // * basic system
        // if(visited){
        //     setVisited(false)
        // }
        // else{
        //     setVisited(true)
        // }

        // scoend system
        // setVisited(visited ? false : true)

        // third system
        setVisited(!visited)
    }

    return (
        // <div className={`country ${visited ? 'country-visited':'not visited'}`}>
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt} ></img>
            <h3>Name : {country.name.common}</h3>
            <p> population : {country.population.population}</p>
            <p>Area : {country.area.area} { country.area.area > 300000 ?'Big country' : 'Small country' }</p>
            <button onClick={handleVisited}>{ visited ? 'visited' : 'Not visited' }</button>
        </div>
    );
};

export default Country;