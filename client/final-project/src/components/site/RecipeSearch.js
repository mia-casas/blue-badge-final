// TESTING API Calls and variables 
import React, {useState, useEffect} from "react";
import { Col, Row, Button } from 'reactstrap';
import ReactDOM from "react-dom";
require("dotenv").config();

const RecipeSearch = () => {
   const [recipes1, displayRecipes1] = useState([])
   const [recipes2, displayRecipes2] = useState([])
   const [recipes3, displayRecipes3] = useState([])
   const [title1, displayTitle1] = useState([])
   const [title2, displayTitle2] = useState([])
   const [title3, displayTitle3] = useState([])

    let baseURL = "https://api.edamam.com/";
    let appID = `cbecaae1`;
    let appKey = `cef02729bb7c43f5132aeb83f4e22d49`;
   

    //this is a test
    let url = `${baseURL}search?q=quinoa&health=vegetarian&cuisineType=Indian&mealType=dinner&app_id=${appID}&app_key=${appKey}`

 
const getRecipe =()=>{
fetch(url)
.then((res) => res.json())
.then((props) => {
    displayRecipes1(props.hits[8].recipe.ingredientLines)
    displayTitle1(props.hits[8].recipe.label)
    console.log(props.hits[8].recipe.label);
    console.log(props.hits[8].recipe.ingredientLines);
    displayRecipes2(props.hits[9].recipe.ingredientLines)
    displayTitle2(props.hits[9].recipe.label)
    console.log(props.hits[9].recipe.label);
    console.log(props.hits[9].recipe.ingredientLines);
    displayRecipes3(props.hits[4].recipe.ingredientLines)
    displayTitle3(props.hits[4].recipe.label)
    console.log(props.hits[4].recipe.label);
    console.log(props.hits[4].recipe.ingredientLines);
    
})
.then(() =>{

})   
}


  //Return
    return (
    <div className="main">
        <div className="mainDiv">
          <h1>Search for Recipes</h1>
      <Button type='button' onClick={getRecipe}>Get a Recipe</Button>
      <div>
        {title1}<br />
        {recipes1}<br />
      </div>
      <hr />
      <div>
      {title2}<br />
        {recipes2}<br />
      </div>
      <hr />
      <div>
      {title3}<br />
        {recipes3}<br />
      </div>
    
       </div>
    </div>
    );
};

export default RecipeSearch;