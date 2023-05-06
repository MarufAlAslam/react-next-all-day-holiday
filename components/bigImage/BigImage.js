import React from "react";

import b1 from "../../assets/images/b1.png";
import b2 from "../../assets/images/b2.png";
import Image from "next/image";

const BigImage = () => {
  const data = [
    {
      id: 1,
      image: b1,
      subtitle: "Rogowo",
      title: "Shellter",
    },
    {
      id: 2,
      image: b2,
      subtitle: "Mielno",
      title: "Unieście",
    },
  ];
  return (
    <div className="py-8 custom-container">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
        {data.map((item, index) => (
          <div key={index} className="relative">
            <div className="absolute px-8 py-10 top-0 left-0 w-full h-full bg-transparent flex flex-col justify-end items-start">
                <p className="text-sm text-golden uppercase font-[600] ls-2">
                    {
                        item.subtitle
                    }
                </p>
                <p className="text-3xl text-white font-bold">
                    {
                        item.title
                    }
                </p>
            </div>
            <Image
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BigImage;
