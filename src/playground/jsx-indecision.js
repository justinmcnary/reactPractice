console.log('indecision is running');
const appRoot = document.getElementById('app');

const app = {
  title: 'Really, what do you want to do?',
  subtitle: 'Let\'s not argue. Math can help us decide what to do!',
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault(); //stops fill page reset
  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderApp();
  };
};

const resetOptions = () => {
  app.options = [];
  renderApp();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  console.log(option);
};


const renderApp = () => {
  //JSX Javascript XML
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options are currently available'}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What Should I do?</button>
      <button onClick={resetOptions}>Remove All</button>
      <ol>
        {app.options.map((option) => <li key={option}>{option}</li>)}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

renderApp();


