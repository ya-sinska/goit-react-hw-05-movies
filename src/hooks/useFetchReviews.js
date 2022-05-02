import { useState, useEffect } from "react"
import { fetchReviewsById} from "servises/moviesApi"
import { notifi } from "servises/notify";
export const useFetchReviews = (id) => {
    const [reviews, setReviews] = useState([]);  
    useEffect(() => {  
        async function fetch() {
            try {
                const reviews = await fetchReviewsById(id);
                setReviews(reviews);
            }
            catch (error) {
                console.log(error.message);
                notifi(error.message);
            }
        }
        fetch();
    }, [id]);

    return reviews;
};