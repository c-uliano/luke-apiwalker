import React from 'react';

const Display = (props) => {
    // state
    const {list, setList} = props;

    return (
        <div className='mt-4'>
            <>
    {
        list && list.map((result, idx) => (
            <div key={idx} className="row mb-3 border-bottom pb-3 align-items-center">
                {result && result.searched}
            </div>
        ))
    }
            </>
        </div>
    )
}

export default Display;