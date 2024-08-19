import React from 'react'; // necesario para usar jsx

const Table = ({ netIncomes }) => { // "recibe" el arreglo de app
    return ( // creamos la tabla
        <table>
            <thead>
                <tr>
                    <th>Marca</th>
                    <th>Ingreso Neto</th>
                </tr>
            </thead>
            <tbody>
                {netIncomes.map((company, index) => ( // obtenemos el valor y el index del arreglo 
                // debajo cargamos la tabla con cada uno de los valores (nombre de compania y su IN)
                    <tr key={index}>
                        <td>{company.brand}</td>
                        <td>{company.income}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
