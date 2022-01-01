import React from "react";

import { MovieListing } from "../index";
import { useDispatch } from "react-redux";
import { fetchAsyncMovie, fetchAsyncSeries,  } from "../../features/movies/movieSlice";

function Home() {

  const dispatch = useDispatch();


  React.useEffect(() => {
    dispatch(fetchAsyncMovie());
    dispatch(fetchAsyncSeries());
  
    
  }, [dispatch]);

  return (
    <React.Fragment>
      <div className="banner-img"></div>
      <MovieListing />
    </React.Fragment>
  );
}

export default Home;
