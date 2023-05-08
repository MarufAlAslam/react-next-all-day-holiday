import React from "react";

import Image from "next/image";
import { FaHeart, FaStar, FaStarHalf } from "react-icons/fa";

import { CgSwap } from "react-icons/cg";
import { IoPeople, IoBedSharp } from "react-icons/io5";
import { AiOutlineHeart } from "react-icons/ai";
import Link from "next/link";

const ListingItemCard = (room) => {
  return (
    <Link href={"/room-details"}>
        <div className="card border mb-5">
      <div className="card-body p-3">
        <div className="lg:flex justify-between items-center">
          <div className="image-holder lg:w-3/12 w-full">
            <Image className="lg:m-0 mx-auto" src={room.room.img} alt={room.name} />
          </div>
          <div className="details-holder lg:block flex justify-center items-center flex-col lg:w-6/12 lg:px-3 py-3 ">
            <div className="flex justify-start items-center">
              <div className="flex justify-start items-center">
                <FaStar className="text-golden" />
                <FaStar className="text-golden" />
                <FaStar className="text-golden" />
                <FaStar className="text-golden" />
                <FaStarHalf className="text-golden" />
              </div>
              <span className="text-black font-[600] text-sm ml-2">
                {" "}
                {room.room.stars}{" "}
              </span>
              <span className="text-[#757783] text-xs ml-2 font-[500]">
                261 opinii klientów
              </span>
            </div>

            <h2 className="text-xl font-[500] text-black mt-2">
              {room.room.name}
            </h2>
            <p className="text-sm text-[#757783] font-[500]">
              {room.room.address}
            </p>

            <div className="flex mt-6 justify-start items-center">
              <div className="flex lg:justify-start justify-center items-center">
                <CgSwap className="text-xl mr-1" />
                <span className="text-[#757783] font-[600] text-sm">
                  {room.room.size} m<sup>2</sup>
                </span>
              </div>
              <div className="flex justify-start items-center ml-3">
                <IoPeople className="mr-1" />
                <span className="text-[#757783] font-[600] text-sm">
                  {room.room.guests} Gośći
                </span>
              </div>
              <div className="flex justify-start items-center ml-3">
                <IoBedSharp className="mr-1" />
                <span className="text-[#757783] font-[600] text-sm">
                  {room.room.beds} Sypialnie
                </span>
              </div>
            </div>
          </div>

          <div className="actions-holder lg:w-3/12 w-full pr-4 flex lg:flex-col justify-between lg:items-end">
            <button className="heart-btn">
              <AiOutlineHeart className="lg:mr-0 mr-10" />
            </button>
            <p className="lg:mt-14 text-sm">
              <span className="text-xl font-[500] text-black">
                {room.room.price} zł
              </span> / noc
            </p>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default ListingItemCard;
