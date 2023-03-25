import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import { ProjectCarousel } from './ProjectData'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

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
    var settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="project-container">
        <div className="head-content align-middle text-center inline-flex gap-5">
          <h1 className=' text-[#D4D4D4] font-extrabold text-5xl align-middle text-center'>projects</h1>
          <p className="uppercase font-extrabold text-md align-middle text-center self-center tracking-widest">Our <span className="text-[#00A591]">Projects</span></p>
        </div>
        <div className="wrapper absolute bg-black w-full h-[40vh] -z-10 mb-10 mt-7">
          <Slider ref={c => (this.slider = c)} {...settings}>
            {ProjectCarousel.map(item=>(
              <div>
                <p className="absolute z-40 uppercase text-[#F0F0F0] font-semibold tracking-widest text-sm p-4">{item.project}</p>
                <figure>
                  <img className="w-full h-[40vh] object-cover -z-0 opacity-50" src={item.img} />
                </figure>
              </div>
            ))}
          </Slider>
        </div>

        <div className="button-container flex px-4 -z-0 justify-between align-middle m-auto text-center pt-[14em] text-[#F0F0F0] font-semibold text-md tracking-widest items-center text-sm">
            <div className="btn-prev flex button cursor-pointer text-center align-middle" onClick={this.previous}>
                <BsArrowLeft size={20} /> PREV
            </div>

            <div className="btn-next flex button cursor-pointer text-center align-middle" onClick={this.next}>
                NEXT <BsArrowRight size={20} />
            </div>      
        </div>
      </div>
    );
  }
}