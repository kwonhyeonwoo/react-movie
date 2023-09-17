const API_KEY = 'ae98cf1e5568a662263e277b893ef127';
const BASE_URL = 'https://api.themoviedb.org/3';

//movie
export const searchMovie = async (keyword: string) => {
    const response = await fetch(`
    ${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${keyword}&page=1
        `);
    const responseData = await response.json();
    return responseData;
}
export const searchTv = async (keyword: string) => {
    const response = await fetch(
        `${BASE_URL}/search/tv?api_key=${API_KEY}&language=en-US&query=${keyword}&page=1&include_adult=false`
    );
    const responseData = await response.json();
    return responseData;
}