import { useParams } from "react-router-dom";
import { useFetchCast } from "hooks/useFetchCast";
import { Actors } from "components/Actors/Actors";
export default function Cast() {
    const { movieId } = useParams();
    const  cast = useFetchCast(movieId);
   
    return (<>
    {cast&&<Actors cast={cast} />}
    </>
     
    )
}