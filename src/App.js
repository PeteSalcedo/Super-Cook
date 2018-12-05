import React, { Component } from 'react';
import './App.css';

import Form from "./components/Form.js"
const API_KEY = ""


class App extends Component {
  getRecipe = (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = "https://www.food2fork.com/api/search?key=&q=shredded%20chicken"

    console.log(recipeName)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe} /> 
      </div>
    );
  }
}

export default App;