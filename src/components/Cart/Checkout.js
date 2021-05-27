import classes from "./Checkout.module.css";
import useInput from "../../hooks/use-input";

const Checkout = (props) => {
  const {
    value: nameEnteredValue,
    isValid: nameEnteredValueIsValid,
    isNotValid: nameEnteredValueIsNotValid,
    onBlur: nameOnBlureCheckHandler,
    onChange: nameOnChangeHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: streetEnteredValue,
    isValid: streetEnteredValueIsValid,
    isNotValid: streetEnteredValueIsNotValid,
    onBlur: streetOnBlureCheckHandler,
    onChange: streetOnChangeHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: postalCodeEnteredValue,
    isValid: postalCodeEnteredValueIsValid,
    isNotValid: postalCodeEnteredValueIsNotValid,
    onBlur: postalCodeOnBlureCheckHandler,
    onChange: postalCodeOnChangeHandler,
  } = useInput((value) => value.trim().length === 6);

  const {
    value: cityEnteredValue,
    isValid: cityEnteredValueIsValid,
    isNotValid: cityEnteredValueIsNotValid,
    onBlur: cityOnBlureCheckHandler,
    onChange: cityOnChangeHandler,
  } = useInput((value) => value.trim() !== "");

  const nameInputClass = !nameEnteredValueIsNotValid
    ? classes.control
    : `${classes.control} ${classes.invalid}`;

  const streetInputClass = !streetEnteredValueIsNotValid
    ? classes.control
    : `${classes.control} ${classes.invalid}`;

  const postalCodeInputClass = !postalCodeEnteredValueIsNotValid
    ? classes.control
    : `${classes.control} ${classes.invalid}`;

  const cityInputClass = !cityEnteredValueIsNotValid
    ? classes.control
    : `${classes.control} ${classes.invalid}`;

  const submitHandler = (e) => {
    e.preventDefault();
    props.onConfirm({
      name: nameEnteredValue,
      street: streetEnteredValue,
      postalCode: postalCodeEnteredValue,
      city: cityEnteredValue,
    });
  };

  let formIsValid = false;

  if (
    nameEnteredValueIsValid &&
    streetEnteredValueIsValid &&
    postalCodeEnteredValueIsValid &&
    cityEnteredValueIsValid
  ) {
    formIsValid = true;
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={nameInputClass}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameOnChangeHandler}
          onBlur={nameOnBlureCheckHandler}
          value={nameEnteredValue}
        />
      </div>
      <div className={streetInputClass}>
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          onChange={streetOnChangeHandler}
          onBlur={streetOnBlureCheckHandler}
          value={streetEnteredValue}
        />
      </div>
      <div className={postalCodeInputClass}>
        <label htmlFor="postal">Postal Code</label>
        <input
          type="text"
          id="postal"
          placeholder="5 digit xx-xxx"
          onChange={postalCodeOnChangeHandler}
          onBlur={postalCodeOnBlureCheckHandler}
          value={postalCodeEnteredValue}
        />
      </div>
      <div className={cityInputClass}>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          onChange={cityOnChangeHandler}
          onBlur={cityOnBlureCheckHandler}
          value={cityEnteredValue}
        />
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit} disabled={!formIsValid}>
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
