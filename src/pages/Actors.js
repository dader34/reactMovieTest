import { actors } from "../data";
import NavBar from "../components/NavBar";

function Actors() {
  const allActors = actors.map(actor =>{
    const allMovies = actor.movies.map(movie => <li key={movie}>{movie}</li>)
    return(
      <article key={actor.name}>
        <h2>{actor.name}</h2>
        <ul>{allMovies}</ul>
      </article>
    )
  })
  return (
    <>
      <header>
      <NavBar />
      <h1>Actors Page</h1>
      </header>
      <main>
        {allActors}
      </main>
    </>
  );
};

export default Actors;
