import './Country.css'

const Country = ({country}) => {
    const {name, flags, capital, region, population, area} = country;
    return (
        <div className="box">
            <h3>{name.common}</h3>
            <img src={flags.png} alt={flags.alt} />
            <p>Population: {population}</p>
            <p>Region: {region}</p>
            <p>Area: {area}</p>
        </div>
    );
};

export default Country;