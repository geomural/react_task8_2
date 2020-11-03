import React from 'react'
import useJsonFetch from '../hooks/useJsonFetch'

function TestData() {
    const [{data}] = useJsonFetch(process.env.REACT_APP_DATA_URL, null);
    let status = data? data.status : "Something went wrong...";
    return(        
        <p>{status}</p>
    )
}

export default TestData;