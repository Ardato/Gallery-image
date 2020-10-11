import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
export const GlobalState = createContext();

const GlobalStateProvider = (props) => {
  const API_KEY = "18531059-fadd493790965810e796ee1b9";
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `https://pixabay.com/api/?key=${API_KEY}&q=${query}=photo`
      );
      //  console.log(res.data);
      //console.log(res.data.hits);
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
    console.log(res.data.hits);
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
  const getQuery = (query) => {
    setQuery(query);
  };

    
  ///Get current items
  const indexOfLastItem = currentPage*itemsPerPage
  const indexOfFirstItem = indexOfLastItem-itemsPerPage
  const currentItems = items.slice(indexOfFirstItem,indexOfLastItem)
  ////Change page
  const paginate = (pageNumber)=>setCurrentPage(pageNumber)
  const totalItems = items.length
  // console.log(totalItems);

  return (
    <GlobalState.Provider
      value={{
        items,
        currentItems,
        fetchSportGallery,
        fetchFoodGallery,
        fetchMusicGallery,
        getQuery,
        itemsPerPage,
        paginate,
        totalItems

      }}
    >
      {props.children}
    </GlobalState.Provider>
  );
};

export default GlobalStateProvider;
