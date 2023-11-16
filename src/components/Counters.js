import React from "react";

const Counters = () => {
  const [counter, setCounter] = React.useState({
    value: 0,
  });

  function updateCounter(e) {
    const { name } = e.target;
    setCounter((prevNumber) => ({
      ...prevNumber,
      value: name === "increase" ? counter.value + 1 : counter.value - 1,
    }));
    console.log(counter.value);
  }
  return (
    <div className="counter">
      <div className="show">
        <input
          type="text"
          className="show-counter"
          name="counter"
          readOnly="True"
          value={counter.value}
        />
      </div>
      <div className="buttons">
        <button
          className="decrease-button"
          name="decrease"
          onClick={updateCounter}
        >
          -
        </button>
        <button
          className="increase-button"
          name="increase"
          onClick={updateCounter}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counters;
