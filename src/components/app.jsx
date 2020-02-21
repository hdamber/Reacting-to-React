import React from "react";

//class based-component with an input and a button//
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "General Kenobi",
      hasLoaded: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({
      hasLoaded: true
    });
  }

  render() {
    if (this.state.hasLoaded) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <React.Fragment>
          <h1>
            Hello there, {this.state.text}! My name is {this.props.name}
          </h1>
          <input
            value={this.state.text}
            onChange={event => {
              this.setState({ text: event.target.value });
            }}
          />

          <h4>Please click the button below</h4>
          <button onClick={this.handleClick}>Click Me</button>
        </React.Fragment>
      );
    }
  }
}

export default App;

//class-based component with an input//
// class App extends React.Component {
//     constructor(props){
//         super(props);

//         this.state = {text: 'General Kenobi'}
//     }

//   render() {
//     return (
//     <React.Fragment>
//         <input value = {this.state.text}
//         onChange={(event) => { this.setState({ text: event.target.value})}} />

//         <h1>Hello there, {this.state.text}! My name is {this.props.name}</h1>
//     </React.Fragment>
//     )

//     }
// }

//class-based component using state//

// class App extends React.Component {
//     constructor(props){
//         super(props);

//         this.state = {text: 'General Kenobi'}
//     }

//   render() {
//     return <h1>Hello there, {this.state.text}! My name is {this.props.name}</h1>;
//   }
// }

//functional component//

// function App (props) {
//     return (
//     <h1>Hello there {props.name}!</h1>
//     )
// }
