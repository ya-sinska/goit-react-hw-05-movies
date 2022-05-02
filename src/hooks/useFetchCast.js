import { useState, useEffect } from "react"
import { fetchCastsById } from "servises/moviesApi"
import { notifi } from "servises/notify";

export const useFetchCast = (id) => {
    const [cast, setCast] = useState(null)
    useEffect(() => {
        async function fetch() {
            try {
                const cast = await fetchCastsById(id);
                setCast(cast);
            }
            catch (error) {
                console.log(error.message);
                notifi(error.message);
            }
        }
        fetch();
    }, [id]);
    return cast;
};