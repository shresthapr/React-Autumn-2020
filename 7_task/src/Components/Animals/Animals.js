import React, { useState, useEffect } from 'react';
import AnimalCard from './AnimalCard/AnimalCard';
import NewAnimal from './NewAnimal/NewAnimal';
import axios from 'axios';


const Animals = () => {
  const [animals, setanimals] = useState({
    name: '',
    class: '',
    img: '',
    desc: '',
    readmore: '',
  })


  const changeHandler = (a) => {
    setanimals({
      ...animals,
      [a.target.name]: a.target.value,
    });
  };

  const submitHandler = (b) => {
    axios.post("http://localhost:3001/animals", animals)
      .then(status => console.log(status))
      .catch(error => console.log(error))
  }
  return (
    <div>
      <AnimalCard />
      <NewAnimal change={changeHandler} submit={submitHandler} />
    </div>
  )
}
export default Animals;