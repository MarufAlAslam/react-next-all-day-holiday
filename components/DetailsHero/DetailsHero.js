import { Card } from "antd";
import React from "react";

import img1 from "../../assets/images/heroLarge.png";
import Image from "next/image";
import smImg from "../../assets/images/smImg.png";

const DetailsHero = () => {
  return (
    <div className="py-8">
      <div className="md:flex justify-between items-start gap-4">
        <div className="w-full">
          <Card className="border-none h-full">
            <Image src={img1} className="w-full h-full" alt="hero" />
          </Card>
        </div>
        <div className="lg:w-3/6 hldr">
          <div className="grid gap-5 grid-cols-2">
            <Card className="border-none">
              <Image src={smImg} className="w-full" alt="hero" />
            </Card>
            <Card className="border-none">
              <Image src={smImg} className="w-full" alt="hero" />
            </Card>
            <Card className="border-none">
              <Image src={smImg} className="w-full" alt="hero" />
            </Card>
            <Card className="border-none rounded-2xl overflow-hidden last-one relative">
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
                <div className="text-white text-center">
                  <h3 className="text-2xl font-semibold">+52</h3>
                </div>
              </div>
              <Image src={smImg} className="w-full" alt="hero" />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsHero;
