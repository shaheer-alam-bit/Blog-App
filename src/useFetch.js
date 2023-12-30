import { useState, useEffect } from 'react';


const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError,setIsError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then((res) => {
                    if (!res.ok) {
                        throw Error('Could not fetch data from the resource');
                    }
                    return res.json();
                })
                .then((data) => {
                    setData(data);
                    setIsLoading(false);
                    setIsError(null);
                })
                .catch((err) => {
                    setIsLoading(false);
                    setIsError(err.message);
                })
        }, 1000)
    }, [url])
    return { data, isLoading, isError };
}

export default useFetch;