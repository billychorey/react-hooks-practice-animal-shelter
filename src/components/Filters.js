import React from "react";

function Filters({filterPets}) {

  function handleSelectChange(event) {
    const selectedValue = event.target.value;
    console.log(selectedValue);
    filterPets(selectedValue);
  }
  return (
    <div className="ui form">
      <h3>Animal type</h3>
      <div className="field">
        <select name="type" id="type" aria-label="type" onChange={handleSelectChange}>
          <option value="all">All</option>
          <option value="cat">Cats</option>
          <option value="dog">Dogs</option>
          <option value="micropig">Micropigs</option>
        </select>
      </div>

      <div className="field">
        <button className="ui secondary button">Find pets</button>
      </div>
    </div>
  );
}

export default Filters;