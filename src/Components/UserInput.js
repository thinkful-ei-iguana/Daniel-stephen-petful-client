import React, { Component } from 'react';

class UserInput extends Component {
  state = {
    user_name: ""
  }

  handleSubmit(event) {
    event.preventDefault();
    const { queueUser } = this.props;
    queueUser(this.state.user_name);
    this.setState({
      user_name: ""
    })
  }

  handleUserName(event) {
    this.setState({
      user_name: event.target.value
    })
  }

  render() {
    return (
      <div className="UserInput">
        <form className="UserInput__form">
          <label htmlFor="user_name">
            Get your spot for your new BEST FRIEND!
          </label>

          <input type="text" id="user_name" placeholder="Your name here" onChange={event => this.handleUserName(event)}/>

          <button className="UserInput__button" onClick={event => this.handleSubmit(event)}>Line up</button>
        </form>
      </div>
    )
  }
}

export default UserInput;