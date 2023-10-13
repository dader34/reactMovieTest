import { movies } from "../data";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const params = useParams();
  const foundMovie = params.title ? movies.find(movie => movie.title === params.title) : false
  const allGenres = foundMovie ? foundMovie.genres.map(genre => <span key={genre}>{genre}</span>): null
  return (
    foundMovie ?
    <>
      <header>
      <NavBar />
        <h1>{params.title}</h1>
      </header>
      <main>
        <p>{foundMovie.time} Minutes</p>
        {allGenres}
      </main>
    </>
    : <h1>Movie Not Found</h1>
  );
};

export default Movie;
