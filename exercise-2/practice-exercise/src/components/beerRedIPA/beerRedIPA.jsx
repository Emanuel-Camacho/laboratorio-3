const CountRedAndIpa = ({list}) => {
    const countByStyle = (style) => list.filter(beer => beer.beerStyle === style).length;

    const redCount = countByStyle('Red');
    const ipaCount = countByStyle('IPA');

    return (
        <div>
            <p>Cantidad de cervezas roja: {redCount}</p>
            <p>Cantidad de cervezas IPA: {ipaCount}</p>
        </div>
    );
}
export default CountRedAndIpa;