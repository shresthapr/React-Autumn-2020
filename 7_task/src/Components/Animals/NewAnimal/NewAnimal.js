import React, { Component } from 'react';

const NewAnimal = ({ change, submit }) => {

  return (
    <div>
      <form action="/addlist" method="POST">
        <label forhtml="name">Name</label>
        <input type="text" name="name" onChange={change}></input>

        <label forhtml="family"> Class</label>
        <select name="family" id="family" onChange={change}>
          <option value="Mammals"> Mammals</option>
          <option value="Birds"> Birds</option>
          <option value="Pisces"> Pisces</option>
          <option value="Amphibian"> Amphibian</option>
          <option value="Reptile"> Reptile</option>
        </select>

        <label forhtml="image">Img url</label>
        <input type="text" name="image" onChange={change}></input>

        <label forhtml="desc">Description</label>
        <input type="textarea" name="desc" onChange={change}></input>

        <label forhtml="readmore">Read More</label>
        <input type="text" name="readmore" onChange={change}></input>
      </form>

      <button type="submit" onClick={submit}>Add New Animal</button>

    </div>
  );

}

export default NewAnimal;