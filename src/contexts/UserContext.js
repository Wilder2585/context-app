import React,  { createContext, useState } from "react";

const UserContext = createContext();

const initialUser = {
    id: 1,
    name: 'wilder',
    favoriteMovie: [1, 2]
}


const UserProvider = ({children}) => {

    const [user, setUser] = useState(initialUser);
    
    const login = () => {
        setUser(initialUser);
    };

    const logout = () => {
        setUser(null); 
    }
    const toggleFavoriteMovieUser = (movieId) => {
        
        const isFavorite = user.favoriteMovie.includes(movieId); //para leer mas facil
        const favoriteMovie = isFavorite
                ? user.favoriteMovie.filter(favMovId => favMovId !== movieId) //Delete
                : [...user.favoriteMovie, movieId] //Add
        
        setUser({
            ...user,
            favoriteMovie: favoriteMovie
        })
    }

    const data = {user, login, logout, toggleFavoriteMovieUser}

    

    
    return(
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
        
    
    
        );
}
export {UserProvider};
export default UserContext;