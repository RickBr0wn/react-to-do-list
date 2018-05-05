import React, { Component } from 'react';
import Title from './Components/Title'
import ToDoList from './Components/ToDoList.js'
import Footer from './Components/Footer'


class App extends Component {
  render() {
    const styles = {
      marginTop: '2.25rem',

      padding: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      maxWidth: '500px',
      boxShadow: '10px 10px 50px -9px rgba(0,0,0,0.75)'
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
