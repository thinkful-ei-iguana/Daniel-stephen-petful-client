import React, { Component } from 'react';

class RecentAdoptions extends Component {
  render() {
    const adoptions = this.props;

    return (
      <ul className="RecentAdoptions">
        {adoptions.map(adoption => {
          return (
            <li className="RecentAdoptions__adoption">
            <p>{adoption.user} adopted {adoption.pet}</p>
            </li>
          )
        })}
      </ul>
    )
  };
}

export default RecentAdoptions;