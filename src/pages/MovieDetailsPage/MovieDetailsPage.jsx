
import { useFetchMovie } from "hooks/useFetchMovie";
import { Loader } from "components/Loader/Loader";
import { Movie } from "components/Movie/Movie";
import { useParams } from "react-router-dom";
export const MovieDetailsPage = () => {
    const {movieId} =useParams()
    const { movie } = useFetchMovie(movieId);
    const { status } = useFetchMovie(movieId);
   
    return (
     <>
        {status === 'pending' && <Loader />}
        {status === 'resolved' && <Movie movie={movie} />}
        {status === 'rejected' && <h2>Sorry can't find this page</h2>}
    </>  
    


    )
}