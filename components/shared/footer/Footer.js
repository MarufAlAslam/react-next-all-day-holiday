import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import fLogo from "../../../assets/images/f-logo.svg";
import React from "react";

import { FiPhoneCall, FiArrowUpRight } from "react-icons/fi";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { BsFacebook, BsTwitter, BsGoogle,  BsInstagram } from "react-icons/bs";

const Footer = () => {
  const router = useRouter();
  return (
    <div className="bg-black py-14 mx-auto">
      <div className="custom-container">
        <div className="lg:flex justify-between items-center pb-14">
          <div className="lg:w-1/2 w-full">
            <h2 className="text-4xl text-white font-[500]">
              Nie wahaj się skontaktować z nami! Nasz zespół jest tutaj, aby Ci
              pomóc.
            </h2>
          </div>
          <div className="lg:w-1/2 lg:text-right w-full">
            <Link
              className="text-white inline-flex justify-center fs-14 font-semibold items-center btn-golden rounded-full"
              href={"/contact"}
            >
              Skontaktuj się z nami <FiArrowUpRight className="text-2xl ml-2" />
            </Link>
          </div>
        </div>

        <hr className="bg-gray-500" />

        <div className="lg:flex justify-between items-start pt-14">
          <div className="lg:w-1/3 w-full">
            <div className="lg:w-9/12">
              <Image src={fLogo} className="mb-5" alt="logo" />
              <p className="fs-14 text-white">
                Jesteśmy zawsze gotowi sprostać potrzebom naszych gości.
              </p>
            </div>
          </div>
          <div className="lg:w-1/3 w-full">
            <div className="lg:flex justify-between items-start">
              <div className="lg:w-1/2 w-full">
                <p className="text-golden fs-13 uppercase font-[600] mb-4">
                  Nasze kontakty
                </p>

                <ul>
                  <li className="text-white fs-14 mb-2">
                    <Link
                      className="flex justify-start items-start"
                      href={"tel:+1 323 913 4688"}
                    >
                      <FiPhoneCall className="inline-block mr-2 text-golden" />{" "}
                      +1 323 913 4688
                    </Link>
                  </li>
                  <li className="text-white fs-14 mb-2">
                    <Link
                      className="flex justify-start items-start"
                      href={"mailto:info@demolik.org"}
                    >
                      <FaEnvelope className="inline-block mr-2 text-golden" />{" "}
                      info@demolik.org
                    </Link>
                  </li>
                  <li className="text-white fs-14 mb-2">
                    <Link className="flex justify-start items-start" href={""}>
                      <FaMapMarkerAlt className="inline-block mr-2 text-golden" />{" "}
                      4730 Crystal Springs Dr, Lod Angeles, CA 90027
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="lg:w-1/2 w-full">
                <p className="text-golden fs-13 uppercase font-[600] mb-4">
                  Popularne wiadomości
                </p>

                <Link href={""}>
                  <p className="text-white fs-14">
                    5 Facilities Every Hotel Should Haver
                  </p>
                  <p className="mb-4 text-[12px] text-[#757783]">
                    Maj. 04, 2019
                  </p>
                </Link>

                <Link href={""}>
                  <p className="text-white fs-14">
                    Making the Most of Your Stay at Resort Hotel
                  </p>
                  <p className="mb-4 text-[12px] text-[#757783]">
                    Maj. 04, 2019
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 w-full">
            <div className="lg:flex justify-between items-start">
              <div className="lg:w-1/2 w-full">
                <p className="text-golden fs-13 uppercase font-[600] mb-4">
                  Nawigacja
                </p>

                <ul>
                  <li className="text-white fs-14 mb-2">
                    <Link
                      className="flex justify-start items-start"
                      href={"/o-nas"}
                    >
                      O nas
                    </Link>
                  </li>
                  <li className="text-white fs-14 mb-2">
                    <Link className="flex justify-start items-start" href={"/"}>
                      Nasz zespół
                    </Link>
                  </li>
                  <li className="text-white fs-14 mb-2">
                    <Link className="flex justify-start items-start" href={"/"}>
                      Pokoje
                    </Link>
                  </li>
                  <li className="text-white fs-14 mb-2">
                    <Link className="flex justify-start items-start" href={"/"}>
                      Blog
                    </Link>
                  </li>
                  <li className="text-white fs-14 mb-2">
                    <Link className="flex justify-start items-start" href={"/"}>
                      Galeria
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="lg:w-1/2 w-full">
                <p className="text-golden fs-13 uppercase font-[600] mb-4">
                  Media społecznościowe
                </p>

                <Link
                  className="flex mb-2 text-white fs-14 justify-start items-start"
                  href={"/"}
                >
                  <BsFacebook className="inline-block mr-2 mt-1 mb-0 text-white" />{" "}
                  <span>Facebook</span>
                </Link>
                <Link
                  className="flex mb-2 text-white fs-14 justify-start items-start"
                  href={"/"}
                >
                  <BsTwitter className="inline-block mr-2 mt-1 mb-0 text-white" />{" "}
                  <span>Twitter</span>
                </Link>
                <Link
                  className="flex mb-2 text-white fs-14 justify-start items-start"
                  href={"/"}
                >
                  <BsGoogle className="inline-block mr-2 mt-1 mb-0 text-white" />{" "}
                  <span>Google</span>
                </Link>
                <Link
                  className="flex mb-2 text-white fs-14 justify-start items-start"
                  href={"/"}
                >
                  <BsInstagram className="inline-block mr-2 mt-1 mb-0 text-white" />{" "}
                  <span>Instagram</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
