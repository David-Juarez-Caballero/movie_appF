import config from "../config/config";

export const getMovieById = async (movieId, media_type, language = "es-MX") => {

    const { ApiKey, Endpoint } = config;
    const url = `${Endpoint}/${media_type}/${movieId}?api_key=${ApiKey}&language=${language}`;
    const resp = await fetch(url);
    const results = await resp.json();

    return results;
}