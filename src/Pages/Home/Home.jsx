import Desconto from '../../assets/images home/DescontoOFF.png';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Home.css';
import CarryYourImage from '../../assets/images home/BG_CarryYour.png';
import category1Image from '../../assets/IconsCategories/SkinCare.png';
import category2Image from '../../assets/IconsCategories/Joias.png';
import category3Image from '../../assets/IconsCategories/Bolsa.png';
import category4Image from '../../assets/IconsCategories/Relogio.png';
import category5Image from '../../assets/IconsCategories/SkinCare.png';
import { useState, useEffect } from 'react';

const categories = [
  { image: category1Image, text: 'SkinCare', link: '/skin-care' },
  { image: category2Image, text: 'Jewellery', link: '/jewellery' },
  { image: category3Image, text: 'Handbags', link: '/handbags' },
  { image: category4Image, text: 'Watches', link: '/watches' },
  { image: category5Image, text: 'Eyewear', link: '/eye-wear' },
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === 0 ? 1 : 0));
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className='container'>
      <Carousel
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        selectedItem={currentSlide}
        infiniteLoop
      >
        <div>
          <img src={CarryYourImage} alt='CarryYour' className='ImagesCarousel'/>
        </div>
        <div>
          <img src={Desconto} alt='Additional Image' className='ImagesCarousel'/>
        </div>
      </Carousel>
      <div className='carouselContainer'>
      <h3 className='Top'>Top Categories</h3>
        <Carousel
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
          selectedItem={currentSlide}
          infiniteLoop
          renderThumbs={() => {}}
          renderIndicator={() => {}}
          renderArrowPrev={() => {}}
          renderArrowNext={() => {}}
        >
          <div className='categoryContainer'>
            {categories.map((category, index) => (
              <a key={index} href={category.link} className='categoryItem linkUnstyled'>
                <img src={category.image} alt={`Category ${index + 1}`} className='CategoryImage' />
                <p className='CategoryText'>{category.text}</p>
              </a>
            ))}
          </div>
        </Carousel>
      </div>
      <div className='newArrivalContainer'>
        <h3 className='new'>New Arrivals</h3>
      </div>
    </div>
  );
};
export default Home;
