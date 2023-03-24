import React, { useState } from 'react';
import { Form } from './Form';
import { currencies } from './currencies';
import { StyledApp } from "./styled";
import { Clock } from "./Clock";


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
        <StyledApp>
            <Clock />
            <Form
                result={result}
                calculateResult={calculateResult}
            />
        </StyledApp>
    );
}

export default Calculate;