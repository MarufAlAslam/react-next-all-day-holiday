import React from "react";
import logo from "../../../assets/images/logo.svg";
import burger from "../../../assets/images/burger.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { FiPhoneCall, FiArrowUpRight } from "react-icons/fi";

const Header = () => {
  const router = useRouter();
  return (
    <div className="custom-container py-3 mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn menubtn border-none menu-btn bg-transparent focus:bg-transparent lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="black"
                viewBox="0 0 24 24"
                stroke="black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link
                  className={`font-semibold ${
                    router.pathname == "/" ? "active" : ""
                  }`}
                  href={"/"}
                >
                  Start
                </Link>
              </li>
              <li>
                <Link
                  className={`font-semibold ${
                    router.pathname == "/o-nas" ? "active" : ""
                  }`}
                  href={"/o-nas"}
                >
                  O nas
                </Link>
              </li>
              <li>
                <Link
                  className={`font-semibold ${
                    router.pathname == "/listings" ? "active" : ""
                  }`}
                  href={"/listings"}
                >
                  Apartamenty
                </Link>
              </li>
              <li>
                <Link
                  className={`font-semibold ${
                    router.pathname == "/pensjonaty" ? "active" : ""
                  }`}
                  href={"/pensjonaty"}
                >
                  Pensjonaty
                </Link>
              </li>
              <li>
                <Link
                  className={`font-semibold ${
                    router.pathname == "/dla-wlascicieli" ? "active" : ""
                  }`}
                  href={"/dla-wlascicieli"}
                >
                  Dla właścicieli
                </Link>
              </li>
              <li>
                <Link
                  className={`font-semibold ${
                    router.pathname == "/contact" ? "active" : ""
                  }`}
                  href={"/contact"}
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
          <Link href={"/"} className="">
            <Image src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link
                className={`font-semibold ${
                  router.pathname == "/" ? "active" : ""
                }`}
                href={"/"}
              >
                Start
              </Link>
            </li>
            <li>
              <Link
                className={`font-semibold ${
                  router.pathname == "/o-nas" ? "active" : ""
                }`}
                href={"/o-nas"}
              >
                O nas
              </Link>
            </li>
            <li>
              <Link
                className={`font-semibold ${
                  router.pathname == "/listings" ? "active" : ""
                }`}
                href={"/listings"}
              >
                Apartamenty
              </Link>
            </li>
            <li>
              <Link
                className={`font-semibold ${
                  router.pathname == "/pensjonaty" ? "active" : ""
                }`}
                href={"/pensjonaty"}
              >
                Pensjonaty
              </Link>
            </li>
            <li>
              <Link
                className={`font-semibold ${
                  router.pathname == "/dla-wlascicieli" ? "active" : ""
                }`}
                href={"/dla-wlascicieli"}
              >
                Dla właścicieli
              </Link>
            </li>
            <li>
              <Link
                className={`font-semibold ${
                  router.pathname == "/contact" ? "active" : ""
                }`}
                href={"/contact"}
              >
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end lg:flex hidden">
          <Link
            href={"tel:+48 512 569 822"}
            className="flex mr-2 justify-start items-center btn bg-transparent hover:bg-transparent fs-14 border-none text-black"
          >
            <FiPhoneCall className="mr-2 text-golden" />
            +48 512 569 822
          </Link>

          <Link
            className="btn white px-5 bg-black text-white rounded-full fs-14"
            href={"/contact"}
          >
            Rezerwuj online <FiArrowUpRight className="ml-2 text-lg" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
