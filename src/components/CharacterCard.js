import React from 'react';

const CharacterCard = ({ character, index }) => {
  return (
    <div 
      className="card h-100 shadow-lg character-card"
      style={{ 
        animation: `slideIn 0.5s ease-out ${index * 0.1}s forwards`,
        opacity: 0 
      }}
    >
      <div className="character-image-container">
        <img 
          src={process.env.PUBLIC_URL + `/images/characters/${character.image}`}
          alt={character.name}
          className="character-image"
        />
      </div>
      <div className="card-body text-white">
        <h3 className="card-title mb-3">{character.name}</h3>
        <p className="card-text mb-4">{character.description}</p>
        <div className="traits-wrapper">
          {character.traits.map((trait, i) => (
            <span key={i} className="trait-badge">
              {trait}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;