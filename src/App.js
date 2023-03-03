import './App.css';
import Form from './components/Form';
import Display from './components/Display';
import {useState} from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
    // state
    const [list, setList] = useState([]);

    return (
        <div className='w-50 m-auto mt-4'>
            <Form list={list} setList={setList} />
            <Routes>
                <Route path="/" />
                <Route path="/:people" element={<Display list={list} setList={setList} />} />
            </Routes>
            {/* <Display list={list} setList={setList} /> */}
        </div>
    );
}

export default App;
