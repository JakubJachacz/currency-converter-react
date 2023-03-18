import { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";
import "./style.css";

export const Form = ({ calculateResult, result }) => {
  const [currency, setCurrency] = useState(currencies[0].short);
  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <fieldset>
        <legend>Kalkulator walut</legend>

        <p>
          <label>
            Kwota w PLN:
            <input
              value={amount}
              onChange={({ target }) => setAmount(target.value)}
              placeholder="Wpisz kwotę w zł"
              className="form__field"
              required
              type="number"
              min="0.01"
              step="any"
            />
          </label>
        </p>
        <p>
          <label>
            <select
              className="form__field"
              value={currency}
              onChange={({ target }) => setCurrency(target.value)}
            >
              {currencies.map((currency) => (
                <option key={currency.short} value={currency.short}>
                  {currency.name}
                </option>
              ))}
            </select>
          </label>
        </p>
        <p>
          <button className="form__button">Convert</button>
        </p>

        <Result result={result} />
      </fieldset>
    </form>
  );
};

export default Form;