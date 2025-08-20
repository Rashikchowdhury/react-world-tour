import { useState } from 'react';
import './Country.css';

const Country = ({ country, handleListItems }) => {
    const { name, flags, capital, region, population, area } = country;
    const [visited, setVisited] = useState(false)
    const handleVisited = () => {
        setVisited(!visited)
    }
    const markVisited = () => { handleListItems(country) };

    return (
        <div className={`box ${visited && "visited"}`}>
            <h3>{name.common}</h3>
            <img src={flags.png} alt={flags.alt} />
            <p>Population: {population}</p>
            <p>Region: {region}</p>
            <p>Area: {area}</p>
            <button onClick={handleVisited}>{visited ? "Visited" : "Going"}</button><br />
            {visited && "I've visited this country"} <br />
            <button onClick={markVisited}>Mark</button>
        </div>
    );
};

export default Country;