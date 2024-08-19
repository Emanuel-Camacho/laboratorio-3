import React from 'react';

const BeerCount = ({ beers }) => {
    const countByStyle = (style) => beers.filter(beer => beer.beerStyle === style).length;

    const redCount = countByStyle('Red');
    const ipaCount = countByStyle('IPA');

    return (
        <div>
            <BeerItem>
                <p>Number of Red Beers: {redCount}</p>
                <p>Number of IPA Beers: {ipaCount}</p>
            </BeerItem>
        </div>
    );
};

// Asegúrate de que el componente BeerItem esté definido. Si no lo está, deberías crearlo.
const BeerItem = ({ children }) => {
    return (
        <div className="beer-item">
            {children}
        </div>
    );
};

export default BeerCount;
