import React from 'react'
// import Card from './HOC/Card'

class Counter extends React.Component {
    state = {
        count: 0
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return(
            <>
                <h3>{this.state.count}</h3>
                <button onClick={this.increment}>Increment</button>
            </>
        )
    }
}

// const CounterInCard = MyComponent => class _CounterInclass extends React.Component {
//     render() {
  
//       return(
//         <>
//           <Card>
//             <MyComponent {...this.props} />
//           </Card>
//         </>
//       )
//     }
//   }

export default Counter 

