import { useState, useEffect } from "react"
import { fetchMovies } from "servises/moviesApi"
const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};
export const useFetchMovies = () => {
    const [movies, setMovies] = useState([])
    const [status, setStatus] = useState('');
    useEffect(() => {
        setStatus(Status.PENDING);
        async function fetch() {
            try {
                const movies = await fetchMovies();
                setMovies(movies);
                setStatus(Status.RESOLVED);
            }
            catch (error) {
                setStatus(Status.REJECTED);
                console.log(error.message);
            }
        }
        fetch();
    }, []);

    return { movies, status };
};