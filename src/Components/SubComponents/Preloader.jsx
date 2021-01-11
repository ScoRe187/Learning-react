import React from "react";
import image from "../../Assets/Preloader.svg";

let Preloader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={image} alt="Preloader" />
    </div>
  );
};

export default Preloader;
