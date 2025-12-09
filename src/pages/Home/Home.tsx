import Banner from "../../components/Banner/Banner";
import Header from "../../components/Header/Header";
import ImageGrid from "../../components/ImageGrid/ImageGrid";
import "./Home.css";
import kyoto from "../../assets/kyoto.jpg";
import osaka from "../../assets/osaka.jpg";
import takayama from "../../assets/takayama.jpg";
import tokyo from "../../assets/tokyo.jpg";

const Home = () => {
  const imagesCities = [
    {
      text: "Tokio",
      alt: "tokyo",
      url: tokyo,
    },
    {
      text: "Kioto",
      alt: "kyoto",
      url: kyoto,
    },
    {
      text: "Osaka",
      alt: "osaka",
      url: osaka,
    },
    {
      text: "Takayama",
      alt: "takayama",
      url: takayama,
    },
  ];

  const imagesCulture = [
    {
      text: "Santuario",
      alt: "tokyo",
      url: "../../assets/tokyo.jpg",
    },
    {
      text: "Templos",
      alt: "kyoto",
      url: "../../assets/kyoto.jpg",
    },
    {
      text: "Comida y bebidas",
      alt: "osaka",
      url: "../../assets/osaka.jpg",
    },
    {
      text: "Manga y Anime",
      alt: "takayama",
      url: "../../assets/takayama.jpg",
    },
  ];

  return (
    <main>
      <Header />
      <Banner />
      <section>
        <div className="title-section">
          <hr className="line-left" />
          <span className="title-text">Ciudades Principales</span>
          <hr className="line-right" />
        </div>
        <ImageGrid images={imagesCities} />
      </section>
      <section>
        <div className="title-section">
          <hr className="line-left" />
          <span className="title-text">Cultura</span>
          <hr className="line-right" />
        </div>
        <ImageGrid images={imagesCulture} />
      </section>
    </main>
  );
};

export default Home;
