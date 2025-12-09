import kyoto from "../../assets/kyoto.jpg";
import osaka from "../../assets/osaka.jpg";
import takayama from "../../assets/takayama.jpg";
import tokyo from "../../assets/tokyo.jpg";
import ImageCard from "../ImageCard/ImageCard";
import "./ImageGrid.css";

const ImageGrid = () => {
  return (
    <div className="container-grid">
      <ImageCard src={tokyo} alt={"tokyo"} text={"Tokio"} />
      <ImageCard src={kyoto} alt={"kyoto"} text={"Kyoto"} />
      <ImageCard src={osaka} alt={"osaka"} text={"Osaka"} />
      <ImageCard src={takayama} alt={"takayama"} text={"Takayama"} />
    </div>
  );
};

export default ImageGrid;
