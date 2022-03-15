
import MovieList from "./Components/MovieList";
import Navbar from "./Components/Navbar";
import { MoviesProvider } from "./contexts/MoviesContext";
import { UserProvider } from "./contexts/UserContext";




function App() {

 
   return (
    <div >

      <UserProvider>
        <MoviesProvider>
          <Navbar />
          <MovieList /> 
        </MoviesProvider>
      </UserProvider>
    </div>
  );
}

export default App;
