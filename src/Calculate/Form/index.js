import React, { useState } from "react";
import { useRatesData } from "./useRatesData";
import { Result } from "./Result";
import {
  StyledForm,
  StyledSelect,
  StyledButton,
  StyledInput,
  Loading,
  Fail,
} from "./styled";

export const Form = () => {
  const [result, setResult] = useState();
  const ratesData = useRatesData();
  const [currency, setCurrency] = useState("EUR");
  const [amount, setAmount] = useState("");

  const calculateResult = (currency, amount) => {
    const rate = ratesData.rates[currency];

    setResult({
      sourceAmount: +amount,
      targetAmount: amount * rate,
      currency,
    });
  }

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  }

  return (
<StyledForm onSubmit={onSubmit}>
  {ratesData.state === "loading" ? (
    <Loading>
      Prosimy poczekać, ładujemy kursy walut z Europejskiego Banku Centralnego
    </Loading>
  ) : ratesData.state === "error" ? (
    <Fail>
      Coś poszło nie tak. Sprawdź swoje połączenie z internetem lub spróbuj ponownie później.
    </Fail>
  ) : (
    <>
      <fieldset>
        <legend>Kalkulator walut</legend>
        <p>
          <label>
            <StyledSelect
              value={currency}
              onChange={({ target }) => setCurrency(target.value)}
            >
              {Object.keys(ratesData.rates).map((currency) => {
                return (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                );
              })}
            </StyledSelect>
          </label>
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
        </p>
        <Result result={result} />
        <p>
          <StyledButton type="submit">Przelicz</StyledButton>
        </p>
      </fieldset>
    </>
  )}
</StyledForm>

   );
  }