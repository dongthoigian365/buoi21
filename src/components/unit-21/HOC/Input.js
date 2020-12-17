import React from 'react'
import Card from './Card'
import { MyGlobalContext } from './../../context/MyGlobalContext'
import MyHOCContext from './MyHOCContext'


class Input extends React.Component {
  state = {
    value: '',
    errorMessage: ''
  }

  validate = (value) => {  
    this.setState({
      errorMessage: ''
    })  

    const { type, max } = this.props

    if(type === 'text' && value.length > max) {
      this.setState({
        errorMessage: `Do dai toi da la ${max}`
      })
    }

    if(type === 'number' && value > max) {
      this.setState({
        errorMessage: `Gia tri toi da la ${max}`
      })
    }

  }

  onChange = event => {
    const { value } = event.target

    this.validate(value)

    this.setState({
      value
    })
  }

  componentDidMount() {
    console.log(this.context)
  }

  render() {
    return (
      <>
      <MyGlobalContext.Consumer>
        {
          globalContextValue => (
            <div>
              <label>{this.props.label}</label>
              <input
                type={this.props.type || 'text'}
                onChange={this.onChange}
              />
              {
                this.state.errorMessage &&
                <p style={{ color: 'red' }}>{this.state.errorMessage}</p>
              }
              <p>{globalContextValue.name}</p>

              <hr />
              <MyHOCContext.Consumer>
                {
                  hocContextValue => {
                    <h2>{hocContextValue.name}</h2>
                  }
                }
              </MyHOCContext.Consumer>

              <button onClick={() => globalContextValue.changeAge(globalContextValue.age + 1)}>Change age</button>
          </div>  
          )
        }
      </MyGlobalContext.Consumer>
      </>
    )
  }
}

const InputInCard = MyComponent => class _InputInclass extends React.Component {
  render() {
    return(
      <>
        <Card>
          <MyComponent {...this.props} />
        </Card>
      </>
    )
  }
}

//  
export default InputInCard(Input)
