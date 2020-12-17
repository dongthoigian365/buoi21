import React, { useState, useEffect } from 'react'

const Form = ({ color }) => {
  const [name, setname] = useState('')
  const [age, setage] = useState(0)
  const [score, setscore] = useState(0)
  // console.log('props', color)

  useEffect(() => {
    console.log('lan dau tien render')

    return () => {
      console.log('Form da bi go khoi trang')
    }
  }, [])

  // useEffect(() => {
  //   console.log('rung')
  // })

  useEffect(() => {
    console.log('name bi thay doi')
  }, [name, score])

  return (
    <>
      <h1>Tao components</h1>
      <p>Nhap ten:</p>
      <input value={name} onChange={event => setname(event.target.value)} />
      <p>Nhap tuoi:</p>
      <input type='number' value={age} onChange={event => setage(event.target.value)} />
      <p>Nhap diem:</p>
      <input type='number' value={score} onChange={event => setscore(event.target.value)} />

    </>
  )
}

Form.defaultProps = {
  color: 'red'
}

export default Form