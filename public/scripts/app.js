'use strict';

console.log('App.js is running');
var appRoot = document.getElementById('app');

var app = {
  title: 'The Double Deuce',
  subtitle: 'Home of Dalton',
  options: ['One', 'Two']
};

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
  )
);
// ReactDOM.render(template, appRoot);

var count = 0;
var incrementCount = function incrementCount() {
  count++;
  renderCounterApp();
};
var subtractCount = function subtractCount() {
  count--;
  renderCounterApp();
};
var resetCount = function resetCount() {
  count = 0;
  renderCounterApp();
};

var renderCounterApp = function renderCounterApp() {
  var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Count: ',
      count
    ),
    React.createElement(
      'button',
      { onClick: incrementCount },
      '+1'
    ),
    React.createElement(
      'button',
      { onClick: subtractCount },
      '-1'
    ),
    React.createElement(
      'button',
      { onClick: resetCount },
      'Reset'
    )
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
