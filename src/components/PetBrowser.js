import React from "react";
import Pet from "./Pet";

function PetBrowser({petList, filteredPets}) {
  const pets = filteredPets.length > 0 ? filteredPets : petList;
  return <div className="ui cards">
    {pets.map((pet) => {
      return (
            <Pet pet={pet} key={pet.id}/>
      )
    })}
  </div>;
}

export default PetBrowser;