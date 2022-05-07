import { useState, useEffect } from "react"
import { fetchVideo } from 'servises/moviesApi';
const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};
export const useFetchVideo = (id) => {
    const [movie, setMovie] = useState([])
    const [status, setStatus] = useState('');
    useEffect(() => {
        setStatus(Status.PENDING);
        async function fetch() {
            try {
                const movie = await fetchVideo(id);
                setMovie(movie);
                setStatus(Status.RESOLVED);
                if(movie.length===0) return setStatus(Status.REJECTED);
            }
            catch (error) {
                setStatus(Status.REJECTED);
                console.log(error.message);   
            }
        }
        fetch();
    }, [id]);

    return { movie, status };
};