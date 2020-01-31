import React, { Component } from 'react';
import baseUrl from '../config';
import PetCard from './petCard';

const names = ['Daniel', 'Barbara', 'Peter', 'Stephen', 'Sherry', 'Siri', 'Rudolph', 'Linda', 'Sri', 'Someone you know', 'Garfield', 'Alex', 'Maru', 'Penny', 'Sebastian', 'Gus', 'Emily', 'Pierre'];

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
    fetch(`${baseUrl}/dog`, {
      method: 'DELETE'
    });
  }

  getDog = () => {
    fetch(`${baseUrl}/dog`)
      .then(res => res.json())
      .then(res => {
        this.setState({currDog: res.body});
      })
  }

  deletePet = () => {
    fetch(`${baseUrl}/pet`, {
      method: 'DELETE'
    });
  }

  getPet = () => {
    fetch(`${baseUrl}/pet`)
      .then(res => res.json())
      .then(res => {
        this.setState({currPet: res.body});
      })
  }

  deleteCat = () => {
    fetch(`${baseUrl}/cat`, {
      method: 'DELETE'
    });
  }

  getCat = () => {
    fetch(`${baseUrl}/cat`)
      .then(res => res.json())
      .then(res => {
        this.setState({currCat: res.body});
      })
  }

  deleteUser = () => {
    fetch(`${baseUrl}/line`, {
      method: 'DELETE'
    });
  }

  addUser = (user) => {
    fetch(`${baseUrl}/line`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify({name: user})
    })
  }

  getUsers = () => {
    fetch(`${baseUrl}/line`)
      .then(res => res.json())
      .then(res => {
        this.setState({userLine: res.body});
      })
  }

  componentDidMount() {
    const name = names[Math.floor(Math.random()*(names.length-1))+1];
    this.addUser(name);
    this.addUser(name);

    this.getCat();
    this.getDog();
    this.getPet();
    this.getUsers();

    setInterval(() => {
      const name = names[Math.floor(Math.random()*(names.length-1))+1];
      
      const petDelete = this.currPet.name === this.currDog.name ?
        this.deleteDog : this.deleteCat;
      this.deleteUser();
      this.addUser(name);
      this.deletePet();
      petDelete();
    }, 30000);
  }

  render() {
    return (
      <div className='adoption-container'>
        <PetCard />
        <PetCard />
      </div>
    );
  }
}

export default AdoptionPage;