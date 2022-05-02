import { useState, useEffect } from "react"
import { fetchMoviesById } from "servises/moviesApi"
import { notifi } from "servises/notify";
const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};
export const useFetchMovie = (id) => {
    const [movie, setMovie] = useState([])
    const [status, setStatus] = useState('');
    useEffect(() => {
        setStatus(Status.PENDING);
        async function fetch() {
            try {
                const movie = await fetchMoviesById(id);
                setMovie(movie);
                setStatus(Status.RESOLVED);
            }
            catch (error) {
                setStatus(Status.REJECTED);
                console.log(error.message);
                notifi(error.message);
            }
        }
        fetch();
    }, [id]);

    return { movie, status };
};