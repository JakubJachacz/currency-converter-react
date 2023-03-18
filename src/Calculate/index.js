import React, { useState } from 'react';
import { Form } from './Form';
import { currencies } from './currencies';
import './App.css';


function Calculate() {
    const [result, setResult] = useState();

    const calculateResult = (currency, amount) => {
        const rate = currencies
        .find(({ short }) => short === currency)
        .rate;

        setResult({
            sourceAmount: +amount,
            targetAmount: amount / rate,
            currency,
        });
    }

    return (
        <div className="app">
            <Form 
            result={result}
            calculateResult={calculateResult}
            />
        </div>
    );
}

export default Calculate;