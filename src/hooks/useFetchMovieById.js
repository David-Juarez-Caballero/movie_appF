import React from 'react';
import {getMovieById} from "../helpers/getMovieById";

export const useFetchMovieById = (movieId) => {
    const [movie, setMovie] = React.useState();
    const [isLoading, setIsLoading] = React.useState(true);

    const getMovie = async (movieId, language) => { 
        const results = await getMovieById(movieId);
        setMovie(results);
        setIsLoading(false);
    };

    React.useEffect(() => {
        getMovie(movieId);
    }, []);

    return { movie, isLoading };
};