import React, { useState,useEffect } from "react"
import '../styling/Admin.css'
import facade from "../apiFacade";

var number1;
var number2;
var number3;
var number4;
var number5;
var number6;


const User = () => {

  const init = {ingredient1: "", ingredient2: "", ingredient3: ""}

  const [myCocktail, setCocktail] = useState(init)

  function loadNumber1(){
    number1 = Math.floor(Math.random() * 8) + 1;
    number2 = Math.floor(Math.random() * 8) + 1;
    number3 = Math.floor(Math.random() * 8) + 1;
    number4 = Math.floor(Math.random() * 8) + 1;
    number5 = Math.floor(Math.random() * 8) + 1;
    number6 = Math.floor(Math.random() * 8) + 1;
 }

//  window.onload = loadNumber1;

  const showRandomCocktailData = (randomCocktail) => {
    
      let ingredient1 = `${randomCocktail.drinks[number1].strIngredient1}`
      let ingredient2 = `${randomCocktail.drinks[number2].strIngredient2}`
      let ingredient3 = `${randomCocktail.drinks[number3].strIngredient3}`

      setCocktail({ingredient1, ingredient2, ingredient3})

      document.getElementById('ingredient1').innerText = ingredient1
      document.getElementById('amount1').innerText = number4 + " cl"
  
      document.getElementById('ingredient2').innerText = ingredient2
      document.getElementById('amount2').innerText = number5 + " cl"
  
      document.getElementById('ingredient3').innerText = ingredient3
      document.getElementById('amount3').innerText = number6 + " cl"
      
  } 

  const generateCocktail = (e) => {
    e.preventDefault();
    facade.fetchUserData( "user" ).then(data=> {
      showRandomCocktailData(data) }
    )

    loadNumber1()
  }

  const saveCocktail = (e) => {
      e.preventDefault()
      facade.saveCocktail(myCocktail)
  }
 
  return (
  
    <div>
      <title>Random Coktail Generator</title>
        <div className="container">
          <div className="frame">
            <div className="content">

              <h1 className='header'>COCKTAIL GENERATOR</h1>

              <h3>INGREDIENT 1:</h3><p id="ingredient1">___</p><p id="amount1">___</p>

              <h3>INGREDIENT 2:</h3><p id="ingredient2">___</p><p id="amount2">___</p>

              <h3>INGREDIENT 3:</h3><p id="ingredient3">___</p><p id="amount3">___</p>

              <button onClick={generateCocktail}>GENERATE COCKTAIL</button>

              <button onClick={saveCocktail}>ADD TO FAVOURITES</button>
            </div>
          </div>
        </div>
    </div>
  
  )
}

export default User