const API_KEY = "f43bc26577a5235f5bc1f8ba8f17f742";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    if (!response.ok) throw new Error("Failed to fetch popular movies");
    const data = await response.json();
    return data.results;
};

export const searchMovies = async (query) => {
    if (!query.trim()) return getPopularMovies();
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    if (!response.ok) throw new Error("Failed to search movies");
    const data = await response.json();
    return data.results;
};