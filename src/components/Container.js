import React, { useContext, useEffect } from "react";
import { PhotoContext } from "../context/PhotoContext";
import Gallery from "./Gallery";
import Loader from "./Loader";

const Container = ({ searchTerm, variation }) => {
  const { images, loading, runSearch } = useContext(PhotoContext);
  useEffect(() => {
    runSearch(searchTerm);
    // eslint-disable-next-line
  }, [searchTerm]);

  return (
    
    <div className={`${variation == "on" ? "photo-container photo" :"photo-container"}`} >
      {loading ? <Loader /> : <Gallery data={images} variation={variation}/>}
    </div>
  );
};

export default Container;
