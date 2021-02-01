import React from 'react';
import './Person.css';

const Person = (props) => {
  return(
    <div className="person">
      <img src={props.person.photo} />
      <h1 className="person-name">{props.person.name}</h1>
      <p className="person-quote">"{props.person.quote}"</p>
      <p className="person-superlative">{props.person.superlative}</p>
    </div>
    )
}

export default Person;
