import "./ImageCard.css";

const ImageCard = ({
  src,
  alt,
  text,
}: {
  src: string;
  alt: string;
  text: string;
}) => {
  return (
    <div key={alt} className={`container-img ${alt}`}>
      <img src={src} alt={alt} />
      <p>{text}</p>
    </div>
  );
};

export default ImageCard;
