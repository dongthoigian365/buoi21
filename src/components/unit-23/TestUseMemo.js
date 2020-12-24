import React, { useState, useEffect, useMemo, useReducer } from 'react'

const myReducer = (state, action) => {
  switch(action.type) {
    case 'ICREMENT': {
      return {
        ...state,
        count: state.count + 1
      }
    }
    case 'DECREMENT': {
      return {
        ...state,
        count: state.count - 1
      }
    }
    default:
      return state
  }
}

const TestUseMemo = () => {
  // const [count, setCount] = useState(1)
  // const [a, setA] = useState(2)
  // const [b , setB] = useState(3)
  // const [name] = useState('Nguyen Van A')
  const [state, dispatch] = useReducer(myReducer, {count: 2, name: 'Nguyen Van A'})

  // const c = useMemo(() => {
  //   // console.log('___useMemo dc goi')
  //   return a + b
  // }, [a, b])

  // console.log('sum', c)
  // useEffect(() => {
  //   console.log('___useEffect')
  // }, [name])

  return (
    <>
      <h1>TestUseMemo</h1>
      <h1>Count: {state.count}</h1>
      {/* <h1>Sum: {c}</h1> */}
      {/* <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setA(a + 1)}>Increment A</button> */}
      <button onClick={() => dispatch({type: 'ICREMENT'})}>Increment Count</button>
      <button onClick={() => dispatch({type: 'DECREMENT'})}>Decrement Count</button>
    </>
  )
}

export default TestUseMemo