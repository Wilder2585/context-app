import React from 'react'
import Movie from './Movie'
import initialMovies from '../consts/initialMovies'

const MovieList = () => {
  return (
    <div className='container'>
       <div className='row'>
         {initialMovies.map(movie =>(
            <div key={movie} className='col-md-4'>
            <Movie movie={movie} />
         </div>
         ))}
         
       </div>
       
       
       
    
    </div>
  )
}

export default MovieList