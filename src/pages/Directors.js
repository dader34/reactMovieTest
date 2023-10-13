import { directors } from "../data";
import NavBar from "../components/NavBar";

function Directors() {
  const allDirectors = directors.map(director =>{
    const allMovies = director.movies.map(movie => <li key={movie}>{movie}</li>)
    return(
      <article key={director.name}>
        <h2>{director.name}</h2>
        <ul>{allMovies}</ul>
      </article>
    )
  })
  return (
    <>
      <header>
        <NavBar />
        <h1>Directors Page</h1>
      </header>
      <main>
        {allDirectors}
      </main>
    </>
  );
};

export default Directors;
