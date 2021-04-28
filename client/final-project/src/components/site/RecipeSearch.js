import React, { useState } from "react";
import { Col, Row,Form, FormGroup, Label, Input, Button } from "reactstrap";
require("dotenv").config();

const RecipeSearch = () => {
  const [recipe1, displayRecipes1] = useState([]);
  const [recipe2, displayRecipes2] = useState([]);
  const [recipe3, displayRecipes3] = useState([]);
  const [title1, displayTitle1] = useState([]);
  const [title2, displayTitle2] = useState([]);
  const [title3, displayTitle3] = useState([]);

  const [search, setSearch] = useState({
    food: "",
    diet: "",
    cuisineType: "",
    mealType: "",
  });

// Form Submit Fetch  
const onSubmitForm = (event) => {
  event.preventDefault();
  const { food, diet, cuisineType, mealType } = event.target;
  setSearch({
  food: food.value,
  diet: diet.value,
  cuisineType: cuisineType.value,
  mealType: mealType.value,
  });

// Set Base API URL and Keys
  let baseURL = "https://api.edamam.com/";
  let appId = "cbecaae1";
  let appKey = "cef02729bb7c43f5132aeb83f4e22d49";

// Create Search URL variable
  let url = `${baseURL}search?q=${food.value}&health=${diet.value}&cuisineType=${cuisineType.value}&mealType=${mealType.value}&app_id=${appId}&app_key=${appKey}`;

// FETCH 
      fetch(url)
        .then((res) => res.json())
        .then((props) => {
          // Recipe 1
          displayRecipes1(props.hits[8].recipe.ingredientLines);
          displayTitle1(props.hits[8].recipe.label);
          // Recipe 2
          displayRecipes2(props.hits[9].recipe.ingredientLines);
          displayTitle2(props.hits[9].recipe.label);
          // Recipe 3
          displayRecipes3(props.hits[4].recipe.ingredientLines);
          displayTitle3(props.hits[4].recipe.label);
        })
        .catch(function (err) {
          console.error(err);
        });  
    };

//Convert recipe arrays into list items

  const recipeList1 = recipe1.map((recipe1) => <li>{recipe1}</li>);
  const recipeList2 = recipe2.map((recipe2) => <li>{recipe2}</li>);
  const recipeList3 = recipe3.map((recipe3) => <li>{recipe3}</li>);


// ***** RETURN ********

  return (
    <div className="main">
      <div className="mainDiv">
        <h1>Lista Recipe Finder</h1>
         {/* SEARCH FORM */}
        <Col>
        <Form onSubmit={onSubmitForm} >
          <FormGroup>
          <Label for="food">Main Food:</Label>
          <Input
            type="text" name="food"
          />
  
          <Label for="diet">Diet Preference:</Label>
          <Input
            type="text" name="diet"
          />

          <Label for="cuisineType">Cuisine Type:</Label>
          <Input
            type="text" name="cuisineType"
            />

          <Label for="mealType">Meal Type:</Label>
          <Input
            type="text"
           name="mealType"
          />
       <Button type="submit">Submit</Button>
        </FormGroup>
             </Form>
        </Col>
      </div>
      <Row>
        <Col>
          {title1}
          <ul>{recipeList1}</ul>
          <Button>Save Recipe</Button>
        </Col>
        <Col>
          {title2}
          <ul>{recipeList2}</ul>
          <Button>Save Recipe</Button>
        </Col>
        <Col>
          {title3}
          <ul>{recipeList3}</ul>
          <Button>Save Recipe</Button>
        </Col>
      </Row>
    </div>
  );
};

export default RecipeSearch;