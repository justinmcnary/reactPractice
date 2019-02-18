'use strict';

console.log('App.js is running');
var appRoot = document.getElementById('app');

var app = {
  title: 'Indecision',
  subtitle: 'Home of Dalton',
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault(); //stops fill page reset
  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderApp();
  };
};

var resetOptions = function resetOptions() {
  app.options = [];
  renderApp();
};

//Create remove all button above list of items
//onclick handler wipes app.options


var renderApp = function renderApp() {
  //JSX Javascript XML
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    app.subtitle && React.createElement(
      'p',
      null,
      app.subtitle
    ),
    React.createElement(
      'p',
      null,
      app.options.length > 0 ? 'Here are your options' : 'No options are currently available'
    ),
    React.createElement(
      'p',
      null,
      app.options.length
    ),
    React.createElement(
      'button',
      { onClick: resetOptions },
      'Remove All'
    ),
    React.createElement(
      'ol',
      null,
      React.createElement(
        'li',
        null,
        'Item one'
      ),
      React.createElement(
        'li',
        null,
        'Item two'
      )
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add Option'
      )
    )
  );

  ReactDOM.render(template, appRoot);
};

renderApp();
