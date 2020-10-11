import React, { useState } from "react";
import { useContext } from "react";
import { GlobalState } from "../context/GlobalState";

const Search = () => {
  const {getQuery} = useContext(GlobalState)
  const [text, setText] = useState("");
  const onChange = (query) => {
    setText(query);
    getQuery(query);
  };

  return (
    <section className="search">
      <form>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => onChange(e.target.value)}
          value={text}
        />
      </form>
      <div></div>
    </section>
  );
};

export default Search;
