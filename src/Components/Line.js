import React, { Component } from 'react';

class Line extends Component {
  render() {
    const users = this.props;

    return (
      <ul className="Line">
        {users.map(user => {
          return <li className="Line__user-name">{user.user_name}</li>
        })}
      </ul>
    )
  }
}

export default Line;