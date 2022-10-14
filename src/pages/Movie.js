import React from 'react'
import {useParams} from "react-router-dom";
import  {useFetchMovieById} from "../hooks/useFetchMovieById";
import { MovieCard } from '../components/MovieCard';


export const Movie = () => {

    const {movieId} = useParams();
    const {movie, isLoading} = useFetchMovieById(movieId);

    console.log("Movie", movie);

  return (
    <div>
        <MovieCard
            {...movie}
        />
    </div>
  )
}
