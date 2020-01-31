import React, { Component } from 'react';

class PetCard extends Component {
  render() {
    const { pet } = this.props;
    
    return (
      <div className="PetCard">
        <img src={pet.imageURL} alt={pet.imageDescription} />


        <h2 className="PetCard__name">{pet.name}</h2>

        <div className="PetCard__content">
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