import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >

          Learn React!!

          <MyComponent/>

        </a>
      </header>
    </div>
  );
}




class MyComponent extends React.Component {

  state = {
    data: "default data: backend server could not be reached"
  }

  componentDidMount() {
    fetch('http://127.0.0.1:8000')
      .then(response => response.json())
      .then(data => {
        console.log('hi')
        this.setState({data});
      });
  }
  render() {
    return (
      <div>
        {this.state.data}
      </div>
    );
  }
}

export default App;
