import React from 'react';
import Person from '../Person/Person';
import yearbookData from "../../data/yearbook-data"
import './Cohort.css';

function Cohort() {
  const cohortStaff = yearbookData.staff.map(person => <Person key = {person.id} person = {person}/>)

  const cohortStudent = yearbookData.students.map(person => <Person key = {person.id} person = {person}/>)

  return (
    <div>
      <header className="cohort-name">Staff</header>
      <div className="cohort-container">
          { cohortStaff }
      </div>
      <header className="cohort-name">Students</header>
      <div className="cohort-container">
          { cohortStudent }
      </div>
    </div>
  )
  
}

export default Cohort;
