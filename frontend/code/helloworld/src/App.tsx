import React, { Component } from "react"
import AddName from './containers/AddName'
import VisibleNameList from './containers/VisibleNameList'

class App extends Component {
  render() {
    return (
      <div>
        <h2>Hello React TS!</h2>
        <AddName />
        <VisibleNameList />
      </div>
    );
  }
}

export default App;