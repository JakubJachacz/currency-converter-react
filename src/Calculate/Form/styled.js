import styled from "styled-components";

export const StyledForm = styled.form`
  margin: auto;
`;

export const StyledSelect = styled.select`
    background-color: rgb(248, 248, 248);
    border-radius: 3px;
    font-size: 20px;
    width: 100%;
    height: 50px;
`;

export const StyledButton = styled.button`
    color: white;
    background-color: teal;
    padding: 10px;
    border: none;
    border-radius: 15px;
    width: 100%;
    font-size: 20px;

    &:hover {
        cursor: pointer;
    }
`;

export const StyledInput = styled.input`
    background-color: rgb(248, 248, 248);
    border-radius: 3px;
    font-size: 20px;
    width: 100%;
    height: 50px;
`
 
export const Loading = styled.p`
color: teal;
`;

export const Fail = styled.p`
color: red;
`;