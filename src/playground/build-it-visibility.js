console.log('BUILD IT!');
class Visibility extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);

    this.state = {
      visibility: false
    }
  }

  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>{this.state.visibility === false ? 'Show details' : 'Hide deatails'}</button>
        <p>{this.state.visibility === true ? 'Here are some sweet sweet details...' : ''}</p>
      </div>
    );
  }
}

ReactDOM.render(<Visibility />, document.getElementById('app'));

// console.log('BUILD IT');
// const appRoot = document.getElementById('app');
// let visibility = false;

// const buttonAction = (e) => {
//   e.preventDefault();
//   visibility = !visibility;
//   renderApp();
// }

// const renderApp = () => {
//   //JSX Javascript XML
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={buttonAction}>{visibility ? 'Hide details' : 'Show details'}</button>
//       {visibility && (
//         <div>
//           <p>Here are some sweet sweet details...</p>
//         </div>
//       )}
//     </div>
//   );

//   ReactDOM.render(template, appRoot);
// };

// renderApp();