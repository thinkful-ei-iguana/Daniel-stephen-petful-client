import React, { Component } from 'react';
import config from '../config';
import PetCard from './PetCard';
import './AdoptionPage.css';
import Line from './Line';
import RecentAdoptions from './RecentAdoptions';
import UserInput from './UserInput';

const names = ['Daniel', 'Barbara', 'Peter', 'Stephen', 'Sherry', 'Siri', 'Rudolph', 'Linda', 'Sri', 'Someone you know', 'Garfield', 'Alex', 'Maru', 'Penny', 'Sebastian', 'Gus', 'Emily', 'Pierre'];
const REACT_APP_API_BASE = config.REACT_APP_API_BASE;


class AdoptionPage extends Component {  
  state = {
    currUser: '',
    adoptUser: '',
    userLine: [], 
    currPet: {},
    recAdopt: [],
  }
  
  // deleteDog = () => {
  //   fetch(`${REACT_APP_API_BASE}/dog`, {
  //     method: 'DELETE'
  //   });
  // }

  deletePet = () => {
    fetch(`${REACT_APP_API_BASE}/pet`, {
      method: 'DELETE'
    });
  }

  getPet = () => {
    fetch(`${REACT_APP_API_BASE}/pet`)
      .then(res => res.json())
      .then(pet => {
        this.setState({currPet: pet});
      })
  }

  // deleteCat = () => {
  //   fetch(`${REACT_APP_API_BASE}/cat`, {
  //     method: 'DELETE'
  //   });
  // }

  deleteUser = () => {
    fetch(`${REACT_APP_API_BASE}/line`, {
      method: 'DELETE'
    });
  }

  addUser = (user) => {
    fetch(`${REACT_APP_API_BASE}/line`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify({user_name: user})
    })
  }

  getUsers = () => {
    fetch(`${REACT_APP_API_BASE}/line`)
      .then(res => res.json())
      .then(line => {
        this.setState({userLine: line});
      })
  }

  queueUser = (name) => {
    this.setState({currUser: name});
    this.addUser(name);
  }

  adoptPet = (pet) => {
 
    Promise.all([this.deleteUser(), this.deletePet()])
      .then(() => {
        this.getPet();
        this.getUsers();
      })
  }

  componentDidMount() {
    const name = names[Math.floor(Math.random()*(names.length-1))+1];

    this.getPet();
    this.getUsers();

    setInterval(() => {
      if (this.state.adoptUser !== this.state.currUser) {
        let name = names[Math.floor(Math.random()*(names.length-1))];      
        this.adoptPet(this.state.currPet);
        this.addUser(name);
      }
    }, 30000);
  }

  render() {
    const disabled = 
      this.state.currUser === this.state.adoptUser ?
      'disabled' : '';

    return (
      <div className='adoption-container'>
        <div className="cards-container">
          <PetCard 
            pet={this.state.currPet} 
            adopt={this.adoptPet}
          />
        </div>
        <button 
          className="adopt-btn"
          onClick={() => this.adoptPet(this.state.currPet)}
          disabled={disabled}
        >
          Adopt {this.state.currPet.name}
        </button>
        <Line users={this.state.userLine} />
        <RecentAdoptions 
          adoptions={this.state.recAdopt} 
          queueUser={this.queueUser}
        />
      </div>
    );
  }
}

export default AdoptionPage;