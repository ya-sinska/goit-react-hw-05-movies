import axios from "axios";

export const fetchMovies = async () => {
  try {
    const data = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=4a5a1e8e9c9af768c9d74bb009ae596f`);
    return data.data.results
  } catch (error) {
   console.log('error', error) 
  }
}

export const fetchMoviesById = async (id) => {
  try {
    const data = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=4a5a1e8e9c9af768c9d74bb009ae596f`);
    return data.data
  } catch (error) {
    console.log('error', error)
  }
}

export const fetchReviewsById = async (id) => {
  try {
    const data = await axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=4a5a1e8e9c9af768c9d74bb009ae596f`);
    return data.data.results
  } catch (error) {
    console.log('error', error)    
  }
}

// https://api.themoviedb.org/3/movie/550?api_key=4a5a1e8e9c9af768c9d74bb009ae596f