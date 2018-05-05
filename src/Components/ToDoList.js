import React from 'react'

class ToDoList extends React.Component{
  render(){
    const styles = {
      border: '1px #ccc solid',
      padding: '20px',
      textAlign: 'center',
      marginBottom: '1.25rem'
    }

    return(
      <div style={styles}>
        TO DO LIST
      </div>
    )
  }
}

export default ToDoList