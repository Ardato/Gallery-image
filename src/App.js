import React, { useEffect, useState } from "react";
import axios from "axios";
import Search from "./components/Search";
import CharacterGrid from "./components/CharacterGrid";
import Header from "./components/Header";

import "./App.css";

function App() {
  const API_KEY = "18531059-fadd493790965810e796ee1b9";
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `https://pixabay.com/api/?key=${API_KEY}&q=${query}=photo`
      );

      //  console.log(res.data);
      console.log(res.data.hits);
      setItems(res.data.hits);

      setIsLoading(false);
    };
    fetchData();
  }, [query]);

  const fetchSportGallery = async () => {
    const res = await axios.get(
      `https://pixabay.com/api/?key=${API_KEY}&q=sport=photo`
    );
    setItems(res.data.hits);
  };
  const fetchFoodGallery = async () => {
    const res = await axios.get(
      `https://pixabay.com/api/?key=${API_KEY}&q=food=photo`
    );
    setItems(res.data.hits);
  };
  const fetchMusicGallery = async () => {
    const res = await axios.get(
      `https://pixabay.com/api/?key=${API_KEY}&q=music=photo`
    );
    setItems(res.data.hits);
  };

  return (
    <div className="App">
      <Search getQuery={(query) => setQuery(query)} />
      <Header />
      <button className="btn" onClick={fetchSportGallery}>
        Sport
      </button>
      <button className="btn" onClick={fetchFoodGallery}>
        Food
      </button>
      <button className="btn" onClick={fetchMusicGallery}>
        Music
      </button>
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
