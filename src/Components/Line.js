import React, { Component } from 'react';

class Line extends Component {
  render() {
    const { users } = this.props;

    return (
      <div className="user-line-container">
        <h3>Users waiting to adopt</h3>
        <ul className="Line">
          {users.map((user, i) => {
            return <li className="Line__user-name" key={i}>{user}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default Line;