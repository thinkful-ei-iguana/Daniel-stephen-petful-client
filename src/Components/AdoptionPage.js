import React, { Component } from 'react';
import config from '../config';
import PetCard from './PetCard';
import './AdoptionPage.css';
import Line from './Line';
import RecentAdoptions from './RecentAdoptions';
import UserInput from './UserInput';
import Queue from '../Queue';

const names = ['Daniel', 'Barbara', 'Peter', 'Stephen', 'Sherry', 'Siri', 'Rudolph', 'Linda', 'Sri', 'Someone you know', 'Garfield', 'Alex', 'Maru', 'Penny', 'Sebastian', 'Gus', 'Emily', 'Pierre'];
const REACT_APP_API_BASE = config.REACT_APP_API_BASE;


class AdoptionPage extends Component {  
  state = {
    currUser: '',
    userLine: new Queue(), 
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
    const q = new Queue();
    let node = this.state.userLine.first.next;
    while (node !== null) {
      q.enqueue(node.value);
      node = node.next;
    }
    this.setState({userLine: q});
  }

  queueUser = (name) => {
    this.setState({currUser: name});
    
    const q = new Queue();
    let node = this.state.userLine.first;
    while (node !== null) {
      q.enqueue(node.value);
      node = node.next;
    }
    q.enqueue(name);
    this.setState({userLine: q});
  }

  adoptPet = (user, pet) => {
 
    Promise.all([
      this.deleteUser(), this.deletePet()])
      .then(() => {
        this.getPet();
      })
    const adopt = {user: user, pet: pet.name};
    this.setState({recAdopt: [...this.state.recAdopt, adopt]});
  }

  componentDidMount() {
    const name = names[Math.floor(Math.random()*(names.length-1))+1];

    this.getPet();

    setInterval(() => {
      if (this.state.userLine.first && this.state.userLine.first.value !== this.state.currUser) {
        let name = names[Math.floor(Math.random()*(names.length-1))];      
        this.adoptPet(this.state.userLine.first.value, this.state.currPet);
        this.queueUser(name);
      }
    }, 30000);
  }

  render() {
    const disabled = 
      this.state.userLine.first && this.state.currUser === this.state.userLine.first.value ?
      '' : 'disabled';

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
          onClick={() => this.adoptPet(this.state.userLine.first.value, this.state.currPet)}
          disabled={disabled}
        >
          Adopt {this.state.currPet.name}
        </button>
        <UserInput queueUser={this.queueUser} />
        <div className="util-container">
          <Line users={this.state.userLine} />
          <RecentAdoptions 
            adoptions={this.state.recAdopt} 
          />
        </div>
      </div>
    );
  }
}

export default AdoptionPage;