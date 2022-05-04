import { useParams } from "react-router-dom";
import { useFetchCast } from "hooks/useFetchCast";
import { Actors } from "components/Actors/Actors";
export default function Cast() {
    const { slug } = useParams();
    const movieId = slug.match(/[a-z0-9]+$/)[0];
    const  cast = useFetchCast(movieId);
   
    return (<>
    {cast&&<Actors cast={cast} />}
    </>
     
    )
}