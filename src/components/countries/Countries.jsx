import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/Country";
import './country.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [markUs, setMarkUs]= useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data));
    }, [])
    // Mark US button handle
    const markHandle= (country) =>{
        // console.log(country);
        const markUsCountry = [...markUs,country];
        setMarkUs(markUsCountry);
    } 
    return (
        <div>
            <h2 style={{
                textAlign: 'center'
            }}>Countries: {countries.length}</h2>
            <div>
                <h4>Mark Us all: <span style={{color:'red'}}>{markUs.length}</span></h4>
                <ol>
                    {
                        markUs.map(allCountry=> <li className="mark-country-container" key={allCountry.car.cca2}>Name:{allCountry.name.common} <img src={allCountry.flags.svg} alt="" style={{width:'50px',height:'50px'}} /></li>)
                    }
                </ol>
            </div>
            <div className="element-box">

                {
                    countries.map(country => <Country markHandle={markHandle} key={country.car.cca2} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;