import React from 'react';

const BeerStyles = ({ beersList }) => {
    // Extraer los estilos únicos de la lista de cervezas
    const uniqueStyles = [...new Set(beersList.map(beer => beer.beerStyle))];

    return (
        <div>
            <h2>Available Beer Styles</h2>
            <ul>
                {uniqueStyles.map((style, index) => (
                    <li key={index}>{style}</li>
                ))}
            </ul>
        </div>
    );
};

export default BeerStyles;
