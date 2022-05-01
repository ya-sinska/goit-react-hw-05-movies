
import { useLocation } from "react-router-dom";
import { useFetchMovie } from "hooks/useFetchMovie";
import { Loader } from "components/Loader/Loader";
import { Movie } from "components/Movie/Movie";
import { useParams } from "react-router-dom";
import { AdittionalInfo } from "components/AdittionalInfo/AdittionalInfo";
export const MovieDetailsPage = () => {
    const {movieId} =useParams()
    const { movie } = useFetchMovie(movieId);
    const { status } = useFetchMovie(movieId);
    const location = useLocation();
    
    return (
     <>
        {status === 'pending' && <Loader />}
            {status === 'resolved' &&
                <>
                <Movie movie={movie} location={ location}/>
                <AdittionalInfo/>
                </>}
        {status === 'rejected' && <h2>Sorry can't find this page</h2>}
    </>  
    


    )
}