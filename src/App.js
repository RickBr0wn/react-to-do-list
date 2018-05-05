import React, { Component } from 'react';
import Title from './Components/Title'


class App extends Component {
  render() {
    const styles = {
      display: 'flex'
    }

    return (
      <div className="container" style={styles}>
        <Title />
      </div>
    );
  }
}

export default App;
