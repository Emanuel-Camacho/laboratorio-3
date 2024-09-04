import React, { useState } from "react";
import ChangeDollar from "./components/ChangeDollar";
import beers from "./components/Beers";

const App = () => {
  const [showChangeDollar, setShowChangeDollar] = useState(true);
  const [dollarRate, setDollarRate] = useState(1);
  const [beersList] = useState(beers);

  /* const toggleChangeDollar = () => {
    setShowChangeDollar(!showChangeDollar);
  }; */

  const beersWithUpdatedPrices = beersList.map(beer => ({
    ...beer,
    priceInDollars: (beer.price * dollarRate).toFixed(2)
  }));

  return (
    <div>
      {/*  <button onClick={toggleChangeDollar}>
        {showChangeDollar} Change Dollar
      </button> */}
      {showChangeDollar && (
        <ChangeDollar dollarRate={dollarRate} setDollarRate={setDollarRate} />
      )}
      <ul>
        {beersWithUpdatedPrices.map(beer => (
          <li key={beer.id}>
            {beer.beerName} - ${beer.priceInDollars} ({beer.beerStyle})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
