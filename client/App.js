import React from 'react'
import Error from './Error'
import Column from './Column'

//render a board with 4 columns
// columns a component 

export default class extends React.Component {
  constructor() {
    super()
    this.state = {
    }
  }

  render() {
    return (
      <div style={appComponentStyle}>
        Edit client/App.js to get started
      </div>
    )
  }
}

var appComponentStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  flexDirection: "row"
}
