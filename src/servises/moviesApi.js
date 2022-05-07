import axios from "axios";

export const fetchMovies = async () => {

    const data = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=4a5a1e8e9c9af768c9d74bb009ae596f`);
    return data.data.results

}

export const fetchMoviesById = async (id) => {

    const data = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=4a5a1e8e9c9af768c9d74bb009ae596f`);
    return data.data
 
}

export const fetchReviewsById = async (id) => {

    const data = await axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=4a5a1e8e9c9af768c9d74bb009ae596f`);
    return data.data.results

}
export const fetchCastsById = async (id) => {
 
    const data = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=4a5a1e8e9c9af768c9d74bb009ae596f`);
    return data.data

}

export const fetchMoviesByQuery = async (query) => {

    const data = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=4a5a1e8e9c9af768c9d74bb009ae596f&query=${query}`);
    return data.data.results
 
}

export const fetchVideo = async (id) => {

    const data = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=4a5a1e8e9c9af768c9d74bb009ae596f`);
    return data.data.results
 
}
// https://api.themoviedb.org/3/movie/550?api_key=4a5a1e8e9c9af768c9d74bb009ae596f