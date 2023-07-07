import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import img1 from "../../Assets/Images_about/image1.png"
import img2 from "../../Assets/Images_about/image2.png"
import img3 from "../../Assets/Images_about/image3.png"
import img4 from "../../Assets/Images_ about/image4.png"
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
            <img className="about-img-top" src={img1} alt="teste" />
          </div>
        </div>

        <div className='about-conteiner-second'>
          <div>
            <h1 className='about-h-p'>ABOUT</h1>
            <p>Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.  Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. </p>
          </div>
        </div>

        <div className='about-conteiner-bag'>
          <h1 className='about-h-p'>ABOUT</h1>
          <p className='about-h-p'>Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.  Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. </p>
          <img src={img2} alt="teste" />
        </div>

        <div className='about-conteiner-clock'>
          <h1 className='about-h-p'>ABOUT</h1>
          <p className='about-h-p'>Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.  Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. </p>
          <img src={img3} alt="teste" />
        </div>

        <div className='about-conteiner-gleses'>
          <h1 className='about-h-p'>ABOUT</h1>
          <p className='about-h-p'>Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.  Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing. </p>
          <img src={img4} alt="teste" />
        </div>
      </div>


      <Footer />
    </>
  )
}

export default About