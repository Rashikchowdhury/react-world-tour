import { useEffect, useState } from "react";
import Country from "./country/Country";
import './countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags,area')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, []);

    const [listItems, setListItems] = useState([]);

    const handleListItems = (country) => {
        const visitedCountries = [...listItems, country];
        setListItems(visitedCountries);
    }

    const [visitedFlags, setVisitedFlags] = useState([]);

    const handleFlags = (flag) => {
        setVisitedFlags([...visitedFlags, flag])
    }

    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            <div>
                <h3>Visited: {listItems.length}</h3>

                <ul>
                    {
                        listItems.map((item) => (<li key={item.name.common}>{item.name.common}</li>))
                    }
                    {
                        visitedFlags.map((flag, idx) => <img className="flags-style" src={flag} key={idx} ></img>)
                    }
                </ul>
            </div>

            <div className="countries-container">
                {countries.map(country => <Country
                    key={country.name.common}
                    handleListItems={handleListItems}
                    handleFlags={handleFlags}
                    country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;