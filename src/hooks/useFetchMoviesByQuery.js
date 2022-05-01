import { useState, useEffect } from "react"
import { fetchMoviesByQuery } from "servises/moviesApi"
const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};
export const useFetchMoviesByQuery = (query) => {
    const [movies, setMovies] = useState([])
    const [status, setStatus] = useState('');
    useEffect(() => {
        if (!query) {
            return
        }
        setStatus(Status.PENDING);
        async function fetch() {
            try {
                const movies = await fetchMoviesByQuery(query);
                setMovies(movies);
                setStatus(Status.RESOLVED);
            }
            catch (error) {
                setStatus(Status.REJECTED);
                console.log(error.message);
            }
        }
        fetch();
    }, [query]);

    return { movies, status };
};