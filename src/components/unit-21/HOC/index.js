import React from 'react'
import Input from './Input'
import MyHOCContext from './MyHOCContext'

export default class HOC extends React.Component {
  state = {
    student: {
      name: 'Nguyen Van B',
      score: 9
    }
  }

  render() {
    return (
      <MyHOCContext.Provider value={this.state.student}>
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
      </MyHOCContext.Provider>
    )
  }
}
