import React from 'react'

class ControlPanel extends React.Component{
  render(){
    const styles = {
      border: '1px #ccc solid',
      padding: '20px',
      textAlign: 'center',
      marginBottom: '1.25rem'
    }

    return(
      <div style={styles}>
        CONTROL PANEL
      </div>
    )
  }
}

export default ControlPanel