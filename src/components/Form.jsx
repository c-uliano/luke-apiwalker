import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Form = (props) => {
    // * state via props
    const {search, setSearched, id, setId} = props;

    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();

        // axios.get(`https://swapi.dev/api/${search}/${id}`)
        // .then(response=>{setResults(response.data)})
        // .catch(err => console.log(err));

        // setSearch({
        //     searched: "",
        //     id: ""
        // });
        navigate(`/${search}/${id}`);
    }

    // const onChangeHandler = (e) => {
    //     setSearched({...search, [e.target.name]: e.target.value });
        
    // }

    return (
        <form onSubmit={onSubmitHandler}>
            <div className="mb-3">
                <label htmlFor="searched" className="form-label"><b>Search For</b></label>
                <select onChange={(e) => setSearched(e.target.value)} className="form-select">
                    <option name="searched" value=""></option>
                    <option name="searched" value="people">People</option>
                    <option name="searched" value="planets">Planets</option>
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="id" className="form-label"><b>ID:</b></label>
                <input onChange={(e) => setId(e.target.value)} type="number" className="form-control" name="id" id="id" />
            </div>
            <button type='submit' className='btn btn-primary mt-2'>Search</button>
        </form>
    )
}

export default Form;