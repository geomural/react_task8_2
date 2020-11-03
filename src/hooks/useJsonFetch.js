import {useState, useEffect} from 'react';

export default function useJsonFetch(url, opts) {
    const [data, setData] = useState();
    const [isLoading, setLoading] = useState(false);
    const [hasError, setError] = useState();

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                const data = await response.json();
                setData(data);
                setError(null);
            } catch (e) {
                setError(e.message);
            } finally {
                setLoading(false);
            }            
        };
        getData();
        return // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); 

    return [{data, isLoading, hasError}];
}