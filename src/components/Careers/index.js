import Bottom from "../Bottom";
import Navbar from "../Navbar";

const Careers = () => {
  return (
    <div>
      <div
        className="bg-cover h-[26.125rem] w-[94.938rem] bg-no-repeat bg-left-top bg-container"
        style={{ backgroundImage: `URL(img/career4.jpg)` }}>
          <Navbar/>
        <div className=" w-[71.25rem] h-[23.063rem] px-[1rem] mx-[10.875rem]">
          {/* <div className="w-[40.75rem] h-[5.6rem] py-[10rem]">jbkjbkj</div> */}
          {/* <div className=" w-[42.625rem] h-[23.063rem] ">

        </div> */}
        </div>
      </div>

      <div className="py-[5rem] px-[1rem] mx-[10.913rem]">
        <h1 className="px-[1rem] pb-[1rem] font-semibold	text-3xl	">Current Openings</h1>
        <h1 className="px-[1rem] pt-[1rem] font-medium	text-2xl">Marketing</h1>
        <div>
          <div className="flex 	border-2	border-solid	 mx-[1.563rem] my-[.945rem] py-[0.938rem] px-[.4423rem]">
            <img
              className="h-[3.335rem] w-[5.585rem] px-[0.92rem]"
              src="img/sales-manager.png"
              alt="sales-manager"
            />
            <div className="px-[0.93rem] w-[42.75rem] h-[3.688rem]">
              <h1 className="text-lg pb-[.5rem] font-semibold		">Sales manager</h1>
              <p>
                <span>bjbkj</span> <span>Kothapet, Hyderabad.</span>
              </p>
            </div>
            <div
              
              className="text-right content-center	 h-[2.063rem]	w-[14.875rem] px-[0.93rem]"
            >
              <a style={{ backgroundColor: "blue" }} className="px-[.632rem] py-[.32rem]" href="www.google.com">Apply Now</a>
            </div>
          </div>
          <div className="flex 	border-2	border-solid	 mx-[1.563rem] my-[.945rem] py-[0.938rem] px-[.4423rem]">
            <img
              className="h-[3.335rem] w-[5.585rem] px-[0.92rem]"
              src="img/Marketing-Excutive.png"
              alt="Marketing-Excutive"
            />
            <div className=" px-[0.93rem] w-[42.75rem] h-[3.688rem]">
              <h1 className="text-lg pb-[.5rem] font-semibold	">Marketing-Excutive</h1>
              <p>
                <span>bjbkj</span> <span>Kothapet, Hyderabad.</span>
              </p>
            </div>
            <div
              
              className="text-right content-center	 h-[2.063rem]	w-[14.875rem] px-[0.93rem]"
            >
              <a style={{ backgroundColor: "blue" }} className="px-[.632rem] py-[.32rem]" href="www.google.com">Apply Now</a>
            </div>
          </div>
          <div className="flex 	border-2	border-solid	 mx-[1.563rem] my-[.945rem] py-[0.938rem] px-[.4423rem]">
            <div               className="h-[3.335rem] w-[5.585rem] px-[0.92rem]"
>
            <img
              src="img/telecal2.png"
              alt="telecal2"
            />
            </div>
            
            <div className="px-[0.93rem] w-[42.75rem] h-[3.688rem]">
              <h1  className="text-lg pb-[.5rem] font-semibold	">telecaller</h1>
              <p>
                <span>bjbkj</span> <span>Kothapet, Hyderabad.</span>
              </p>
            </div>
            <div
              
              className="text-right content-center	 h-[2.063rem]	w-[14.875rem] px-[0.93rem]"
            >
              <a style={{ backgroundColor: "blue" }} className="px-[.632rem] py-[.32rem]" href="www.google.com">Apply Now</a>
            </div>
          </div>
        </div>
      </div>
      <Bottom />
    </div>
  );
};

export default Careers;
