
const Country = ({country}) => {
    const {name,capital,flags} =country
    console.log(country)
    return (
        <div style={{
            border:'2px solid teal',
            margin:'10px',
            padding:"20px",
            borderRadius:"16px",
        }}>
             <h2>Name: {name?.common}</h2>
             <h3 style={{
                color: capital?"green":"red"
             }}>Capital name: {capital||"Not Found"}</h3>
             <div className="country-image-container">
             <img className="country-image" src={flags.svg} alt="" />
             </div>
        </div>
    );
};

export default Country;