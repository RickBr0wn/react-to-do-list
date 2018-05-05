import React from 'react'
import { Table } from 'reactstrap'

class ToDoList extends React.Component{
  render(){
    const toDoItems = ['Chore 1', 'Chore 2', 'Chore 3', 'Chore 4']
    const styles = {
      border: '1px #ccc solid',
      padding: '20px',
      marginBottom: '1.25rem'
    }

    return(
      <div style={styles}>
        <Table>
        <thead>
          <tr>
            <th style={{maxWidth: '75px'}}>Task #</th>
            <th >Task</th>
            <th style={{textAlign: 'right'}}>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            toDoItems.map((item, index) => {
              return(
                <tr key={item}>
                  <th style={{maxWidth: '75px'}} scope="row">{index + 1}</th> 
                  <td>{item}</td>
                  <td style={{textAlign: 'right'}}>O O O</td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
      </div>
    )
  }
}

export default ToDoList