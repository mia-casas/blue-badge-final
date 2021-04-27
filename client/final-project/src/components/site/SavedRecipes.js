import React, { useEffect, useState } from 'react';

// THIS IS WORK IN PROGRESS
const SavedRecipes = (props) => {
    const [saved, setSaved] = useState([]);
   
    const fetchSaved = () => {
        fetch('http://localhost:5005/search/view', {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        }) .then((res) => res.json()) 
        .then((savedData) => {
            setSaved(savedData)

        })
    }

    useEffect(() => {
        fetchSaved();
    }, [])

    return(
        <div>
           
        </div>
    )
}

export default SavedRecipes;