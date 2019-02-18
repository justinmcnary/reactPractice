let count = 0;
const incrementCount = () => {
  count++;
  renderCounterApp();
};
const subtractCount = () => {
  count--;
  renderCounterApp();
};
const resetCount = () => {
  count = 0;
  renderCounterApp();
};

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={incrementCount}>+1</button>
      <button onClick={subtractCount}>-1</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();