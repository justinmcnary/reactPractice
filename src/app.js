console.log('App.js is running');
const appRoot = document.getElementById('app');

const app = {
  title: 'Indecision',
  subtitle: 'Home of Dalton',
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

//Create remove all button above list of items
//onclick handler wipes app.options


const renderApp = () => {
  //JSX Javascript XML
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options are currently available'}</p>
      <p>{app.options.length}</p>
      <button onClick={resetOptions}>Remove All</button>
      <ol>
        <li>Item one</li>
        <li>Item two</li>
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


