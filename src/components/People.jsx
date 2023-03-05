import React, {useEffect, useState} from 'react'
import axios from 'axios';

const People = (props) => {
    // * state via props
    const {id} = props;

    const [person, setPerson] = useState({});
    
    useEffect(()=>{
        axios.get(`https://swapi.dev/api/people/${id}`)
        .then(response=>{setPerson(response.data)})
        .catch(err => console.log(err));
    }, [id]);

    return (
        <div>{person.name}</div>
    )
}

export default People