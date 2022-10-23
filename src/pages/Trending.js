import React from 'react'
import { useFetchTrending } from '../hooks/useFetchTrending'
import { MovieCard } from '../components/MovieCard';
import { TrendingFilters } from '../components/TrendingFilters';

export const Trending = () => {

const {movies} = useFetchTrending();
const [filter, setFilter] = React.useState("all");

let filteredItems;

if (filter === "all") {
  filteredItems = movies;
} else {
  filteredItems = movies.filter(movie => movie.media_type === filter);
}


  return (
    <>
      <TrendingFilters filter={filter} setFilter={setFilter}/>
      <div className='container row row-cols-1 row-cols-md-3 g-3'>
        {filteredItems.map(movie =>
          <MovieCard key={movie.id} {...movie} />
          )}
      </div>
    </>
    
  )
}