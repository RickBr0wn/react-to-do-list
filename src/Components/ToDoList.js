import React from 'react'
import { Table } from 'reactstrap'

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
        <Table>
        <thead>
          <tr>
            <th>Task #</th>
            <th>Task</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Blah</td>
            <td>Button Button Button</td>
          </tr>
        </tbody>
      </Table>
      </div>
    )
  }
}

export default ToDoList