import Directors from "./pages/Directors";
import Home from "./pages/Home";
import Actors from "./pages/Actors"
import Movie from "./pages/Movie";
import ErrorPage from "./pages/ErrorPage";

const routes = [
  {
    path: "/reactMovieTest",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/reactMovieTest/directors",
    element: <Directors />,
    errorElement: <ErrorPage />
  },
  {
    path: "/reactMovieTest/actors",
    element: <Actors />,
    errorElement: <ErrorPage />
  },
  {
    path: "/reactMovieTest/movie/:title",
    element: <Movie />,
    errorElement: <ErrorPage />
  }

];

export default routes;