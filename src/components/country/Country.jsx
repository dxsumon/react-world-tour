import { useState } from "react";
const Country = ({ country, markHandle }) => {
    const { name, capital, flags, area, population } = country
    const [visited, setVisited] = useState(false)
    const visitHandle = () => {
        setVisited(!visited)
    }
    return (
        <div className={visited && `visit-container`} style={{
            border: '2px solid teal',
            margin: '10px',
            padding: "20px",
            borderRadius: "16px",
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            boxSizing: 'border-box',
            width: '100%'
        }}>
            <div>
                <h2 style={{
                    color: visited ? 'black' : 'blueviolet'
                }}>Name: {name?.common}</h2>
                <h3 style={{
                    color: capital ? "green" : "red"
                }}>Capital name: {capital || "Not Found"}</h3>
                <h3>Land Area(Km)<sup>2</sup>:{area}</h3>
                <h3>Population: <span style={{
                    fontSize: '24px',
                    fontWeight: "normal"
                }}>{population}</span></h3>
                <div style={{
                    display:"flex",
                    justifyContent:"space-between",
                    alignItems:"center"
                }}>
                    <button onClick={()=>markHandle(country)}>Mark Us</button>
                    <button style={{
                        color: visited ? "red" : "teal"
                    }} onClick={visitHandle}>{visited ? "Visited" : "Not visit"}</button>
                </div>
                <p>{visited && "I visit this Country"}</p>

            </div>
            <div className="country-image-container">
                <img className="country-image" src={flags.svg} alt="" />
            </div>
        </div>
    );
};

export default Country;