import React from 'react'
import Card from './Card';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import list from '../../public/list.json'

const Freebook = () => {
    const Filterdata=list.filter((data) => data.category==="Free");

var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
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
    <div className="max-w-screen-2xl container mx-auto md:px-10 px-4 bg-blue-100 ">
      <div>
        <h1 className="font-semibold text-xl pb-2 ">Free Offered Book</h1>
        <p className="pb-2">
          Here you read and learn something new everyday. Free books are a
          wonderful resource for readers of all ages and interests.
        </p>
      </div>
      <div>
        <Slider {...settings}>
          {Filterdata.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Freebook