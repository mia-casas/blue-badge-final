import React, { useEffect, useState } from 'react';
import {Container} from 'reactstrap';
import ListCreate from './Table/ListSetup';
import ListMap from './Table/ListMap';

const HomePage = (props) => {
    const [lists, setLists] = useState([]);

    const fetchLists = () => {
        fetch('http://localhost:5005/list/view', {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        }) .then((res) => res.json()) 
        .then((listData) => {
            setLists(listData)
            console.log(listData)
            console.log(props.token)
        })
    }

    useEffect(() => {
        fetchLists();
    }, [])

    return(
        <div>
            Welcome!
            
            <ListCreate fetchLists={fetchLists} token={props.token} />
            <ListMap lists={lists} fetchLists={fetchLists} token={props.token} />
        </div>
    )
}

export default HomePage;