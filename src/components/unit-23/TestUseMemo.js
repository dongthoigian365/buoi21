import React, { useState, useEffect, useMemo } from 'react'

const TestUseMemo = () => {
  const [count, setCount] = useState(1)
  const [a, setA] = useState(2)
  const [b , setB] = useState(3)
  const [name] = useState('Nguyen Van A')

  useMemo(() => {
    return name
  }, [name])

  useEffect(() => {
    console.log('___useEffect')
  }, [name])

  return (
    <>
      <h1>TestUseMemo</h1>
      <h1>Count: {count}</h1>
      <h1>Sum: {a + b}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  )
}

export default TestUseMemo