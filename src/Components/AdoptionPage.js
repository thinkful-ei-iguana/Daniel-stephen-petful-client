import React, { Component } from 'react';
import config from '../config';
import PetCard from './PetCard';
import './AdoptionPage.css';
import Line from './Line';
import RecentAdoptions from './RecentAdoptions';

const names = ['Daniel', 'Barbara', 'Peter', 'Stephen', 'Sherry', 'Siri', 'Rudolph', 'Linda', 'Sri', 'Someone you know', 'Garfield', 'Alex', 'Maru', 'Penny', 'Sebastian', 'Gus', 'Emily', 'Pierre'];
const REACT_APP_API_BASE = config.REACT_APP_API_BASE;


class AdoptionPage extends Component {  
  state = {
    currUser: '',
    adoptUser: '',
    userLine: [], 
    currPet: {},
    currCat: {},
    currDog: {},
    recAdopt: [],
  }
  
  deleteDog = () => {
    fetch(`${REACT_APP_API_BASE}/dog`, {
      method: 'DELETE'
    });
  }

  getDog = () => {
    fetch(`${REACT_APP_API_BASE}/dog`)
      .then(res => res.json())
      .then(dog => {
        console.log(dog);
        this.setState({currDog: dog});
      })
  }

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

  deleteCat = () => {
    fetch(`${REACT_APP_API_BASE}/cat`, {
      method: 'DELETE'
    });
  }

  getCat = () => {
    fetch(`${REACT_APP_API_BASE}/cat`)
      .then(res => res.json())
      .then(cat => {
        this.setState({currCat: cat});
      })
  }

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

  adoptPet = (pet) => {
    const petDelete = pet.name === this.state.currDog.name ?
        this.deleteDog : this.deleteCat;
 
    Promise.all([this.deleteUser(), this.deletePet(), petDelete()])
      .then(() => {
        this.getCat();
        this.getDog();
        this.getPet();
        this.getUsers();
      })
  }

  componentDidMount() {
    const name = names[Math.floor(Math.random()*(names.length-1))+1];
    // this.addUser(name);
    // this.addUser(name);

    this.getCat();
    this.getDog();
    this.getPet();
    this.getUsers();

    setInterval(() => {
      const name = names[Math.floor(Math.random()*(names.length-1))];      
      this.adoptPet(this.state.currPet);
      this.addUser(name);
    }, 30000);
  }

  render() {
    return (
      <div className='adoption-container'>
        <div className="cards-container">
          <PetCard pet={this.state.currDog} />
          <PetCard pet={this.state.currCat} />
        </div>
        <Line users={this.state.userLine} />
        <RecentAdoptions adoptions={this.state.recAdopt} />
      </div>
    );
  }
}

export default AdoptionPage;