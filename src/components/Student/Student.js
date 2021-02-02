import React, { Component } from "react"
import '../Person/Person.css';

class Student extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: props.person.id,
      name: props.person.name,
      quote: "",
      superlative: "",
      photo: "https://placekitten.com/200/300",
      hidden: {
        display: "none"
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    if(this.state.hidden){
      this.setState(
        {hidden: null})
    }else{
      this.setState(
        {hidden: {display: "none"}})
    }
  }

  handleChange(event) {
    const {name, value} = event.target
    this.setState({ [name]: value })
  }

  render() {
    return(
      <div className="person student">
        <img src={this.state.photo} />
        <h1 className="person-name">{this.state.name}
        </h1>        
        <p className="person-quote">{this.state.quote}</p>
        <p className="person-superlative">{this.state.superlative}</p>
        <form 
          style={this.state.hidden}
          id={this.state.id}>
          <input 
            type="text"
            id={this.state.id}
            onChange={this.handleChange} 
            name="name"
            placeholder="Change name"
          />
          <input 
            type="text"
            id={this.state.id}
            onChange={this.handleChange} 
            name="quote"
            placeholder="Change quote"
          />
          <input 
            type="text"
            id={this.state.id}
            onChange={this.handleChange} 
            name="superlative"
            placeholder="Change superlative"
          />
        </form>
          <button onClick={this.handleClick}>Change</button>
      </div>
      )
  }
}

export default Student;