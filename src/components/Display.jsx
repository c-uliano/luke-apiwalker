import React from 'react';

const Display = (props) => {
    // * state via props
    const {results} = props;

    return (
        <div className='mt-4'>
            <>
                <div>
                    {results.name}
                </div>
            </>
        </div>
    )
}

export default Display;