// TESTING API Calls and variables 
// API ID and KEY should come from .env

import React from "react";
import ReactDOM from "react-dom";

const RecipieSearch = () => {
    let baseURL = "https://api.edamam.com/";
    let appID = process.env.APPID;
    let appKey= process.env.APPKEY;


    return (
    <div className="main">
        <div className="mainDiv">
          <h1>Search for Recipes</h1>
        </div>
    </div>
    );
};

export default RecipeSearch;