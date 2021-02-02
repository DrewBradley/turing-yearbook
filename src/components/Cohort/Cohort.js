import React, { Component } from 'react';
import Person from '../Person/Person';
import Student from '../Student/Student'
import yearbookData from "../../data/yearbook-data"
import './Cohort.css';

class Cohort extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  handleClick(event) {
    // const {name, value} = event.target
    console.log("I'm a student!")
    // this.setState({[name]: value})
  }

  render() {
    const cohortStaff = yearbookData.staff.map(person => <Person key = {person.id} person = {person}/>)

    const cohortStudent = yearbookData.students.map(person => <Student key = {person.id} person = {person}/>)

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
  
}

export default Cohort;
