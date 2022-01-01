import React from "react";

import { Link } from "react-router-dom";
import "./MovieCard.scss";

function MovieCard({ Poster, Title, Year, imdbID }) {

  //^ const { data } = props;
  //^Есть возможность здесь деструктаризацие вытягивать данные

  return (
    <div className="MovieCard">
      <Link to={`/movie/${imdbID}`}>
        <div className="images">
          <img src={Poster} alt={Title} />
          {/* Можно оставлять в алет татйл фильма  */}
        </div>
        <div className="title">Title: {Title}</div>
        <span className="year">Year: {Year}</span>
      </Link>
    </div>
  );
}

export default MovieCard;
