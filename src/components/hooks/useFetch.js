import { useEffect } from "react";
import { useState } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        fetch(url, {signal: abortCont.signal})
        .then(res => {
            if(!res.ok) {
                throw Error('Could not fetch data for that resource.')
            }
            return res.json();
        })
        .then(data => {
            setData(data);
            setIsLoading(false);
            setError(null);
        })
        .catch(e => {
            if (e.name === 'AbortError') {
                console.log('Fetch aborted')
            } else {
                setIsLoading(false);
                setError(e.message);
            }
        })
        return () => abortCont.abort();
    }, [url])

    return {data, isLoading, error};
}
 
export default useFetch;