import { Card } from "antd";
import React from "react";

import img1 from "../../assets/images/heroLarge.png";
import Image from "next/image";
import smImg from "../../assets/images/smImg.png";

const DetailsHero = () => {
  return (
    <div className="py-8">
      <div className="lg:flex justify-between items-start gap-4">
        <div className="w-full">
          <Card className="border-none h-full">
            <Image src={img1} className="w-full h-full" alt="hero" />
          </Card>
        </div>
        <div className="lg:w-3/6">
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
            <Card className="border-none">
              <Image src={smImg} className="w-full" alt="hero" />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsHero;
