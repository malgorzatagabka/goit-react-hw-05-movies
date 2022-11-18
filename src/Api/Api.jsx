import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const API_KEY = '3a7b9fae23d21ee4f1e0a0e3e74eac23'

export const getTrending = async () => {
    const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`)
    return response.data;
};

    
export const getQuery = async query => {
    const response = await axios.get(`search/movie?api_key=${API_KEY}&language=en-US&query=${query}&include_adult=false&page=1`)
    return response.data;
}


export const getMovieId = async movieId => {
    const response = await axios.get(`movie/${movieId}?api_key=${API_KEY}&language=en-US`);
    return response.data;
}



export const getCast = async movieId => {
    const response = await axios.get(`movie/${movieId}/credits?api_key=3a7b9fae23d21ee4f1e0a0e3e74eac23&language=en-US`)
    return response.data.cast;
}

export const getReviews = async movieId => {
    const response = await axios.get(`movie/${movieId}/reviews?api_key=3a7b9fae23d21ee4f1e0a0e3e74eac23&language=en-US&page=1`)
    return response.data;
}

