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
        console.log(listItems);
        const visitedCountries = [...listItems, country];
        // console.log(visitedCountries);
        setListItems(visitedCountries);
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
                </ul>
            </div>

            <div className="countries-container">
                {countries.map(country => <Country
                    key={country.name.common}
                    handleListItems={handleListItems}
                    country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;