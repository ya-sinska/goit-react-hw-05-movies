import { useParams } from "react-router-dom";
import { useFetchCast } from "hooks/useFetchCast";
import { Actors } from "components/Actors/Actors";
export const Cast = () => {
    const { movieId } = useParams();
    const  cast = useFetchCast(movieId);
   
    return (<>
    {cast&&<Actors cast={cast} />}
    </>
     
    )
}