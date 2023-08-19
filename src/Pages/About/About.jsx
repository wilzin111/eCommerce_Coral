import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import img1 from "../../Assets/Images_about/image1.png"
import img2 from "../../Assets/Images_about/image2.png"
import img3 from "../../Assets/Images_about/image3.png"
import img4 from "../../Assets/Images_about/image4.png"
import "./About.css"

const About = () => {
  return (
    <>
      <Header />
      <div className='about-body'>
        <div className='about-conteiner-top'>
          <div className="text">
            <h1 className='about-h-p'>ABOUT</h1>
            <p className='about-h-p'>Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. </p>
            <img className="about-img-top" src={img1} alt="img1" />
          </div>
        </div>

        <div className='about-conteiner-second'>
          <div className="text">
            <h1 className='about-h-p'>ABOUT</h1>
            <p>Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.  Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. </p>
          </div>
        </div>

        <div className='about-conteiner-bag'>
          <div className='about-conteiner-bag-text'>
            <h1 className='about-h-p'>ABOUT</h1>
            <p className='about-h-p'>Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.  Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. </p>
          </div>
          <img className='about-imgs-whidth' src={img2} alt="img2" />
        </div>

        <div className='about-conteiner-clock'>
          <div className='about-conteiner-clock-text'>
            <h1 className='about-h-p'>ABOUT</h1>
            <p className='about-h-p'>Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.  Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. </p>
          </div>
          <img className='about-imgs-whidth' src={img3} alt="img3" />
        </div>

        <div className='about-conteiner-gleses'>
          <div className='about-conteiner-gleses-text'>
            <h1 className='about-h-p'>ABOUT</h1>
            <p className='about-h-p'>Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.  Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. </p>
          </div>
          <img className='about-imgs-whidth' src={img4} alt="img4" />
        </div>
      </div>

      <Footer />
    </>
  )
}

export default About