import React from 'react'
import MyRef from './components/unit-21/MyRef';
import HOC from './components/unit-21/HOC/index'
import { MyGlobalContext } from '../src/components/context/MyGlobalContext'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      conntextValue: {
        name: 'Nguyen Van a',
        age: 12
      }
    }
  }
  changeGlobalContextName = event => {
    const { value } = event.target
    this.setState({
      conntextValue: {
        ...this.state.conntextValue,
        name: value
      }
    })
  }

  render() {
    return(
      <MyGlobalContext.Provider value={this.state.conntextValue}>
        <MyRef />
        <hr />
        <HOC />
        
        <input onChange={this.changeGlobalContextName} />
      </MyGlobalContext.Provider>
    )
  }
}

export default App;
