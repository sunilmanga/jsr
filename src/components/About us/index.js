import React from "react";
import Navbar from "../Navbar";
import Bottom from "../Bottom";

const Aboutus = () => {
  return (
    <div>
      <div className=" bg-black">
        <Navbar />
        <div className="w-[71.25rem] h-[25rem] px-[1rem] mx-[10.913rem]">
          <h2 className="text-white text-4xl font-semibold mb-[.689rem] pt-[13.6rem] pb-[6.8rem]">
            About JSR GROUP SUNCITY
          </h2>
        </div>
      </div>

      <div className="px-[1rem] py-[2rem] text-base font-normal mx-[11rem]">
        <p>
          JSR GROUP SUNCITY has a unique ethical and humanistic approach while
          operating in Real Estate business. The company is supported by
          thousands of earnest employees and happy customers across the world.
          JSR GROUP SUNCITY, strives to be the ideal destination that fulfills
          aspirations of our investors. We are driven by the concept of turning
          the thought of owning a "dream home" into a reality. We cherish a
          vision of providing every Indian an opportunity to own a property.
        </p>
        <br />
        <p>
          JSR GROUP SUNCITY Strength and credibility lies transparency in
          operations across businesses. Our diverse teams such as engineering,
          architecture, marketing, finance and law are binded by tight processes
          that not only helps us to coordinate and communicate effectively but
          also tap and harness synergies of national and regional teams. We
          believe in becoming trustworthy partners whose operations are designed
          to create dream homes that are upheld by our satisfied customers.
        </p>
      </div>

      <div className="px-[1rem] mx-[11rem] pt-[1.35rem] pb-[2.6rem] ">
        <div className="flex">
          <div className="w-[34.688rem] h-[34.688rem] flex-wrap">
            <h1 className="mb-[.634rem]">Our Vision</h1>
            <p className="mb-[.634rem]">
              To be Hyderabad’s leading luxurious and most valuable Real Estate
              Developer. To reinvent our customers’ dreams by building the
              superior residential and commercial spaces. We aim to deliver
              luxurious projects that are on par with International Standards
              and to establish JSR Group as the preferred destination for Luxury
              Real Estate in Hyderabad.
            </p>
            <h1 className="mb-[.634rem]">Our Mission</h1>
            <p className="mb-[.634rem]">
              To creating luxurious landmarks by setting benchmarks and
              delivering Architectural Marvels which are at par with global
              construction standards. Promoting Eco-friendly practices and
              innovations. To be first position in Telangana and Andhra Pradesh.
            </p>
            <h1 className="mb-[.634rem]">Quality Policy</h1>
            <p className="mb-[.634rem]">
              JSR Group is consistently committed to meet customer’s
              expectations in qualitative construction, delivery and product
              satisfaction. JSR Group promote continuous improvement of
              customer’s satisfaction by reviewing and adhering to Compliant
              Quality Management System.
            </p>
          </div>
          <div className="px-[1rem] flex">
            <div className="px-[1rem]">
              <img src="img/aboutiamage.jpg" alt="bgrnd" />
              <h2 className="font-bold">20+</h2>
              <p>Years of Exerience</p>
            </div>
            <div className="px-[1rem]">
              <img src="img/aboutiamage2.jpg" alt="placeholder" />
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-blue-400">
        <div className="px-[1rem] mx-[11rem] ">
          <div className="p-[2.6rem] text-lg font-semibold">
            <h4>
              If we multiply the numbers, It is pure{" "}
              <span class="stroke">MATHEMATICS</span> If we multiply your
              investments,{" "}
              <span class="stroke"> It is one and only JSR GROUP SUNCITY</span>{" "}
            </h4>
          </div>
        </div>
      </div>

      <div className="px-[1rem] mx-[11rem] py-[2.6rem] ">
        <div className="flex">
          <div className="px-[1rem]">
            
          </div>
          <div>
             
          </div>
        </div>
      </div>
      <Bottom/>
    </div>
  );
};

export default Aboutus;
