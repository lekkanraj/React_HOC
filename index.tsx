import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
          <AddIcon />
        </p>
      </div>
    );
  }
}

let Button = (props) => {
  return <button name="add">Add</button>;
};

let AddIcon = (props) => {
  return <i>{props.children} Icon</i>;
};

//let NewComp=AddIcon(Button);

render(<App />, document.getElementById('root'));
