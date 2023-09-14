import React from "react";
import ProjectAmenities from "../ProjectAmenities";
import Navbar from "../Navbar";
import Bottom from "../Bottom";

const AddOn = () => {
  return (
    <>
      <Navbar />
      <div style={{height:'70vh', backgroundColor:'#000000'}}>
          <h1 className="text-white text-3xl font-semibold pl-[15rem] pt-[5rem]">Add more Prosperity to</h1>
          <h1 className="text-white text-3xl font-semibold pl-[15rem]">Your Beloved Family</h1>
      </div>
      <div className="mx-[15rem]">
        <h1 className="text-2xl font-semibold py-[0.5rem]">
          About Addon Project
        </h1>
        <p className="text-base leading-7 pb-[0.5rem] text-justify">
          <span className="font-semibold text-base">Addon</span> is a
          prestigious dream project of "JSR Group Suncity" and is being
          developed DTCP & RERA approved Mega Project. As one of the best
          ventures and having open plots and independent House / Duplex Villa
          Plots with proposed red sandalwood avenue plantations, situated at
          Hyderabad to Warangal NH-163(Deccan to Delhi National Highway) Facing
          Layout, Wangapally Village, Yadagirigutta Mandal, Yadadri Bhongiri
          District, Telangana State. Near Telangana's Biggest Pilgrim center of
          Lord Sri Lakshmi Narasimha Swamy Temple (recently named Yaadadri known
          as Telangana Tirupathi). The fastest industrial growing corridor in
          India
        </p>
        <p className="text-base leading-7 pb-[0.5rem]  text-justify">
          <span className="font-semibold text-base">JSR Group SunCity</span> is
          the most accomplished and trusted real estate company, offering
          HMDA/DTCP approved layouts for both residential and commercial plots
          near Shamshabad, Hyderabad, Wangapally, and Yadagirigutta.
        </p>
        <p className="text-base leading-7 pb-[0.5rem]  text-justify">
          <span className="font-semibold text-base">JSR Group SunCity </span> is
          certified in ISO 9001-2015, which makes it more prominent in the
          industry, facilitating best-in-class ventures to the customers. And
          having more than 20+ years of experience has a proven record in the
          field, through which JSR Group has gained thousands of trusted
          customers both national and international.
        </p>
      </div>
      <div className="mx-[15rem] mt-10">
        <span className="text-2xl font-semibold">Location Highlights</span>
      </div>
      <div className="my-10 mx-[15rem] grid grid-cols-2">
        <div className="w-3/4 my-5">
          <p>Hyderabad to Warangal (NH-163 facing) Aler, Yadagirigutta.</p>
          <hr />
        </div>
        <div className="w-3/4 my-5">
          <p>Walkable Distance to Bus Stand.</p>
          <hr />
        </div>
        <div className="w-3/4 my-5">
          <p>Very close to world famous JAIN temple at Kolanpaka.</p>
          <hr />
        </div>
        <div className="w-3/4 my-5">
          <p>Indian famous mythological museum in Surendrapuri.</p>
          <hr />
        </div>
        <div className="w-3/4 my-5">
          <p>Nearby Sri Laxmi Narasimha swamy temple, yadagirigutta.</p>
          <hr />
        </div>
        <div className="w-3/4 my-5">
          <p>Proposed HDMA Township at Bhongiri.</p>
          <hr />
        </div>
        <div className="w-3/4 my-5">
          <p>Proposed Bhongiri Industrial area (in 15000 Acres.).</p>
          <hr />
        </div>
        <div className="w-3/4 my-5">
          <p>AIIMS Medical University & 1000 Beds Hospital.</p>
          <hr />
        </div>
        <div className="w-3/4 my-5">
          <p>Singapore Township, Raheja, Infosys and IT Parks.</p>
          <hr />
        </div>
        <div className="w-3/4 my-5">
          <p>60 Min. Drive from Rajeev Gandhi International Airport, Shamshabad</p>
          <hr />
        </div>
        <div className="w-3/4 my-5">
          <p>40 Min. Drive from Uppal Ring Road</p>
          <hr />
        </div>
        <div className="w-3/4 my-5">
          <p>25 Min. Drive from Nehru Outer Ring Road.</p>
          <hr />
        </div>
        <div className="w-3/4 my-5">
          <p>10 Min Drive from Yadadri Temple</p>
          <hr />
        </div>
      </div>
      <div className="mx-[15rem]">
        <ProjectAmenities />
      </div>
        <Bottom/>
    </>
  );
};

export default AddOn;
