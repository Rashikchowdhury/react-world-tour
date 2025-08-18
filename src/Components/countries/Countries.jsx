import { useEffect, useState } from "react";
import Country from "./Country";
const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags,area')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            {countries.map(country => <Country
                key={country.name.common}
                country={country}></Country>)
            }
        </div>
    );
};

export default Countries;