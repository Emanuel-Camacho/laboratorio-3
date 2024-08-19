import './App.css'
import Table from './components/table';

const netIncomes = [
  { brand: 'McDonalds', income: 1291283 },
  { brand: 'Burger King', income: 1927361 },
  { brand: 'KFC', income: 1098463 }
];

const App = () => {
  // Calcular el promedio de los ingresos netos
  const totalIncome = netIncomes.reduce((xy, company) => xy + company.income, 0); // .reduce xya todos los valores de .income, lo acumula en xy (empieza en 0) y se guarda el resultado en totalIncome
  const averageIncome = totalIncome / netIncomes.length; // calculo el promedio dividiendo por la cantidad de elementos en el arreglo
  return (
    <div>
      <h1>Ingresos Brutos por Compañía</h1>
      <Table netIncomes={netIncomes} /> {/*  usa el componente Table y le pasa el arreglo netIncomes como prop. */}
      <p>Promedio de Ingreso Neto: {averageIncome.toFixed(2)}</p>{/* muestra el promedio con 2 decimales */}
    </div>
  )
}

export default App
