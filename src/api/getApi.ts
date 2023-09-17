const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'ae98cf1e5568a662263e277b893ef127';
export const getMovies = async () => {
    const response = await fetch(`
        ${BASE_URL}/movie/now_playing?api_key=${API_KEY}`
    )
    const responseData = await response.json();
    return responseData;
}
export const getRetedTv = async () => {
    const response = await fetch(`
    ${BASE_URL}/movie/top_rated?api_key=${API_KEY}
        `);
    const responseData = await response.json();
    return responseData;
}

export const getPopular = async () => {
    const response = await fetch(`
    ${BASE_URL}/movie/upcoming?api_key=${API_KEY}
        `);
    const responseData = await response.json();
    return responseData;
}

export const getTv = async () => {
    const response = await fetch(`
    ${BASE_URL}/tv/airing_today?api_key=${API_KEY}
        `);
    const responseData = await response.json();
    return responseData;
}