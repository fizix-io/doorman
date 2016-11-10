import React, { Component } from 'react';

import './App.css';

import Button from './Button';

const getButtonState = ({ isOn, isDown }) => {
  return isOn ? 'on' :
         isDown ? 'down' :
         'off';
}

class App extends Component {

  state = {
    isDown: false,
    isOn: false,
  };

  onTouchStart = event => {
    event.preventDefault();
    this.setState({ isDown: true });

    fetch('/open', { method: 'POST', body: '' })
      .then(() => {
        this.setState({ isOn: true });
        setTimeout(() => this.setState({ isOn: false }), 1000);
      });
  }

  onTouchEnd = event => {
    event.preventDefault();
    this.setState({ isDown: false });
  }

  render() {
    return (
      <div className="App">
        <Button
          onTouchStart={this.onTouchStart}
          onTouchEnd={this.onTouchEnd}
          buttonState={getButtonState(this.state)}
        />
      </div>
    );
  }
}

export default App;
