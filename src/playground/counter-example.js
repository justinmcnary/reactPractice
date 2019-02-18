class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0
    }
  }

  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    });
  }
  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      }
    });
  }
  handleReset() {
    this.setState(() => {
      return {
        count: 0
      }
    });
  }

  render() {
    return(
    <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
    </div>
    )
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'));



// let count = 0;
// const incrementCount = () => {
//   count++;
//   renderCounterApp();
// };
// const subtractCount = () => {
//   count--;
//   renderCounterApp();
// };
// const resetCount = () => {
//   count = 0;
//   renderCounterApp();
// };

// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={incrementCount}>+1</button>
//       <button onClick={subtractCount}>-1</button>
//       <button onClick={resetCount}>Reset</button>
//     </div>
//   );

//   ReactDOM.render(templateTwo, document.getElementById('app'));
// };

// renderCounterApp();