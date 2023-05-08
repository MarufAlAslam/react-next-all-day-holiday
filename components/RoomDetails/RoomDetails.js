import { Button, Card, DatePicker, Input, Progress } from "antd";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CgSwap } from "react-icons/cg";
import {
  FaCalendar,
  FaRegThumbsDown,
  FaRegThumbsUp,
  FaSearch,
  FaStar,
  FaStarHalf,
  FaUsers,
} from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoBedSharp, IoPeople } from "react-icons/io5";
import { FiArrowUpRight } from "react-icons/fi";

const Details = () => {
  const [reviewState, setReviewState] = useState([]);
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
    },
  ];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const reviews = [
    {
      id: 1,
      name: "Patryk",
      date: "02.11.2023",
      feedback: "Przemiła obsługa, miły hotel blisko morza.",
      likes: 0,
      dislikes: 0,
    },
    {
      id: 2,
      name: "Marcin",
      date: "02.11.2023",
      feedback:
        "Dobre śniadania, hotel blisko centrum i blisko morza. codzienne sprzątanie, ciepły basen z leżakami. w cenie powitalna kawa, herbata, piwo lub wino. w pokojach dostęp do wody, kawy i herbaty.",
      likes: 0,
      dislikes: 0,
    },
    {
      id: 3,
      name: "Izabela",
      date: "02.11.2023",
      feedback:
        "W hotelu odpowiadało nam dosłownie wszystko, było pięknie, czysto, personel bardzo życzliwy i pomocny. Śniadania pyszne, różnorodne, każdy mógł wybrać coś dla siebie. Hotel w fajnej lokalizacji - blisko do morza oraz do centrum. Polecamy serdecznie! ❤️",
      likes: 0,
      dislikes: 0,
    },
  ];

  useEffect(() => {
    setReviewState(reviews);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { RangePicker } = DatePicker;

  const increaseLikes = (id) => {
    const newReviews = reviewState.map((review) => {
      if (review.id === id) {
        return {
          ...review,
          likes: review.likes + 1,
        };
      }
      return review;
    });

    setReviewState(newReviews);
  };

  const decreaseLikes = (id) => {
    const newReviews = reviewState.map((review) => {
      if (review.id === id) {
        return {
          ...review,
          dislikes: review.dislikes + 1,
        };
      }
      return review;
    });

    setReviewState(newReviews);
  };
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

              <div className="md:flex mt-6 justify-start items-center">
                <div className="flex border border-[#DDDDDD] p-3 rounded-md justify-start items-center md:mt-0 mt-3">
                  <CgSwap className="text-xl mr-1" />
                  <span className="text-[#757783] font-[600] text-sm">
                    {room.size} m<sup>2</sup>
                  </span>
                </div>
                <div className="flex border border-[#DDDDDD] p-3 rounded-md justify-start items-center md:ml-5 md:mt-0 mt-3">
                  <IoPeople className="mr-1" />
                  <span className="text-[#757783] font-[600] text-sm">
                    {room.guests} Gośći
                  </span>
                </div>
                <div className="flex border border-[#DDDDDD] p-3 rounded-md justify-start items-center md:ml-5 md:mt-0 mt-3">
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
                <div className="md:flex flex-wrap mt-4 justify-start items-center">
                  <div className="flex border border-[#DDDDDD] p-3 rounded-md justify-start items-center md:mt-0 mt-3">
                    <CgSwap className="text-xl mr-1" />
                    <span className="text-[#757783] font-[600] text-sm">
                      {room.size} m<sup>2</sup>
                    </span>
                  </div>
                  <div className="flex border border-[#DDDDDD] p-3 rounded-md justify-start items-center md:ml-5 md:mt-0 mt-3">
                    <IoPeople className="mr-1" />
                    <span className="text-[#757783] font-[600] text-sm">
                      {room.guests} Gośći
                    </span>
                  </div>
                  <div className="flex border border-[#DDDDDD] p-3 rounded-md justify-start items-center md:ml-5 md:mt-0 mt-3">
                    <IoBedSharp className="mr-1" />
                    <span className="text-[#757783] font-[600] text-sm">
                      {room.beds} Sypialnie
                    </span>
                  </div>
                  <div className="flex border border-[#DDDDDD] p-3 rounded-md justify-start items-center md:ml-5 md:mt-0 mt-3">
                    <CgSwap className="text-xl mr-1" />
                    <span className="text-[#757783] font-[600] text-sm">
                      {room.size} m<sup>2</sup>
                    </span>
                  </div>
                  <div className="flex border border-[#DDDDDD] p-3 rounded-md justify-start items-center md:ml-5 md:mt-0 mt-3">
                    <IoPeople className="mr-1" />
                    <span className="text-[#757783] font-[600] text-sm">
                      {room.guests} Gośći
                    </span>
                  </div>
                  <div className="flex border border-[#DDDDDD] p-3 rounded-md justify-start items-center md:ml-5 md:mt-0 mt-3">
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

                    <div className="mt-4 grid lg:grid-cols-2 grid-cols-1 lg:gap-10">
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
                <div className="my-5">
                  {reviewState.map((review, index) => (
                    <div className="review-holder border-b py-8" key={index}>
                      <div className="flex justify-start items-center">
                        <FaStar className="text-golden" />
                        <FaStar className="text-golden" />
                        <FaStar className="text-golden" />
                        <FaStar className="text-golden" />
                        <FaStarHalf className="text-golden" />
                      </div>
                      <div className="flex justify-start my-2 items-center">
                        <span className="text-black font-[600]">
                          {review.name}
                        </span>
                        <span className="text-[#757783] text-sm font-[500] ml-2">
                          {review.date}
                        </span>
                      </div>
                      <p className="font-[500] text-[#757783]">
                        {review.feedback}
                      </p>

                      <div className="mt-5 flex gap-3">
                        <Button
                          onClick={() => increaseLikes(review.id)}
                          className="flex justify-center items-center rounded-full border-[#ddd] text-[#757783]"
                        >
                          <FaRegThumbsUp className="mr-2" />{" "}
                          <span>{review.likes}</span>
                        </Button>
                        <Button
                          onClick={() => decreaseLikes(review.id)}
                          className="flex justify-center items-center rounded-full border-[#ddd] text-[#757783]"
                        >
                          <FaRegThumbsDown className="mr-2" />{" "}
                          <span>{review.dislikes}</span>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  className="btn px-5 bg-black text-white rounded-full fs-14"
                  href={"/contact"}
                >
                  Zobacz więcej <FiArrowUpRight className="ml-2 text-lg" />
                </Link>

                <div className="mt-6 border-t py-5">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3302.101861462133!2d-118.29201182363052!3d34.14373601289254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c0623fe71971%3A0xc829e89a5dcc767e!2s4730%20Crystal%20Springs%20Dr%2C%20Los%20Angeles%2C%20CA%2090027%2C%20USA!5e0!3m2!1sen!2sbd!4v1683521314376!5m2!1sen!2sbd"
                    allowFullScreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
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
