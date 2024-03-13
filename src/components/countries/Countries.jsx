import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/Country";
import './country.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, [])
    return (
        <div>
            <h2 style={{
                textAlign: 'center'
            }}>Countries: {countries.length}</h2>
            <div className="element-box">

                {
                    countries.map(country => <Country key={country.car.cca2} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;