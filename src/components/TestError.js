import React from 'react'
import useJsonFetch from '../hooks/useJsonFetch'

function TestError() {
    const [{hasError}] = useJsonFetch(process.env.REACT_APP_ERROR_URL, null);
    return(        
        <p>{hasError? hasError : "No errors"}</p>
    )
}

export default TestError;