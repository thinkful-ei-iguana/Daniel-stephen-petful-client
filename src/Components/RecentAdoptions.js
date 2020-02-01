import React, { Component } from 'react';

class RecentAdoptions extends Component {
  render() {
    const { adoptions } = this.props;

    return (
      <div className="recent-adoptions-container">
        <h3>Recent Adoptions</h3>
        <ul className="RecentAdoptions">
          {adoptions.map((adoption, i) => {
            return (
              <li className="RecentAdoptions__adoption" key={i}>
                <p>{adoption.user} adopted {adoption.pet}</p>
              </li>
            )
          })}
        </ul>
      </div>
    )
  };
}

export default RecentAdoptions;