import React from "react";
import Banner from "../components/Banner";
import Team from "../data/teams.json";
import { LiaFacebookF } from "react-icons/lia";
import { RiTwitterXFill } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io";
import GetStart from "../components/GetStart";

const Teams = () => {
  return (
    <>
      <Banner title="Our Teams" />

      <div>
        <div className="text-center py-20 px-4 md:px-0">
          <h3 className="text-sm font-bold uppercase">Meet our team</h3>
          <h2 className="text-4xl font-bold pt-3 pb-5">People Behind Us</h2>
          <p className="md:w-[40%] mx-auto">
            We specialize in creating functional and aesthetically captivating
            living spaces that reflect your unique style
          </p>
        </div>

        <div className="container grid grid-cols-2 md:grid-cols-3 gap-7 pb-24 px-4 md:px-0">
          {Team.map((items, index) => (
            <div key={index}>
              <img src={items.image} alt={items.name} className="aspect-[2/2] w-full object-cover object-top rounded-lg" />

              <div className="md:flex items-center justify-between py-4 px-1 space-y-3 md:space-y-0">
                <div>
                  <h2 className="text-xl font-bold pb-px">{items.name}</h2>
                  <p className="uppercase text-sm">{items.jobTitle}</p>
                </div>

                <div>
                  <ul className="flex gap-3">
                  <li><LiaFacebookF className="p-2 border rounded-full border-gray-300 shadow text-4xl" /></li>
                  <li><RiTwitterXFill className="p-2 border rounded-full border-gray-300 shadow text-4xl" /></li>
                  <li><IoLogoInstagram className="p-2 border rounded-full border-gray-300 shadow text-4xl" /></li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <GetStart />
    </>
  );
};

export default Teams;
