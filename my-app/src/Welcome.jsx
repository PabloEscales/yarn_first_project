import React from 'react';
import { useState, useEffect } from 'react';

export default function Welcome (props) {
  const name = props.name;
  const direcction = props.direcction;

  const [state, setState] = useState(false);
  const [lastName, setLastName] = useState("false");

  const handleClick = () => {
    setState(!state)
  }

  const changeLastName = () => {
    setLastName("Messi")
  }

  useEffect(() => {
    console.log("Making effect")
  }, [lastName])

  return (

    <div>
      <h1>Hola { name }</h1>
      <button onClick={handleClick} > { direcction } </button>
      <button onClick={changeLastName}> { lastName } </button>
      <p> { state ? "soy true " : "false" } </p>
      <div> X </div>
    </div>
  );
}
