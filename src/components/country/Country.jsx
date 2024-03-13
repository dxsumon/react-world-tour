
const Country = ({ country }) => {
    const { name, capital, flags, area,population} = country
    console.log(country)
    return (
        <div style={{
            border: '2px solid teal',
            margin: '10px',
            padding: "20px",
            borderRadius: "16px",
            display:'flex',
            justifyContent:'space-around',
            alignItems:'center',
            boxSizing:'border-box'
        }}>
            <div>
                <h2 style={{
                    color:"blueviolet"
                }}>Name: {name?.common}</h2>
                <h3 style={{
                    color: capital ? "green" : "red"
                }}>Capital name: {capital || "Not Found"}</h3>
                <h3>Land Area(Km)<sup>2</sup>:{area}</h3>
                <h3>Population: <span style={{
                    fontSize:'24px',
                    fontWeight:"normal"
                }}>{population}</span></h3>

            </div>
            <div className="country-image-container">
                <img className="country-image" src={flags.svg} alt="" />
            </div>
        </div>
    );
};

export default Country;