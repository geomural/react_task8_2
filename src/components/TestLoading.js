import React from 'react'
import useJsonFetch from '../hooks/useJsonFetch'
import preloader from '../gif/carLoading.gif'

function TestLoading() {
    const [{isLoading}] = useJsonFetch(process.env.REACT_APP_LOADING_URL, null);
    let loading = <div> Loading... <img src={preloader} alt=""/></div>
    return(        
        <div>{isLoading? loading : "Loaded"}</div>
    )
}

export default TestLoading;