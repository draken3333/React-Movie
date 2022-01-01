import React from "react";
import "./MovieDetails.scss";

//^Redux
import {
  fetchAsyncDetails,
  getDetailsOfMoviesAndShows,
  removeSlectedContent,
} from "../../features/movies/movieSlice";

//^Hooks
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

function MovieDetails() {
  const { imdbID } = useParams();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchAsyncDetails(imdbID));
    //^ clear function для того что бы чистить state если мы выходим с details и возрашаемя на главную а птом опять заходим
    return () => {
      dispatch(removeSlectedContent());
    };
  }, [dispatch, imdbID]);
  //^ Добавляем и ререндер при изменение id
  const data = useSelector(getDetailsOfMoviesAndShows);

  return (
    <section className="section-details">
      <div className="container">
        {Object.keys(data) === 0 ? (
          <div className="preLoader">...Loading</div>
        ) : (
          <React.Fragment>
            <div className="details-content">
              <div className="details-content__left">
                <img
                  className="details-content__left-img"
                  src={data.Poster}
                  alt={data.Title}
                />
                <div className="details-content__left-info">
                  <span className="details-content__left-ratig">
                    <b>IMDB:</b> {data.imdbRating}
                  </span>
                  <span className="details-content__left-runtimer">
                    <b>Run Time:</b> {data.Runtime}
                  </span>
                  <span className="details-content__left-contry">
                    <b>Country:</b> {data.Country}
                  </span>
                  <span className="details-content__left-genre">
                    <b>Ganre:</b> {data.Genre}
                  </span>
                </div>
              </div>
              <div className="details-content__right">
                <h1 className="details-content__right-title">{data.Title}</h1>
                <p className="details-content__right-description">
                  <span>Description:</span> {data.Plot}
                </p>
              </div>
            </div>
          </React.Fragment>
        )}
      </div>
    </section>
  );
}

export default MovieDetails;
