import { Card, DatePicker, Input, Progress } from "antd";
import React from "react";
import { CgSwap } from "react-icons/cg";
import {
  FaCalendar,
  FaSearch,
  FaStar,
  FaStarHalf,
  FaUsers,
} from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoBedSharp, IoPeople } from "react-icons/io5";

const Details = () => {
  const roomDetailsData = [
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
      details:
        "Obiekt Shellter Apartament Nadmorski położony jest w miejscowości Rogowo i oferuje klimatyzację. Odległość ważnych miejsc od obiektu: Plaża Dźwirzyno – 1,8 km, Plaża Rogowo – 2,3 km. Na miejscu zapewniono balkon, bezpłatny prywatny parking oraz bezpłatne WiFi.",
      // reviews: [
      //   {
      //     id: 1,
      //     name: "Patryk",
      //     date: "02.11.2023",
      //     feedback: "Przemiła obsługa, miły hotel blisko morza.",
      //   },
      //   {
      //     id: 2,
      //     name: "Marcin",
      //     date: "02.11.2023",
      //     feedback:
      //       "Dobre śniadania, hotel blisko centrum i blisko morza. codzienne sprzątanie, ciepły basen z leżakami. w cenie powitalna kawa, herbata, piwo lub wino. w pokojach dostęp do wody, kawy i herbaty.",
      //   },
      //   {
      //     id: 3,
      //     name: "Izabela",
      //     date: "02.11.2023",
      //     feedback:
      //       "W hotelu odpowiadało nam dosłownie wszystko, było pięknie, czysto, personel bardzo życzliwy i pomocny. Śniadania pyszne, różnorodne, każdy mógł wybrać coś dla siebie. Hotel w fajnej lokalizacji - blisko do morza oraz do centrum. Polecamy serdecznie! ❤️",
      //   }
      // ],
    },
  ];

  const { RangePicker } = DatePicker;
  return (
    <div className="py-6">
      <div className="lg:flex justify-between items-start">
        <div className="lg:w-9/12 lg:pr-10">
          {roomDetailsData.map((room, index) => (
            <div key={index}>
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
                  {room.stars}{" "}
                </span>
                <span className="text-[#757783] text-xs ml-2 font-[500]">
                  261 opinii klientów
                </span>
              </div>

              <h2 className="text-4xl font-[500] text-black mt-2">
                {room.name}
              </h2>

              <div className="flex mt-6 justify-start items-center">
                <div className="flex border border-[#DDDDDD] p-3 rounded-md justify-start items-center">
                  <CgSwap className="text-xl mr-1" />
                  <span className="text-[#757783] font-[600] text-sm">
                    {room.size} m<sup>2</sup>
                  </span>
                </div>
                <div className="flex border border-[#DDDDDD] p-3 rounded-md justify-start items-center ml-5">
                  <IoPeople className="mr-1" />
                  <span className="text-[#757783] font-[600] text-sm">
                    {room.guests} Gośći
                  </span>
                </div>
                <div className="flex border border-[#DDDDDD] p-3 rounded-md justify-start items-center ml-5">
                  <IoBedSharp className="mr-1" />
                  <span className="text-[#757783] font-[600] text-sm">
                    {room.beds} Sypialnie
                  </span>
                </div>
              </div>

              <div className="divider"></div>

              <div className="mt-5">
                <p className="text-lg mb-2 font-[600] text-black">
                  Informacje o pokoju
                </p>
                <p className="text-[#757783] font-[500]">{room.details}</p>
              </div>

              <div className="divider"></div>

              <div className="my-5">
                <p className="text-lg mb-2 font-[600] text-black">
                  Udogodnienia pokoju
                </p>
                <div className="flex flex-wrap mt-4 justify-start items-center">
                  <div className="flex border border-[#DDDDDD] p-3 rounded-md justify-start items-center">
                    <CgSwap className="text-xl mr-1" />
                    <span className="text-[#757783] font-[600] text-sm">
                      {room.size} m<sup>2</sup>
                    </span>
                  </div>
                  <div className="flex border border-[#DDDDDD] p-3 rounded-md justify-start items-center ml-5">
                    <IoPeople className="mr-1" />
                    <span className="text-[#757783] font-[600] text-sm">
                      {room.guests} Gośći
                    </span>
                  </div>
                  <div className="flex border border-[#DDDDDD] p-3 rounded-md justify-start items-center ml-5">
                    <IoBedSharp className="mr-1" />
                    <span className="text-[#757783] font-[600] text-sm">
                      {room.beds} Sypialnie
                    </span>
                  </div>
                  <div className="flex border border-[#DDDDDD] p-3 rounded-md justify-start items-center ml-5">
                    <CgSwap className="text-xl mr-1" />
                    <span className="text-[#757783] font-[600] text-sm">
                      {room.size} m<sup>2</sup>
                    </span>
                  </div>
                  <div className="flex border border-[#DDDDDD] p-3 rounded-md justify-start items-center ml-5">
                    <IoPeople className="mr-1" />
                    <span className="text-[#757783] font-[600] text-sm">
                      {room.guests} Gośći
                    </span>
                  </div>
                  <div className="flex border border-[#DDDDDD] p-3 rounded-md justify-start items-center ml-5">
                    <IoBedSharp className="mr-1" />
                    <span className="text-[#757783] font-[600] text-sm">
                      {room.beds} Sypialnie
                    </span>
                  </div>
                </div>
              </div>

              <div className="divider"></div>

              {/* reviews */}
              <div className="mt-5">
                <p className="text-lg mb-2 font-[600] text-black">
                  Opinie gości
                </p>

                <Card className="bg-[#F4F4F4] mt-4">
                  <div className="card-body">
                    <div className="flex justify-start items-center">
                      <FaStar className="text-golden text-3xl" />{" "}
                      <span className="text-3xl font-[500] ml-3">
                        {room.stars}/5
                      </span>
                      <span className="text-[#757783] ml-2 font-[500]">
                        {room.reviews} opinii klientów
                      </span>
                    </div>

                    <div className="mt-4 grid lg:grid-cols-2 grid-cols-1 gap-10">
                      <div>
                        <div className="flex mb-4 justify-between items-center">
                          <span className="font-[500]">5</span>
                          <Progress
                            className="mx-3 mb-0"
                            percent={71}
                            strokeColor={"#BDA067"}
                          />
                        </div>
                        <div className="flex mb-4 justify-between items-center">
                          <span className="font-[500]">4</span>
                          <Progress
                            className="mx-3 mb-0"
                            percent={12}
                            strokeColor={"#BDA067"}
                          />
                        </div>
                        <div className="flex mb-4 justify-between items-center">
                          <span className="font-[500]">3</span>
                          <Progress
                            className="mx-3 mb-0"
                            percent={1}
                            strokeColor={"#BDA067"}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex mb-4 justify-between items-center">
                          <span className="font-[500]">5</span>
                          <Progress
                            className="mx-3 mb-0"
                            percent={71}
                            strokeColor={"#BDA067"}
                          />
                        </div>
                        <div className="flex mb-4 justify-between items-center">
                          <span className="font-[500]">4</span>
                          <Progress
                            className="mx-3 mb-0"
                            percent={12}
                            strokeColor={"#BDA067"}
                          />
                        </div>
                        <div className="flex mb-4 justify-between items-center">
                          <span className="font-[500]">3</span>
                          <Progress
                            className="mx-3 mb-0"
                            percent={1}
                            strokeColor={"#BDA067"}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* reviews */}
                {/* <div className="mt-5">
                  {room.reviews.map((review, index) => (
                    <div key={index}>
                      <div className="flex justify-start items-center">
                        <FaStar className="text-golden" />
                        <FaStar className="text-golden" />
                        <FaStar className="text-golden" />
                        <FaStar className="text-golden" />
                        <FaStarHalf className="text-golden" />
                      </div>
                    </div>
                  ))}
                </div> */}
              </div>
            </div>
          ))}
        </div>
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
      </div>
    </div>
  );
};

export default Details;
