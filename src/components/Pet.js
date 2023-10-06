import React, { useState } from "react";

function Pet({ pet }) {
  const [showAdopted, setShowAdopted] = useState(false);
  const [showAvailable, setShowAvailable] = useState(true);

  function handleAdopt() {
    setShowAdopted(true);
    setShowAvailable(false);
  }

  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">{pet.name}</span>
        <h3>{pet.isAdopted ? "Adopted" : "Available"}</h3>

        <p>{pet.gender}</p>
        <div className="meta">
          <span className="date">{pet.type}</span>
        </div>
        <div className="description">
          <p>Age: {pet.age}</p>
          <p>Weight: {pet.weight}</p>
        </div>
      </div>
      <div className="extra content">
        {showAdopted ? (
          <button className="ui disabled button">Already adopted</button>
        ) : null}
        {showAvailable ? (
          <button className="ui primary button" onClick={handleAdopt}>
            Adopt pet
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default Pet;