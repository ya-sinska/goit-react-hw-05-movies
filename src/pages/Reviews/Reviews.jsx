import { useParams } from "react-router-dom";
import { useFetchReviews } from "hooks/useFetchReviews";
import { Review } from "components/Review/Reviev";
export default function Reviews () {
    const { movieId } = useParams();
    const reviews = useFetchReviews(movieId);
   
    return (
     <>
        { reviews && <Review reviews={reviews }/>}
    </>  
    )
}
