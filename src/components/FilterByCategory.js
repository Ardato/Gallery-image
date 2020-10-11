import React, { useContext } from "react";
import { GlobalState } from "../context/GlobalState";

const FilterByCategory = () => {
  const { fetchSportGallery, fetchFoodGallery, fetchMusicGallery } = useContext(
    GlobalState
  );
  return (
    <div>
      <button className="btn" onClick={fetchSportGallery}>
        Sport
      </button>
      <button className="btn" onClick={fetchFoodGallery}>
        Food
      </button>
      <button className="btn" onClick={fetchMusicGallery}>
        Music
      </button>
    </div>
  );
};

export default FilterByCategory;
