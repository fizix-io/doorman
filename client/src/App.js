import React, { Component } from 'react';
import './App.css';

class Circle extends Component{
  render() {
    return (
      <div className={`bell ${this.props.active ? 'belling' : '' }`}
        onTouchStart={this.props.onTouchStart}
        onTouchEnd={this.props.onTouchEnd}

        onMouseDown={this.props.onTouchStart}
        onMouseUp={this.props.onTouchEnd}
      />
    )
  }
}

Circle.propTypes = {
  onTouchStart: React.PropTypes.func,
  onTouchEnd: React.PropTypes.func,
  active: React.PropTypes.bool,
}

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      active: false
    };
  }

  openDoor = () => {
    this.setState({ ...this.state, active: true })
    // fetch('https://google.com');
  }

  stop = () => {
    this.setState({ ...this.state, active: false });
  }

  render() {
    return (
      <div className="App layout">
        <Circle
          onTouchStart={this.openDoor}
          onTouchEnd={this.stop}
          active={this.state.active}
        />
      </div>
    );
  }
}

export default App;
