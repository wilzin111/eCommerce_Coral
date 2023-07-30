import Desconto from "../../assets/images_home/DescontoOFF.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Home.css";
import CarryYourImage from "../../assets/images_home/BG_CarryyourMobile.png";
import PersonalCare from "../../assets/images_home/Personalcare.png";
import Handbags from "../../assets/images_home/Handbags.png";
import WristWatches from "../../assets/images_home/WristWatches.png";
import SunGlasses from "../../assets/images_home/Sunglasses.png";
import Zara from "../../assets/images_home/Zara.png";
import DeG from "../../assets/images_home/DeG.png";
import Hem from "../../assets/images_home/HeM.png";
import Chanel from "../../assets/images_home/Chanel.png";
import Biba from "../../assets/images_home/Biba.png";
import Prada from "../../assets/images_home/Prada.png";
import LifeStyle from "../../assets/images_home/LifeStyle.png";
import SkinCareEssentialsMobile from "../../assets/images_home/SkinCareEssentialsMobile.png";
import SkinCareEssentialsDesktop from "../../assets/images_home/SkinCareEssentialsDesktop.png";
import FacepacksMobile from "../../assets/images_home/FacepacksMobile.png";
import FacePacksDesktop from "../../assets/images_home/FacePacksDesktop.png";
import Seta from "../../assets/IconsCategories/Seta.png";
import ShortCut from "../../assets/images_home/ShortCut.png";
import category1Image from "../../assets/IconsCategories/SkinCare.png";
import category2Image from "../../assets/IconsCategories/Joias.png";
import category3Image from "../../assets/IconsCategories/Bolsa.png";
import category4Image from "../../assets/IconsCategories/Relogio.png";
import category5Image from "../../assets/IconsCategories/SkinCare.png";
import { useState, useEffect } from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import { useContext } from "react";
import { productContext } from "../../Contexts/productsContext";

const categories = [
  { image: category1Image, text: "SkinCare", link: "/skin-care" },
  { image: category2Image, text: "Jewellery", link: "/jewellery" },
  { image: category3Image, text: "Handbags", link: "/handbags" },
  { image: category4Image, text: "Watches", link: "/watches" },
  { image: category5Image, text: "Eyewear", link: "/eye-wear" },
];

const Home = () => {
  const [currentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  //chamar os produtos
  const { produtos } = useContext(productContext);
  console.log(produtos);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Header />

      <div className="container-home">
        <Carousel
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
          selectedItem={currentSlide}
          infiniteLoop
        >
          <div>
            <img
              src={CarryYourImage}
              alt="CarryYour"
              className="ImagesCarousel"
            />
          </div>
          <div>
            <img
              src={Desconto}
              alt="Additional Image"
              className="ImagesCarousel"
            />
          </div>
        </Carousel>
        <div className="carouselContainer">
          <h3 className="Top">Top Categories</h3>
        </div>
        <div className="categoryContainer">
          {categories.map((category, index) => (
            <a
              key={index}
              href={category.link}
              className="categoryItem linkUnstyled"
            >
              <img
                src={category.image}
                alt={`Category ${index + 1}`}
                className="CategoryImage"
              />
              <p className="CategoryText">{category.text}</p>
            </a>
          ))}
        </div>
        <div className="newArrivalContainer">
          <div className="newViewAllContainer">
            <p className="new">New Arrivals</p>
            <div className="viewAllContainer">
              <p className="viewAllText">
                <a href="">View All</a>
              </p>
              <img src={Seta} alt="Arrow" className="arrowImage" />
              {/*{products.map((product, index) => (
          <div key={index}>
            <p>Product Name: {product.name}</p>
            <p>Price: {product.price}</p>
            <p>Category: {product.category}</p> */}
            </div>
          </div>
        </div>
        <div className="imageSection">
          <p className="imageSection-p">Handpicked Collections</p>
          <div className="imagePair">
            <a href="" className="imageLink">
              <img src={PersonalCare} alt="Image 1" className="image" />
            </a>

            <a href="" className="imageLink">
              <img src={Handbags} alt="Image 2" className="image" />
            </a>
          </div>

          <div className="imagePair">
            <a href="" className="imageLink">
              <img src={WristWatches} alt="Image 3" className="image" />
            </a>

            <a href="" className="imageLink">
              <img src={SunGlasses} alt="Image 4" className="image" />
            </a>
          </div>
        </div>
        <div className="brandsSection">
          <div className="textBrandContainer">
            <p className="shopByBrands">Shop by Brands</p>
            <div className="ViewAllBrand">
              <p className="viewAllTextLink">
                <a href="">View All</a>
              </p>
              <img src={Seta} alt="Arrow" className="arrowImage" />
            </div>
          </div>
          <div className="brandsImagesContainer">
            <a href="" className="brandLink">
              <img src={Zara} alt="Image 1" className="brandImage" />
            </a>
            <a href="" className="brandLink">
              <img src={DeG} alt="Image 2" className="brandImage" />
            </a>
            <a href="" className="brandLink">
              <img src={Hem} alt="Image 3" className="brandImage" />
            </a>
            <a href="" className="brandLink">
              <img src={Biba} alt="Image 4" className="brandImage" />
            </a>
            <a href="" className="brandLink">
              <img src={Chanel} alt="Image 5" className="brandImage" />
            </a>
            <a href="" className="brandLink">
              <img src={Prada} alt="Image 6" className="brandImage" />
            </a>
          </div>
        </div>
        <div className="ShortCut">
          <a href="">
            <img src={ShortCut} alt="" className="centeredImg" />
          </a>
        </div>
        <div className="skincareSection">
          <div className="skincareTitleContainer">
            <p className="skincareTitle">Makeup & Skincare</p>
          </div>
          <a href="" className="linkUnstyled">
            <img src={LifeStyle} alt="LifeStyle" className="sectionImage" />
          </a>
          <div className="productPair">
            <a href="" className="linkUnstyled">
              <img
                src={
                  isMobile
                    ? SkinCareEssentialsMobile
                    : SkinCareEssentialsDesktop
                }
                alt="SkinCareEssentials"
                className="productImage"
              />
            </a>
            <a href="" className="linkUnstyled">
              <img
                src={isMobile ? FacepacksMobile : FacePacksDesktop}
                alt="FacePacks"
                className="productImage"
              />
            </a>
          </div>
        </div>
        <div className="TrendingSection">
          <div className="Trending">
            <p>Trending Deals</p>
          </div>
          <Carousel
            showArrows={false}
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
            selectedItem={currentSlide}
            infiniteLoop
            className="home_carouselEnd"
          >
            <div>
              <img src={Desconto} alt="CarryYour" className="ImagesCarousel" />
            </div>
            <div>
              <img
                src={CarryYourImage}
                alt="Additional Image"
                className="ImagesCarousel"
              />
            </div>
          </Carousel>
        </div>
      </div>

      <Footer />
      <Navbar page="Home" />
    </>
  );
};
export default Home;
