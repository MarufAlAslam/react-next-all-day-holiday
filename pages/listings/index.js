import { Input, DatePicker } from "antd";
import React from "react";
import { FaCalendar, FaSearch, FaUsers } from "react-icons/fa";

import { HiOutlineLocationMarker } from "react-icons/hi";
import {RiListSettingsFill} from "react-icons/ri";

import r1 from "../../assets/images/r1.png";
import ListingItemCard from "../../components/ListingItemCard/ListingItemCard";

const Listings = () => {
  const { RangePicker } = DatePicker;
  const roomData = [
    {
        id: 1,
        name: "Shellter Apartament Nadmorski",
        address: "Wrzosowa 1 , 72-330 Rogowo, Polska",
        size: 56,
        guests: 4,
        beds: 2,
        price: 300,
        stars: 4.5,
        reviews: 261,
        img: r1,
    },
    {
        id: 2,
        name: "Shellter Apartament Nadmorski",
        address: "Wrzosowa 1 , 72-330 Rogowo, Polska",
        size: 56,
        guests: 4,
        beds: 2,
        price: 300,
        stars: 4.5,
        reviews: 261,
        img: r1,
    },
    {
        id: 3,
        name: "Shellter Apartament Nadmorski",
        address: "Wrzosowa 1 , 72-330 Rogowo, Polska",
        size: 56,
        guests: 4,
        beds: 2,
        price: 300,
        stars: 4.5,
        reviews: 261,
        img: r1,
    },
    {
        id: 4,
        name: "Shellter Apartament Nadmorski",
        address: "Wrzosowa 1 , 72-330 Rogowo, Polska",
        size: 56,
        guests: 4,
        beds: 2,
        price: 300,
        stars: 4.5,
        reviews: 261,
        img: r1,
    },
    {
        id: 5,
        name: "Shellter Apartament Nadmorski",
        address: "Wrzosowa 1 , 72-330 Rogowo, Polska",
        size: 56,
        guests: 4,
        beds: 2,
        price: 300,
        stars: 4.5,
        reviews: 261,
        img: r1,
    }
  ]
  return (
    <div className="py-10">
      <div className="custom-container">
        <div className="flex justify-between items-start gap-10">
          <div className="lg:w-3/12">
            <div className="card border">
              <div className="card-body">
                <h2 className="text-2xl font-[500] mb-4">Wyszukaj</h2>

                <div className="location-search border rounded-full px-3 py-2 w-full flex justify-start items-center">
                  <HiOutlineLocationMarker className="text-2xl" />
                  <div className="content w-full ml-3">
                    <p className="font-[500] text-xs text-[#757783]">
                      Lokalizacja
                    </p>
                    <Input
                      value="Rogowo, Polska"
                      className="border-0 p-0 font-bold"
                    />
                  </div>
                </div>

                <div className="w-full border rounded-full px-5 py-3">
                  <div className="flex justify-start items-center">
                    <FaCalendar className="text-2xl mr-2" />
                    <div>
                      <div className="flex justify-start items-center">
                        <p className="font-[500] text-xs w-1/2 text-[#757783]">
                          Przyjazd
                        </p>
                        <p className="font-[500] text-xs w-1/2 text-[#757783]">
                          Wyjazd
                        </p>
                      </div>
                      <RangePicker
                        className="w-full border-none p-0 text-xl text-black"
                        placeholder={["czw. 13 kwi.", "czw. 13 kwi."]}
                        suffixIcon={false}
                      />
                    </div>
                  </div>
                </div>

                <div className="w-full border rounded-full flex justify-start items-center px-5 py-3">
                  <FaUsers className="text-2xl" />
                  <div className="content w-full ml-3">
                    <p className="font-[500] text-xs text-[#757783]">
                      Ilość osób
                    </p>
                    <select className="w-full px-0 border-none">
                      <option value="demo">Demo</option>
                    </select>
                  </div>
                </div>

                <button className="flex btn mt-3 justify-center items-center btn-golden rounded-full">
                  <FaSearch className="mr-3"></FaSearch> Szukaj
                </button>
              </div>
            </div>
          </div>
          <div className="lg:w-9/12">
            <div className="filter">
              <div className="flex justify-between items-center">
                <div className="left">
                  <h2 className="text-2xl font-[500]">Wyniki wyszukiwania</h2>
                  <p className="text-sm text-[#9f9b94]">(412 wyników)</p>
                </div>

                <div className="right flex justify-end items-center">
                  <div className="tab-btns p-2 bg-gray rounded-full">
                    <button className="btn tab-btn hover:bg-white active rounded-full mr-3">
                      Wszystkie
                    </button>
                    <button className="btn tab-btn hover:bg-white rounded-full mr-3">
                      Pensjonaty
                    </button>
                    <button className="btn tab-btn hover:bg-white rounded-full">
                      Apartamenty
                    </button>
                  </div>
                  <button className="btn btn-gray rounded-full flex ml-4 justify-center items-center">
                   <RiListSettingsFill className="text-xl mr-2"/> Filtry <span className="ml-2 badge golden-badge">2</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="listings mt-5">
                {
                    roomData.map(room => (
                        <ListingItemCard key={room.id} room={room} />
                    ))
                }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listings;
