import React, { Component } from 'react'
import Counter from './Counter'

class MyRef extends Component {
  state = {

  }

  
  constructor(props) {
    super(props)
    this.myH2 = React.createRef() 
    this.myCounter = React.createRef()
    this.changeH2Color = this.changeH2Color.bind(this)
    this.increment = this.increment.bind(this)
  }

  changeH2Color = () => {
    const h2 = this.myH2.current
    if (!h2.style.background || h2.style.background === 'red') {
      h2.style.background = 'green'
    } else {
      h2.style.background = 'red'
    }
  }

  increment = () => {
    // this.myCounter.current.increment
    this.myCounter.current.setState({
      count: 20
    })
  }

  componentDidMount() {    
    this.changeH2Color()
    console.log(this.myCounter)
  }
 
  render() {

    return (
      <>
        <h1>Su dung refs trong react</h1>

        <h2 ref={this.myH2}>Refs voi class component</h2>

        <button onClick={this.changeH2Color}>Thay doi mau h2</button>

        <br />

        <Counter ref={this.myCounter}/>

        <hr />
        <button onClick={this.increment}>Increment by parent</button>
      </>
    )
  }
}

export default MyRef
