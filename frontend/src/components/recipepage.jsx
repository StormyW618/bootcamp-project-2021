import './recipepage.css';
import React, {useState, useEffect} from "react";

  
export default function Recipepage({name,  desc, image, ingredients,instructions}){
  const [newIngredient, setNewIngredient] = React.useState('');
  const [newInstruction, setNewInstruction] = React.useState('');
  

const addIngredient = () => {
    var ul = document.getElementById("ingredientList");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(newIngredient));
    ul.appendChild(li);
  }
  
  const addInstruction = () => {
    var ol = document.getElementById("instructionList");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(newInstruction));
    ol.appendChild(li);
  }

  useEffect(() => {
    if(addIngredient === '') return;

    const requestOptions = {
      method: 'POST',
      body:JSON.stringify({addIngredient: addIngredient})
    };

    const updateIngredients = async () => {
      fetch(`http://localhost:3001/api/recipe/${name}/ingredient`).catch((error) => console.error(`failed due to ${error}`))}
    updateIngredients();

  },[addIngredient])

  
  useEffect(() => {
    if(addInstruction === '') return;

    const requestOptions = {
      method: 'POST',
      body:JSON.stringify({addInstruction: addInstruction})
    };

    const updateInstruction = async () => {
      fetch(`http://localhost:3001//api/recipe/${name}/instruction`).catch((error) => console.error(`failed due to ${error}`))
    }
    updateInstruction();

  },[addInstruction])
    return(
    <div>
     <h1 className = "recipe" id = "recipeName">{name}</h1>
      <img src = {image} alt = "breakfast"/>
    <h2>Ingredients</h2>
      <p>
          <ul id = "ingredientList">
          {ingredients.map(function(name, index){
            return <li key={index}>{name}</li>;
          })}
          </ul>
      </p>
      <div class="form-group"> 
              <h2> Missing an Ingredient? Add here! </h2>
              <input 
                id="newIngredient" 
                value={newIngredient}
                onChange={(e) => {
                  setNewIngredient(e.target.value);
                }}
              /> <br /> <br />
        </div>
        <div>
              <button class="form-button" onclick={addIngredient}>Add Ingredient</button>
            </div>
      <h2>Directions</h2>
      <p>
          <ol id = "instructionList">
          {instructions.map(function(name, index){
            return <li key={index}>{name}</li>;
          })}
          </ol>
      </p>
      <div class="form-group"> 
              <h2> Missing an Instruction? Add here! </h2>
              <input 
                id="newInstruction" 
                value={newInstruction}
                onChange={(e) => {
                  setNewInstruction(e.target.value);
                }}
              /> <br /> <br />
        </div>
        <div>
              <button class="form-button" onclick={addInstruction}>Add Instruction</button>
            </div>
      </div>);
}