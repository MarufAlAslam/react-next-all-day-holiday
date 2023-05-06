import React from "react";
import Image from "next/image";
import Link from "next/link";

import { BsEnvelope } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";

const TeamCard = ({ team }) => {
  return (
    <div className="bg-white">
      <div className="p-6">
        <div className="text-center">
          <Image
            src={team.image}
            alt={team.name}
            className="w-14 h-14 block mx-auto object-cover rounded-full mb-4"
          />
          <h2 className="text-xl font-[500] text-black">{team.name}</h2>
          <span className="text-sm text-[#757783]">{team.position}</span>

          <Link
            href={"mailto:" + team.email}
            className="btn w-full lowercase text-xs btn-outline-golden rounded-full mt-4"
          >
            <BsEnvelope className="mr-2" />
            {team.email}
          </Link>
          <Link
            href={"mailto:" + team.email}
            className="btn w-full text-xs btn-golden rounded-full mt-4"
          >
            <FiPhoneCall className="mr-2" />
            {team.phone}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
