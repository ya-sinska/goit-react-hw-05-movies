import { useState, useEffect } from "react"
import { fetchMoviesByQuery } from "servises/moviesApi"

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};
export const useFetchMoviesByQuery = () => {
    const [query, setQuery] = useState(null);
    const [movies, setMovies] = useState([])
    const [status, setStatus] = useState('');
    useEffect(() => {
        if (!query) {
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
        setQuery(value);
    }
    return { movies, status, onInputChange};
};