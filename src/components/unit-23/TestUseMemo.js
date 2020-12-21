import React, { useState, useEffect, useLayoutEffect, useMemo } from 'react'

const TestUseMemo = () => {
  const [count, setCount] = useState(1)
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
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  )
}

export default TestUseMemo