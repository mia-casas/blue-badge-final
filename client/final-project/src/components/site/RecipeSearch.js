import React, {useState} from "react";
import { Col, Row, Button } from 'reactstrap';


const RecipeSearch = () => {
   const [recipe1, displayRecipes1] = useState([])
   const [recipe2, displayRecipes2] = useState([])
   const [recipe3, displayRecipes3] = useState([])
   const [title1, displayTitle1] = useState([])
   const [title2, displayTitle2] = useState([])
   const [title3, displayTitle3] = useState([])

//RECIPE IMAGES????

// Construct fetchURL (NEED TO FIGURE OUT WHY ENV ISN'T WORKING)
  let baseURL = "https://api.edamam.com/";
   
// This is for testing (NEED TO CREATE SEARCH)
  let url = `${baseURL}search?q=quinoa&health=vegetarian&cuisineType=Indian&mealType=dinner&app_id=${process.env.APPID}&app_key=${process.env.APPKEY}`

 
const getRecipe =()=>{
fetch(url)
.then((res) => res.json())
.then((props) => {
  // Recipe 1
    displayRecipes1(props.hits[8].recipe.ingredientLines)
    displayTitle1(props.hits[8].recipe.label)
  // Recipe 2
    displayRecipes2(props.hits[9].recipe.ingredientLines)
    displayTitle2(props.hits[9].recipe.label)
  // Recipe 3
    displayRecipes3(props.hits[4].recipe.ingredientLines)
    displayTitle3(props.hits[4].recipe.label)
})
}

//Convert recipe arrays into list items

const recipeList1 = recipe1.map((recipe1) =>
  <li>{recipe1}</li>
);

const recipeList2 = recipe2.map((recipe2) =>
  <li>{recipe2}</li>
);

const recipeList3 = recipe3.map((recipe3) =>
  <li>{recipe3}</li>
);

//Return
    return (
    <div className="main">
        <div className="mainDiv">
          <h1>Lista Recipe Finder</h1>
      <Button type='button' onClick={getRecipe}>Find a Recipe</Button>
      </div>
      <Row>
      <Col>
        {title1}
        <ul>{recipeList1}</ul>
        </Col>
        <Col>
      {title2}
      <ul>{recipeList2}</ul>
      </Col>
      <Col>
      {title3}
      <ul>{recipeList3}</ul>
      </Col>
      </Row>
      
      </div>
    
    );
};

export default RecipeSearch;