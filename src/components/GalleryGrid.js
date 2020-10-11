import React, { useContext } from "react";
import { GlobalState } from "../context/GlobalState";
import GalleryItem from "./GalleryItem";
import Spinner from "./Spinner";

function GalleryGrid() {
  const { isLoading, currentItems } = useContext(GlobalState);
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {currentItems.map((item) => (
        <GalleryItem key={item.id} item={item}></GalleryItem>
      ))}
    </section>
  );
}

export default GalleryGrid;
