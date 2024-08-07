import React from "react";
import BackgroundImageDiv from "./BGImageDiv";
import { Context } from "../context/ContextProvider";


const Hero1_Home = ({set}) => {
   const { user } =
     React.useContext(Context);
  return (
    <div className="relative h-[475px] overflow-hidden w-full">
      <BackgroundImageDiv imageUrl={"https://i.imgur.com/oRNTZuF.jpeg"}>
        <div className=" absolute right-[17px] top-3">
          <div className=" relative  w-[164px] h-[172px]">
            <BackgroundImageDiv
              imageUrl={"https://i.imgur.com/GPBMHBr.png"}
              classs={` w-[164px] h-[172px]  `}
            >
              <div className="relative flex flex-col justify-center items-center pt-[22px] ">
                <div className="flex gap-1 items-center justify-center">
                  <img
                    className=" h-6 w-6 object-cover"
                    src="https://i.imgur.com/5qcWB9n.png"
                    alt=""
                  />
                  <div className="w-[1.875rem] relative text-[1.625rem] capitalize font-medium font-inter text-white text-left inline-block">
                    {user && user["Total Bounty"]}
                  </div>
                </div>
                <div className="w-[6.938rem] pb-[13px] relative text-[1rem] capitalize font-semibold font-inter text-white text-left inline-block">
                  Total Bounties
                </div>
                <div className="flex gap-1 pb-[5px] items-center justify-center">
                  <img
                    className=" h-6 w-6 object-cover"
                    src="https://i.imgur.com/zP0qKq7.png"
                    alt=""
                  />
                  <div className="w-[1.875rem] relative text-[1.625rem] capitalize font-medium font-inter text-white text-left inline-block">
                    {user && user["Total Value Earned"]}
                  </div>
                </div>
                <div className="w-[9.063rem] relative text-[1rem] capitalize font-semibold font-inter text-[#FFFFFFBD] text-left inline-block">
                  Total Value Earned
                </div>
              </div>
            </BackgroundImageDiv>
          </div>
        </div>
        <button
          onClick={() => {
            set(true)
          }}
          className=" absolute right-4 bottom-10  cursor-pointer hover:scale-105 hover:opacity-80 transition-all duration-200 px-16 capitalize py-5 mt-9 text-xl font-medium text-white whitespace-nowrap bg-orange-500 rounded-md border border-solid border-orange-500 border-opacity-50 max-md:px-5 max-md:max-w-full"
        >
          Create Quest
        </button>
      </BackgroundImageDiv>
    </div>
  );
};

export default Hero1_Home;
