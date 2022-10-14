import React from 'react';
import { getTrending } from '../helpers/getTrending';

export const useFetchTrending = () => {
    const [movies, setMovies] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    const getTrendingMovies = async (media_type, time_window) => {
        const results = await getTrending(media_type, time_window);
        setMovies(results);
        setIsLoading(false);
    };

    React.useEffect(() => {
        getTrendingMovies();
    }, []);

    return {movies, isLoading};
};