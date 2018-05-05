import React from 'react'
import { Table } from 'reactstrap'

class ToDoList extends React.Component{
  constructor(props){
    super(props)
      this.state = {
        toDoItems: ['Chore 1', 'Chore 2', 'Chore 3', 'Chore 4']
      }
  }

  addItem(event){
    event.preventDefault()
    const newItem = this.newItem.value

    this.setState({
      toDoItems: [...this.state.toDoItems, newItem]
    })

    this.newItem.value = ''
  }

  render(){
    const { toDoItems } = this.state
    const styles = {
      border: '1px #ccc solid',
      padding: '20px',
      marginBottom: '1.25rem'
    }

    return(
      <div>
        <header>
          <form>
            <div className="input-group">
              <input ref={input => this.newItem = input} type="text" className="form-control" placeholder="Please Enter A Task" style={{marginBottom: '1.25rem'}} />
              <span className="input-group-button">
                <button onClick={event => this.addItem(event)} className="btn btn-outline-success" type="button" >Submit</button>
              </span>
            </div>
          </form>
        </header>
        <div style={styles}>
          <Table >
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
                      <td style={{textAlign: 'right'}}>
                        <button className="btn btn-outline-success btn-sm" style={{marginLeft: '3px', marginRight: '3px'}}>1</button>
                        <button className="btn btn-outline-warning btn-sm" style={{marginLeft: '3px', marginRight: '3px'}}>1</button>
                        <button className="btn btn-outline-danger btn-sm" style={{marginLeft: '3px'}}>1</button>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </Table>
        </div>
      </div>
    )
  }
}

export default ToDoList