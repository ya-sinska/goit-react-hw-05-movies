import { useState, useEffect } from "react"
import { fetchMoviesByQuery } from "servises/moviesApi"
import { useSearchParams } from "react-router-dom";
const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};
export const useFetchMoviesByQuery = () => {
    const [movies, setMovies] = useState([])
    const [status, setStatus] = useState('');
    const [searchParams, setSearchParams] = useSearchParams({});
    const query = searchParams.get('query')??''
    useEffect(() => {
        if (query==='') {
            return
        }
        async function fetch() {
        try {
                setStatus(Status.PENDING);
                const movies = await fetchMoviesByQuery(query);
            if (movies.length > 0) {
                setMovies(movies);
                setStatus(Status.RESOLVED);
            }
            else {
            setStatus(Status.REJECTED);
        }}
            catch (error) {
                setStatus(Status.REJECTED);
                console.log(error.message);
            }
        }
        fetch();
    }, [query]);
    const onInputChange = (value) => {
        let query = value;
            if (query) {
              setSearchParams({ query });
            } else {
              setSearchParams({});
            }
        
    }
    return { movies, status, onInputChange};
};