import React from "react";
import "./ImageCard.css";

const ImageCard = ({ src, alt, text }) => {
  return (
    <div key={alt} className="container-img">
      <img src={src} alt={alt} />
      <p>{text}</p>
    </div>
  );
};

export default ImageCard;
