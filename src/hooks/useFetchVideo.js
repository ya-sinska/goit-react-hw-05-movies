import { useState, useEffect } from "react"
import { fetchVideo } from 'servises/moviesApi';
const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};
export const useFetchVideo = (id) => {
    const [video, setMovie] = useState([])
    const [status, setStatus] = useState('');
    useEffect(() => {
        setStatus(Status.PENDING);
        async function fetch() {
            try {
                const video = await fetchVideo(id);
                setMovie(video);
                setStatus(Status.RESOLVED);
                if(video.length===0) return setStatus(Status.REJECTED);
            }
            catch (error) {
                setStatus(Status.REJECTED);
                console.log(error.message);   
            }
        }
        fetch();
    }, [id]);

    return { video, status };
};