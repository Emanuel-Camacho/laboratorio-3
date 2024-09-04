import React, { useState } from "react";

const ChangeDollar = ({ dollarRate, setDollarRate }) => {
    const [newDollarRate, setNewDollarRate] = useState(dollarRate);

    const handleChange = (e) => {
        setNewDollarRate(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setDollarRate(newDollarRate);
    };

    const handleSubmitChange = (event) => {
        
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Dollar Rate:
                <input
                    type="number"
                    value={newDollarRate}
                    onChange={handleChange}
                    step="0.01"
                />
            </label>
            <button type="submit">Update</button>
        </form>
    );
};

export default ChangeDollar;
