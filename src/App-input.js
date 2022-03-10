import React, { Component } from 'react'

export class AppInput extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: "",
      firstName: "",
      lastName: "",
    }
  }

  handleOnInputChange = (event) => {
    console.log(event.target.value)
    this.setState({
      email: event.target.value,
    })
  }

  handleFirstNameChange = (event) => {
    this.setState({
      firstName: event.target.value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
  }

  handleLastNameChange = (event) => {
    this.setState({
      lastName: event.target.value
    })
  }

  handleOnClickEvent = () => {
    console.log('Lastname is:', this.state.lastName)
  }

  handleOnChange = (event) => {
    // console.log(event.target.name, event.target.value)
    this.setState({
      [event.target.name]: event.target.value,
    })
    // console.log(this.state)
  }

  render() {
    return (
      <div>

        <input name="email" value={this.state.email} onChange={this.handleOnInputChange}></input>
        <p>{this.state.email}</p>

        {/* OnSubmit Version */}
        <form onSubmit={this.handleOnSubmit}>
          <input
            name="firstname"
            value={this.state.firstName}
            onChange={this.handleFirstNameChange}
          />
          <p>{this.state.firstName}</p>
          <button>Submit</button>
        </form>

        {/* OnClick version */}
        <input
          name="lastname"
          value={this.state.lastName}
          onChange={this.handleLastNameChange}
        />
        <button onClick={this.handleOnClickEvent}>Submit</button>

        {/* one onChange for input */}
        <form onSubmit={this.handleOnSubmit}>
          <input name="email" value={this.state.email} onChange={this.handleOnChange} />
          <input name="firstName" value={this.state.firstName} onChange={this.handleOnChange} />
          <input name="lastName" value={this.state.lastName} onChange={this.handleOnChange} />
          <button>Submit</button>
        </form>

      </div>
    )
  }
}

export default AppInput