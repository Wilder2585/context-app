import React, { createContext } from "react";
import initialMovies from "../consts/initialMovies";

const MoviesContext = createContext();


const MoviesProvider = ({children}) => {
    
    const dataMovies = { movies: initialMovies }
    
    return(
        <MoviesContext.Provider value={dataMovies}>
            {children}

        </MoviesContext.Provider>

    )
} 








export {MoviesProvider};
export default MoviesContext;