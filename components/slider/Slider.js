import React from "react";
import Carousel from "nuka-carousel";
import Image from "next/image";

import s1 from "../../assets/images/s1.png";
import s2 from "../../assets/images/s2.png";
import s3 from "../../assets/images/s3.png";
import s4 from "../../assets/images/s4.png";
import prev from "../../assets/images/prev.png";
import next from "../../assets/images/next.png";
import { FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

const CarouselSlider = () => {
  const sliderData = [
    {
      id: 1,
      image: s1,
      title: "Podwójny pokój",
      location: "Wrzosowa 1 , 72-330 Rogowo",
      rent: "300 zł",
    },
    {
      id: 2,
      image: s2,
      title: "Podwójny pokój",
      location: "Wrzosowa 1 , 72-330 Rogowo",
      rent: "300 zł",
    },
    {
      id: 3,
      image: s3,
      title: "Podwójny pokój",
      location: "Wrzosowa 1 , 72-330 Rogowo",
      rent: "300 zł",
    },
    {
      id: 4,
      image: s4,
      title: "Podwójny pokój",
      location: "Wrzosowa 1 , 72-330 Rogowo",
      rent: "300 zł",
    },
    {
      id: 5,
      image: s1,
      title: "Podwójny pokój",
      location: "Wrzosowa 1 , 72-330 Rogowo",
      rent: "300 zł",
    },
  ];
  return (
    <div className="custom-container pb-8">
      <div className="flex mb-12 mt-14 justify-between items-center">
        <h1 className="text-3xl font-bold mb-0">Najczęściej wybierane</h1>
      </div>
      <Carousel
        dragging={false}
        slidesToShow={4}
        autoplay={true}
        autoplayInterval={2000}
        renderBottomCenterControls={null}
        enableKeyboardControls={true}
        renderCenterLeftControls={({ previousSlide }) => (
          <button className="prev" onClick={previousSlide}>
            <Image src={prev} alt="prev" />
          </button>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <button className="next" onClick={nextSlide}>
            <Image src={next} alt="next" />
          </button>
        )}
      >
        {sliderData.map((item, index) => (
          <div key={index}>
            <Image src={item.image} alt="" />
            <div className="py-4">
              <p className="text-lg font-[600]">Podwójny pokój</p>
              <p className="text-xs mt-2 flex justify-start text-[#757783] items-center">
                <FaMapMarkerAlt className="mr-2 text-golden"/>
                {item.location}
              </p>
              <p className="font-[400] mt-2">
                <b>
                    {item.rent}
                </b> / noc
              </p>
            </div>
          </div>
        ))}
{/* 
        <Image src={s2} alt="s2" />
        <Image src={s3} alt="s3" />
        <Image src={s4} alt="s4" />
        <Image src={s1} alt="s1" />
        <Image src={s2} alt="s2" />
        <Image src={s3} alt="s3" />
        <Image src={s4} alt="s4" /> */}
      </Carousel>


      <div className="mt-8 text-center">
      <Link
            className="btn px-5 bg-white text-black rounded-full fs-14"
            href={"/contact"}
          >
            Rezerwuj online <FiArrowUpRight className="ml-2 text-lg" />
          </Link>
      </div>
    </div>
  );
};

export default CarouselSlider;
