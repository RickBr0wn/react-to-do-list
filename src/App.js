import React, { Component } from 'react';
import Title from './Components/Title'
import ToDoList from './Components/ToDoList.js'
import Footer from './Components/Footer'


class App extends Component {
  render() {
    const styles = {
      border: '1px #ccc solid',
      padding: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      maxWidth: '500px'
    }

    return (
      <div className="container" style={styles}>
        <Title />
        <ToDoList />
        <Footer />
      </div>
    );
  }
}

export default App;
