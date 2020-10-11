// import React, { useState, useEffect, useContext } from "react";
// import { GlobalState } from "../context/GlobalState";
// import Spinner from "./Spinner";

// function SliderImages() {
//   const {isLoading, items,setItems} = useContext(GlobalState)
//   //console.log(items);

//   const [index, setIndex] = useState(0);

//   const slideRight = () => {
//     setIndex((index + 1) % items.length);
//     //console.log(items[index + 1].largeImageURL);
//   };

//   const slideLeft = () => {
//     if (index > 0) {
//       setIndex(index - 1);
//       console.log(items[index - 1].largeImageURL);
//     } else {
//       setIndex(index);
//     }
//   };

  


//   return isLoading ? (
//     <Spinner />
//   ) : (
//     <div className="slider">
//       <button onClick={slideLeft} className="btn">
//         Prev
//       </button>

//       {items.length > 0 && <img src={items[index].largeImageURL} />}
//       <button onClick={slideRight} className="btn">
//         Next
//       </button>
//     </div>
//   );
// }

// export default SliderImages;
