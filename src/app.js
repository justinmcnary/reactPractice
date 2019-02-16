console.log('App.js is running');
const appRoot = document.getElementById('app');

const app = {
  title: 'The Double Deuce',
  subtitle: 'Home of Dalton',
  options: ['One', 'Two']
};

//JSX Javascript XML
const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No options are currently available'}</p>
  </div>
);
// ReactDOM.render(template, appRoot);

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
