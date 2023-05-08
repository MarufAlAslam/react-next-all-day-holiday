import { Breadcrumb } from "antd";
import Link from "next/link";
import React from "react";
import { FaAngleRight } from "react-icons/fa";
import DetailsHero from "../../components/DetailsHero/DetailsHero";
import Details from "../../components/RoomDetails/RoomDetails";
import CarouselSlider from "../../components/slider/Slider";


const RoomDetails = () => {
  const breadCrumb = [
    {
      name: "Strona główna",
      link: "/",
    },
    {
      name: "Najczęściej wybierane",
      link: "/",
    },
    {
      name: "Cerulean Landscape Hotel & Spa",
    },
  ];
  
  
  return (
    <div className="py-10 custom-container">
      <div>
        {breadCrumb.map((item, index) => {
          return (
            <>
              <Link key={index} className="text-[#757783]" href="/">
                {item.name}
              </Link>
              {
                item.link && (<span className="mx-2 text-[#757783]">/</span>)
              }
            </>
          );
        })}
      </div>

      {/* hero */}
      <DetailsHero/>

      <Details/>

      <CarouselSlider/>
    </div>
  );
};

export default RoomDetails;
