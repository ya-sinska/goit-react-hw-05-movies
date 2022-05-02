
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useFetchMovie } from "hooks/useFetchMovie";
import { Loader } from "components/Loader/Loader";
import { Movie } from "components/Movie/Movie";
import { useParams, useNavigate } from "react-router-dom";
import { AdittionalInfo } from "components/AdittionalInfo/AdittionalInfo";
export const MovieDetailsPage = () => {
    const [movieLocation, setMovieLocation] = useState({});
    const {movieId} =useParams()
    const { movie, status } = useFetchMovie(movieId);
    const location = useLocation();
    const navigate = useNavigate();
    
    const onBackHandle = () => {
    navigate(movieLocation)
    }
    useEffect(() => {
    if(location.state) setMovieLocation(location.state.from)
    }, [location.state])

    return (
     <>
        {status === 'pending' && <Loader />}
            {status === 'resolved' &&
                <>
                <Movie movie={movie} location={location} onBackClick={onBackHandle }/>
                <AdittionalInfo/>
                </>}
        {status === 'rejected' && <h2>Sorry can't find this page</h2>}
    </>  
    


    )
}