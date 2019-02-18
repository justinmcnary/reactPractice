console.log('BUILD IT');
const appRoot = document.getElementById('app');
let visibility = false;

const buttonAction = (e) => {
  e.preventDefault();
  visibility = !visibility;
  renderApp();
}

const renderApp = () => {
  //JSX Javascript XML
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={buttonAction}>{visibility ? 'Hide details' : 'Show details'}</button>
      {visibility && (
        <div>
          <p>Here are some sweet sweet details...</p>
        </div>
      )}
    </div>
  );

  ReactDOM.render(template, appRoot);
};

renderApp();