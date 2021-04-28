import React, { useState } from "react";
import RecipeSearch from './RecipeSearch'; 

// Save list to SavedRecipies
const CreateSaved =(props) => {
    const [label, setLabel] = useState('');
    const [ingredients, setIngredients] = useState('');
  
  
  const saveRecipe = (e) => {
    e.preventDefault();
    fetch('http://localhost:5005/search/create', {
        method: "POST",
        body: JSON.stringify({search: {label:label,ingredients:ingredients}}),
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${props.token}`
        })
      }) .then((res) => res.json())
      .then((savedData) => {
          setLabel('');
          setIngredients('');
          props.fetchSaved();
          console.log(savedData)
      })
  }
  return(
    <div>
       
    </div>
)
}

export default CreateSaved;
