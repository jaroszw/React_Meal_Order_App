import { useState } from 'react';

const useInput = (validatorFunction) => {
  const [enteredValue, serEnteredValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const enteredValueIsValid = validatorFunction(enteredValue);
  const enteredValueIsNotValid = !enteredValueIsValid && isTouched;

  const onBlureCheckHandler = () => {
    setIsTouched(true);
  };

  const onChangeHandler = (e) => {
    serEnteredValue(e.target.value);
  };

  const resetEnteredValue = () => {
    serEnteredValue('');
  };

  return {
    value: enteredValue,
    isValid: enteredValueIsValid,
    isNotValid: enteredValueIsNotValid,
    onBlur: onBlureCheckHandler,
    onChange: onChangeHandler,
    reset: resetEnteredValue,
  };
};

export default useInput;
