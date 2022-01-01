import React from "react";
import "./MovieListing.scss";
import { MovieCard } from "../index";
import { useSelector } from "react-redux";
import { getAllMovies, getShows } from "../../features/movies/movieSlice";

function MovieListing() {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getShows);

  return (
    movies && (
      <div className="MovieListing">
        <h2 className="MoviesHead">Movies</h2>
        <div className="MoviesItems">
          {movies.map((obj, index) => (
            <MovieCard {...obj} key={index} />
          ))}
        </div>
        <h2 className="MoviesHead">Shows</h2>
        <div className="MoviesItems">
          {shows.map((obj, index) => (
            <MovieCard {...obj} key={index} />
          ))}
        </div>
      </div>
    )
  );
}

export default MovieListing;
