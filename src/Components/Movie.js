import React, { useContext } from 'react'
import UserContext from '../contexts/UserContext';

const Movie = ({movie}) => {
  
  const { user, toggleFavoriteMovieUser } = useContext(UserContext);
  const estilo = {
    height: '260px',
    objectFit: 'cover', // trata de adaptar la imagen al tamaño puesto 
    objectPosition: '' //posicion de la imagen
  }

  const ifFavorite = user?.favoriteMovie?.includes(movie.id);
  
  return (
    <div className='card'>

        <img  src={movie.imageUrl}
                alt={movie.title}
                style={estilo}> 
        </img>
        <div className='card-body'>
          <h4>{movie.title}</h4>  
          { user?.id &&
           <button className={
            `btn ${ifFavorite ? 'btn-success' : 'btn-outline-primary'}`} 
            onClick={() => toggleFavoriteMovieUser(movie.id)}>
            Favoritos
          </button> }

         
        </div>


    

    </div>
  )
}

export default Movie