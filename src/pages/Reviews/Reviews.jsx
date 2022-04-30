import { useParams } from "react-router-dom";
import { useFetchReviews } from "hooks/useFetchReviews";
import { Review } from "components/Review/Reviev";
export const Reviews = () => {
    const { movieId } = useParams();
    const reviews = useFetchReviews(movieId);
   
    return (
     <>
        { reviews && <Review reviews={reviews }/>}
    </>  
    )
}
