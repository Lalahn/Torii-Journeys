import "./ImageGrid.css";

const ImageGrid = ({
  images,
}: {
  images: Array<{
    text: string;
    alt: string;
    url: string;
  }>;
}) => {
  return (
    <div className="container-cities">
      <div className="container-grid">
        {images.map(({ text, url }, index) => (
          <span
            className={`container-img img-${index + 1}`}
            data-text={text}
            style={{ backgroundImage: `url(${url})` }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
