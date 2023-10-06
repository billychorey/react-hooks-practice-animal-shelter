import React, { useState, useEffect } from "react";
import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [filteredPets, setFilteredPets] = useState({ type: "all" });
  const [petList, setPetList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/pets')
    .then(res => res.json())
    .then(pets => setPetList(pets))

  }, [])
  function filterPets(selectedValue) {
    //filter here
    if (selectedValue === "all") {
      setFilteredPets(petList);
    } else {
      const filteredPets = petList.filter((pet) => pet.type === selectedValue);
      setFilteredPets(filteredPets);
      console.log(filteredPets)
    }
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters filterPets={filterPets}/>
          </div>
          <div className="twelve wide column">
            <PetBrowser filteredPets={filteredPets} petList={petList} setPetList={setPetList} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;