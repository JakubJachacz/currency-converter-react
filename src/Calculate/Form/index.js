import { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";
import { StyledForm, StyledButton, StyledSelect, StyledInput } from "./styled";

export const Form = ({ calculateResult, result }) => {
  const [currency, setCurrency] = useState(currencies[0].short);
  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  }

  return (
    <StyledForm
    onSubmit={onSubmit}>
      <fieldset>
        <legend>Kalkulator walut</legend>
        <p>
          <label>
            Kwota w PLN:
            <StyledInput
              value={amount}
              onChange={({ target }) => setAmount(target.value)}
              placeholder="Wpisz kwotę w zł"
              required
              type="number"
              min="0.01"
              step="any"
            />
          </label>
        </p>
        <p>
          <label>
            <StyledSelect
              value={currency}
              onChange={({ target }) => setCurrency(target.value)}
            >
              {currencies.map((currency) => (
                <option key={currency.short} value={currency.short}>
                  {currency.name}
                </option>
              ))}
            </StyledSelect>
          </label>
        </p>
        <p>
          <StyledButton>Przelicz</StyledButton>
        </p>
        <Result result={result} />
      </fieldset>
    </StyledForm>
  );
};

export default Form;