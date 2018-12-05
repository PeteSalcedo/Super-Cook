import React, { Component } from 'react';
import './App.css';

import Form from "./components/Form.js"

const API_KEY = "your api key";


class App extends Component {
  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=10`);

    const data = await api_call.json();
    console.log(data)
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