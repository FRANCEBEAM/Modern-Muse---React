
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { HeroCarousel } from './HeroData';
import { IconContext } from "react-icons/lib";
import 'animate.css';

export default class PreviousNextMethods extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: false,
      autoplaySpeed: 3000,
    };

    return (
      <div className="hero-container">
        <div className='wrapper bg-black h-[100vh]'>
            <Slider ref={c => (this.slider = c)} {...settings}>
              {HeroCarousel.map((item, index) =>{
                return (
                  <div className="" key={index}>
                  <div className="text-white mt-72 absolute px-4 z-40 xl:relative xl:w-[1280px] xl:m-auto">

                    <h1 className="text-5xl text-white font-bold w-80 tracking-wide md:tracking-widest md:text-6xl md:w-3/4 lg:w-3/4 xl:absolute xl:pt-72">{item.title}</h1>
  
                    <p className="text-base mt-14 w-72 leading-7 min-[420px]:w-[360px] sm-[520px]:w-[460px] xl:absolute xl:pt-[23em] xl:text-lg xl:leading-9 xl:w-[630px]">{item.description}</p>
                  </div> 

                  <figure className="">
                    <img className=" img-item w-full h-[100vh] object-cover -z-0 opacity-30" src={item.img} />
                  </figure>
                </div>  
                );
              })
             }
            </Slider> 
        </div>

        <div className="buttons-container flex gap-10 align-middle items-center absolute top-[700px] z-40 text-[#ffffffbe] text-lg px-4 justify-end right-0 font-semibold tracking-widest xl:w-[1280px] xl:left-0 xl:m-auto">

            <div className="btn-prev flex button cursor-pointer text-center align-middle gap-2 hover:text-[#ffffff]" onClick={this.previous}>
                <BsArrowLeft size={30} /> PREV
            </div>

            <div className="btn-next flex button cursor-pointer text-center align-middle gap-2 hover:text-[#ffffff]" onClick={this.next}>
                NEXT <BsArrowRight size={30} />
            </div>      
        </div>
      </div>
    );
  }
}
