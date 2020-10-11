import React from "react";
import Search from "./components/Search";
import GalleryGrid from "./components/GalleryGrid";
import Header from "./components/Header";
import FilterByCategory from "./components/FilterByCategory";
import "./App.css";
import GlobalStateProvider from "./context/GlobalState";
import Pagination from "./components/Pagination";

function App() {
  return (
    <div className="App">
      <GlobalStateProvider>
        <Search />
        <Header />
        <FilterByCategory />
        <GalleryGrid />
        <Pagination/>
      </GlobalStateProvider>
    </div>
  );
}

export default App;
