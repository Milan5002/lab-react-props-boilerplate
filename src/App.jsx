import "./App.css";
import elephant from "./images/elephant.jpeg";
import React from "react";



function App({imageData}) {
  let image_arr = imageData();
  return (
    //  <div className='main'>
    //    <img src={image_arr[0].img} className='img' alt="" />
    //    <img src={imae_arr[1].img} className='img' alt="" />
    //    <img src={image_arr[2].img} className='img' alt="" />
    //    <img src={image_arr[3].img} className='img' alt="" />
    //   </div>

    <div className="parent">
      <h1>Kalvium gallery</h1>
      <div className="main">
        {image_arr.map((elem) => {
          return <img src={elem.img} className="img" alt="" />;
        })}
      </div>
    </div>
  );
}

export default App;
