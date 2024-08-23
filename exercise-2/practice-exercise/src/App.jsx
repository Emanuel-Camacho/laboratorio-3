import "./App.css";
import { beers, Beers } from "./components/beers/Beers";
import AvailableBeers from "./components/AvailableBeers/AvailableBeers";
import CountRedAndIpa from "./components/beerRedIPA/beerRedIPA";
import BeerStyles from "./components/BeerStyle/BeerStyle";
import Product from "./components/AditionalPractice/Product";
import Persons from "./components/AditionalPractice/Persons";
import Family from "./components/AditionalPractice/Family";


const products = ['table', 'couch', 'chair1', 'chair2'];
const names = ['Parker', 'Simmons', 'Lewis', 'Poe'];
const persons = [
  { name: 'Juan', age: 26 },
  { name: 'Gabriel', age: 27 },
  { name: 'Valentina', age: 22 },
  { name: 'Paula', age: 25 },
  { name: 'Andrés', age: 20 }];

const App = () => {
  // return <CountRedAndIpa list={beers}/>;

  /* return (
    <div>
      <BeerStyles beersList={beers} />
    </div>
  ) */

  /* return <Beers /> */

  /* return <Product array={products} />; */

  /* return <Persons array={names} />; */

  return <Family array={persons.sort((a,b) => b.age - a.age)} />
};

export default App;
