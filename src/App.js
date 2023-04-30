import React, { useState } from 'react';
import { fetchData } from './api';
import './App.css';


function App() {
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const data = await fetchData(value);
            if (data && data.length > 0) {
                setResult(data[0]);
                console.log(data[0]);
            } else {
                setResult(null);
            }
        } catch (error) {
            console.error(error);
            setResult('Failed to fetch data');
        }
    };



    return (
        <div className="container">
            <h1 className="title">investTEA ☕️</h1>
            <form className="form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="input"
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                    placeholder="Enter a symbol"
                />
                <button type="submit" className="button">
                    Submit
                </button>
            </form>
            {result && (
                <div className="result">
                    <p>Buy: {result.buy}</p>
                    <p>Hold: {result.hold}</p>
                    <p>Sell: {result.sell}</p>
                </div>
            )}
        </div>
    );


}

export default App;