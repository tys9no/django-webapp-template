import React, { Component } from "react"
import AddName from './containers/AddName'
import VisibleNameList from './containers/VisibleNameList'
import GetUsers from './containers/GerUsers'
import VisibleUserList from './containers/VisibleUserList'

class App extends Component {
  render() {
    return (
      <div>
        <h2>Hello React TS!</h2>
        <AddName />
        <VisibleNameList />
        <GetUsers />
        <VisibleUserList />
      </div>
    );
  }
}

export default App;
