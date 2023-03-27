import React from 'react';
import { Form } from './Form'; 
import { StyledApp } from "./styled";
import { Clock } from "./Clock";


function Calculate() {
 
    return (
        <StyledApp>
            <Clock />
            <Form />
        </StyledApp>
    );
}

export default Calculate;