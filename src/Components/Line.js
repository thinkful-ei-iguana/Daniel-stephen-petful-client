import React, { Component } from 'react';

class Line extends Component {
  render() {
    let { users } = this.props;
    const usersArr = [];
    let node = users.first;
    while(node) {
      usersArr.push(node.value);
      node = node.next;
    }

    return (
      <div className="user-line-container">
        <h3>Users waiting to adopt</h3>
        <ul className="Line">
          {usersArr.map((user, i) => {
            return <li className="Line__user-name" key={i}>{user}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default Line;