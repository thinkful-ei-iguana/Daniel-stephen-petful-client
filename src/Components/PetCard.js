import React, { Component } from 'react';

class PetCard extends Component {
  render() {
    const { pet, adopt, active } = this.props;
    const disabled = active ? '' : 'disabled';
    
    return (
      <div className="PetCard">
        <div className='pet-pic-container'>
          <img src={pet.imageURL} alt={pet.imageDescription} className="pet-pic" />

        </div>


        <h2 className="PetCard__name">{pet.name}</h2>

        <div className="PetCard__content">
          <p className="Petcard__desc">{pet.imageDescription}</p>
          <p className="PetCard__breed">{pet.breed}</p>
          <p className="Petcard__sex">{pet.sex}</p>
          <p className="PetCard__age">{pet.age} years</p>
          <p className="PetCard__story">Story: {pet.story}</p>
        </div>
        
      </div>
    )
  }
}

export default PetCard;