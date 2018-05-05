import React from 'react'
import TitleImage from './TitleImage'

const styles = {
  padding: '20px',
  textAlign: 'center',
  marginBottom: '1.25rem',
  flex: 1,
  fontSize: '48px',
  color: '#36698B'
}

const Title = () => {
  return(
    <div style={styles}>
      <TitleImage />
      To Do List
    </div>
  )
}

export default Title