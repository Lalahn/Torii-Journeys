import React from "react";
import kyoto from "../../assets/kyoto.jpg";
import osaka from "../../assets/osaka.jpg";
import takayama from "../../assets/takayama.jpg";
import tokyo from "../../assets/tokyo.jpg";
import ImageCard from "../ImageCard/ImageCard";
import "./ImageGrid.css";

const ImageGrid = () => {
  return (
    <div className="container-grid">
      <ImageCard
        className="tokyo"
        src={tokyo}
        alt={"tokyo"}
        text={"Tokio"}
      />
      <ImageCard
        className="kyoto"
        src={kyoto}
        alt={"kyoto"}
        text={"Kyoto"}
      />
      <ImageCard
        className="osaka"
        src={osaka}
        alt={"osaka"}
        text={"Osaka"}
      />
      <ImageCard
        className="takayama"
        src={takayama}
        alt={"takayama"}
        text={"Takayama"}
      />
    </div>
  );
};

export default ImageGrid;
