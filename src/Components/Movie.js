import React from 'react'

const Movie = ({movie}) => {
  
  const estilo = {
    height: '260px',
    objectFit: 'cover', // trata de adaptar la imagen al tamaño puesto 
    objectPosition: '' //posicion de la imagen
  }

  const ifFavorite = false;
  
  return (
    <div className='card'>

        <img  src={movie.imageUrl}
                alt={movie.title}
                style={estilo}> 
        </img>
        <div className='card-body'>
          <h4>{movie.title}</h4>  
          <button className={`btn ${ifFavorite ? 'btn-success' : 'btn-outline-primary'}`}>
            Favoritos
          </button>
        </div>


    <h1>Movie</h1>

    </div>
  )
}

export default Movie