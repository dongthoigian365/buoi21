import React from 'react'
import Input from './Input'

export default class HOC extends React.Component {
  render() {
    return (
      <>
        <h1>Su dung HOC trong React</h1>

        <Input
          type='text'
          label='Nhap name'
          max='10'
        />
        <br />
        <Input
          type='number'
          label='Nhap tuoi'
          max={10}
        />
      </>
    )
  }
}
