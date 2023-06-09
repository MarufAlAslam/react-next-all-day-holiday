import React from "react";
import hero from "../../assets/images/hero.svg";
import Image from "next/image";
import { Card, Input, DatePicker, Select } from "antd";

import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaUsers, FaSearch } from "react-icons/fa";

import map from '../../assets/icons/map.png'
import users from '../../assets/icons/users.png'

const Hero = () => {
  const { RangePicker } = DatePicker;
  return (
    <div className="py-14 custom-container mx-auto hero-custom">
      <Card className="border-0 p-0 relative">
        <Image src={hero} className="w-full" alt="hero" />
        <div className="p-8 card-bdy">
          <div className="search-box px-5 flex justify-center items-center">
            <div className="location-search p-3 w-full flex justify-start items-center">
              {/* <HiOutlineLocationMarker className="text-2xl" /> */}
              <Image src={map} alt="map" className="w-6 h-6 mr-3" />
              <div className="content w-full ml-3">
                <p className="font-[500] text-[#757783]">Lokalizacja</p>
                <Input
                  value="Rogowo, Polska"
                  className="border-0 bg-white p-0 text-lg font-bold"
                />
              </div>
            </div>

            {/* range picker */}

            <div className="w-full px-5 py-3">
              <div className="flex justify-start mb-2 items-center">
                <p className="font-[500] w-1/2 text-[#757783]">Przyjazd</p>
                <p className="font-[500] w-1/2 text-[#757783]">Wyjazd</p>
              </div>
              <RangePicker
                className="w-full bg-white border-none p-0 text-xl text-black"
                placeholder={["czw. 13 kwi.", "czw. 13 kwi."]}
              />
            </div>

            <div className="w-full flex justify-start items-center px-5 py-3">
              {/* <FaUsers className="text-2xl" /> */}
              <Image src={users} alt="users" className="w-6 h-6 mr-3" />
              <div className="content w-full ml-3">
                <p className="font-[500] text-[#757783]">Ilość osób</p>
                <select className="w-full py-3 border-none">
                    <option value="demo">Demo</option>
                </select>
              </div>
            </div>
            <div className="flex justify-start items-center px-5 py-3">
              <button className="flex btn justify-center items-center btn-golden rounded-full">
                <FaSearch className="mr-3"></FaSearch> Szukaj
              </button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Hero;
