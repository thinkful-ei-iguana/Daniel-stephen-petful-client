import React, { Component } from 'react';

class PetCard extends Component {
  render() {
    const { pet, adopt, active, nextPets } = this.props;
    const disabled = active ? '' : 'disabled';
    
    return (
      <div className="PetCard">
        <div className="all-images">
            <h4>Upcoming Pets</h4>
          <div className="next-pets">
            {nextPets.map((pet, i) => {
              return <img src={pet.imageURL} alt={pet.imageDescription} key={i} className="next-pet-pic" />
            })}
          </div>
          <div className='pet-pic-container'>
            <h2>Pet up for adoption</h2>
            <img src={pet.imageURL} alt={pet.imageDescription} className="pet-pic" />
          </div>
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