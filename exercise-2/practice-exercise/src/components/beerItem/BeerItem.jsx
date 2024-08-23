const BeerItem = ({ beerName, beerStyle, price, available }) => {
    return (
        <>
            <h2>{beerName}</h2>
            <p>${price}</p>
            <p>{beerStyle}</p>
            <h5>{available ? "Esta disponible" : "No esta disponible"}</h5>
        </>)
};
export default BeerItem;