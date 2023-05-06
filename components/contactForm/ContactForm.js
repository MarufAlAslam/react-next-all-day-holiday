import React from "react";

import map from "../../assets/images/map.png";
import Image from "next/image";

import { FaEnvelope, FaPhone, FaUser } from "react-icons/fa";
import { Input } from "antd";

const ContactForm = () => {
  return (
    <div className="custom-container py-10 relative">
      <Image src={map} alt="map" className="h-full w-full" />

      <div className="absolute top-0 right-10 w-full h-full flex items-center justify-end">
        <div className="bg-white p-6 lg:w-1/2 w-full rounded-3xl">
          <form class="relative font-sans text-sm rounded w-full mx-auto my-8 px-8 pt-8 pb-8">
            <h3 class="font-[600] text-3xl mb-7">
            Wypełnij formularz
            </h3>

            <div className="flex justify-start items-center border px-3 bg-[#E8F0FE] py-2 mb-6 rounded-full relative">
                <FaUser className="mr-4" />
                <div className="w-full">
                  <label className="text-xs text-green-600">
                    Imię i nazwisko <span className="text-red-500">*</span>
                  </label>
                  <Input placeholder="Marcin Dutkiewicz" className="p-0 text-xl" required/>
                </div>
              </div>
              <div className="flex justify-start items-center border px-3 bg-[#E8F0FE] py-2 mb-6 rounded-full relative">
                <FaPhone className="mr-4" />
                <div className="w-full">
                  <label className="text-xs text-green-600">
                  Numer telefonu <span className="text-red-500">*</span>
                  </label>
                  <Input placeholder="Numer telefonu*" className="p-0 text-xl" required/>
                </div>
              </div>
              <div className="flex justify-start items-center border px-3 bg-[#E8F0FE] py-2 mb-6 rounded-full relative">
                <FaEnvelope className="mr-4" />
                <div className="w-full">
                  <label className="text-xs text-green-600">
                  Adres e-mail <span className="text-red-500">*</span>
                  </label>
                  <Input placeholder="Adres e-mail*" className="p-0 text-xl" required/>
                </div>
              </div>
              <div className="flex justify-start items-center border px-3 bg-[#E8F0FE] py-2 mb-6 rounded-full relative">
                <FaEnvelope className="mr-4" />
                <div className="w-full">
                  <label className="text-xs text-green-600">
                  Wiadomość <span className="text-red-500">*</span>
                  </label>
                  <textarea placeholder="Wiadomość*" className="p-0 text-xl w-full resize-none" required/>
                </div>
              </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
