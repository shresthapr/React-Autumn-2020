import React, { useState, useEffect } from 'react';

import axios from 'axios';

const API = "http://localhost:3001/animals";
function AnimalCard() {
  const [animal, setAnimal] = useState({
    id: '',
    name: '',
    aclass: '',
    desc: '',
    link: ''
  }
  );

  useEffect(() => {
    axios.get(API)
      .then(res => console.log(res))
      .catch(error => console.log(error.message));

  })
  return (
    <>
      <h1>Animals lists are displayed</h1>
      <p>{animal.name}</p>
    </>
  );
};

export default AnimalCard;