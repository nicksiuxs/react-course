import React, { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value = 0 }) => {
  const [counter, setCounter] = useState(value);

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleSubtract = () => {
    setCounter(counter - 1);
  };

  const handleReset = () => {
    setCounter(value);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2> {counter} </h2>
      <button onClick={handleSubtract}> -1 </button>
      <button onClick={handleAdd}> +1 </button>
      <button onClick={handleReset} aria-label="btn-reset">
        Reset
      </button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};

export default CounterApp;
