import React, {useState} from 'react';

const Form = (props) => {
    // state
    const [searchAPI, setSearchAPI] = useState({
        searched: '',
        id: ''
    });

    const {list, setList} = props;

    // event handlers
    // ! can the same onChangeHandler be added to both inputs? How does setSearchAPI know which key to update when?
    const onChangeHandler = (e) => {
        setSearchAPI({
            ...searchAPI, [e.target.name]: e.target.value,
        });
    }

    const onChangeHandlerTwo = (e) => {
        setSearchAPI({
            ...searchAPI, [e.target.name]: e.target.value
        });
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        setList([...list, searchAPI]);
        setSearchAPI({
            searched: '',
            id: ''
        });
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <div className="mb-3">
                <label htmlFor="searched" className="form-label"><b>Search For</b></label>
                <input onChange={onChangeHandler} type="text" className="form-control" name="searched" value={searchAPI.searched} id="searched" />
            </div>
            <div className="mb-3">
                <label htmlFor="id" className="form-label"><b>ID:</b></label>
                <input onChange={onChangeHandlerTwo} type="text" className="form-control" name="id" value={searchAPI.id} id="id" />
            </div>
            <button type='submit' className='btn btn-primary mt-2'>Search</button>
        </form>
    )
}

export default Form;