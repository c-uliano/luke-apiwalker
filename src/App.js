import './App.css';
import Form from './components/Form';
import Display from './components/Display';
import People from './components/People';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {
    // * state
    const [search, setSearched] = useState('');
    const [id, setId] = useState('');
    const [results, setResults] = useState('');
    // const [search, setSearched] = useState({
    //     searched: "",
    //     id: ""
    // });

    return (
        <div className='w-50 m-auto mt-4'>
            <Form 
            search={search} 
            setSearched={setSearched} 
            id={id} 
            setId={setId}
            setResults={setResults}
            />

            {/* <Display
            results={results}
            /> */}

            <Routes>
                <Route path="/planets/:id" element={<Display results={results} />} />
                <Route path="/people/:id" element={<People id={id} />} />
            </Routes>
        </div>
    );
}

export default App;
