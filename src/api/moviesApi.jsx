import { ApiManager } from "./axios";

export const getMovies = async (id) => {
    try {
        const { data } = await ApiManager.get(`/movie/${id}`);
        return data;
    } catch (error) {
        console.log("Error fetching movies", error);
    }
};

export const getAllMovies = async ({ with_genres, query, page}) => {
    try {
        let endpoint;

        if (query) {
            endpoint = "/search/movie"
        } else if (with_genres) {
            endpoint = "/discover/movie"
        } else {
            endpoint = "/movie/popular"
        }
        const { data } = await ApiManager.get(endpoint, {
            params: {
                query,
                page,
                with_genres,
            },
        });
        return data;
    } catch (error) {
        console.log("Error fetching movies", error);
        return [];
    }
};