import { useContext } from "react";
import { themeContext } from "../context";
import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import { LuMailOpen } from "react-icons/lu";
import "../App.css";

const LeadDetails = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <>
      <section className=" right-side left w-[317px] mt-10 pl-3 overflow-y-auto scrollbar-w-0 scrollbar-thumb-[black] ">
        <div
          className=" pt-2 pb-2 w-[310px] text-white text-start rounded-md font-[600] "
          style={{ background: darkMode ? "#ECEFF3" : "#23272C" }}
        >
          <p
            className=" pl-5"
            style={{ color: darkMode ? "#0a0a18" : "white" }}
          >
            Lead Details
          </p>
        </div>
        <div className="text-white pr-3 mt-3 ">
          <div className="flex items-center justify-between text-[16px] mt-5">
            <p style={{ color: darkMode ? "#4f4f51" : "white" }}>Name</p>
            <p style={{ color: darkMode ? "black" : "#B9B9B9" }}>Orlando</p>
          </div>
          <div className="flex items-center justify-between mt-5">
            <p style={{ color: darkMode ? "#4f4f51" : "white" }}>Contact No</p>
            <p
              className="text-[#B9B9B9]"
              style={{ color: darkMode ? "black" : "#B9B9B9" }}
            >
              +54-9062827869
            </p>
          </div>
          <div className="flex items-center justify-between mt-5">
            <p style={{ color: darkMode ? "#4f4f51" : "white" }}>Email ID</p>
            <p
              className="text-[#B9B9B9]"
              style={{ color: darkMode ? "black" : "#B9B9B9" }}
            >
              orlando@gmail.com
            </p>
          </div>
          <div className="flex items-center justify-between mt-5">
            <p style={{ color: darkMode ? "#4f4f51" : "white" }}>Linkedin</p>
            <p
              className="text-[#B9B9B9]"
              style={{ color: darkMode ? "black" : "#B9B9B9" }}
            >
              linkedin.com/in/timvadde
            </p>
          </div>
          <div className="flex items-center justify-between mt-5">
            <p style={{ color: darkMode ? "#4f4f51" : "white" }}>
              Company Name
            </p>
            <p
              className="text-[#B9B9B9]"
              style={{ color: darkMode ? "black" : "#B9B9B9" }}
            >
              Reachinbox
            </p>
          </div>
        </div>
        <div
          className=" pt-2 pb-2 pl-5 w-[310px] text-white text-start rounded-md mt-10 font-[700] "
          style={{ background: darkMode ? "#ECEFF3" : "#23272C" }}
        >
          <p style={{ color: darkMode ? "#454F5B" : "white" }}>Activites</p>
        </div>
        <div className="">
          <p
            className="text-white text-left pl-5 mt-5 font-[600] text-2xl "
            style={{ color: darkMode ? "#172B4D" : "white" }}
          >
            Campaign Name
          </p>
          <div className="flex items-center justify-start gap-3 text-[14px] pl-4 text-white mt-10 mb-5">
            <p style={{ color: darkMode ? "#172B4D" : "white" }}>
              {" "}
              <span className="font-[600]">3</span> Steps{" "}
            </p>{" "}
            <hr className="vertical-line" />
            <p style={{ color: darkMode ? "#172B4D" : "white" }}>
              {" "}
              <span className="font-[600]">5</span> Days in Sequence
            </p>
          </div>

          <div
            className="flex flex-col  "
            style={{ color: darkMode ? "#4f4f51" : "white" }}
          >
            <div className="flex">
              <div className="flex flex-col items-center justify-center">
                <div
                  className="w-12 h-12   rounded-full flex items-center justify-center"
                  style={{
                    border: darkMode ? "1px solid #4f4f51" : " 1px solid white",
                  }}
                >
                  <MdOutlineEmail size={20} />
                </div>
                <div className="h-14 w-1 flex "></div>
              </div>

              <p className="ml-3  font-xl">
                Step 1: Email <br />
                <span className="flex ">
                  {" "}
                  <IoIosSend className="m-2 font-light" /> Send 3rd, Feb
                </span>
              </p>
            </div>
          </div>

          <div
            className="flex flex-col "
            style={{ color: darkMode ? "#4f4f51" : "white" }}
          >
            <div className="flex">
              <div className="flex flex-col items-center justify-center">
                <div
                  className="w-12 h-12  rounded-full flex items-center justify-center"
                  style={{
                    border: darkMode ? "1px solid #4f4f51" : " 1px solid white",
                  }}
                >
                  <MdOutlineEmail size={20} />
                </div>
                <div className="h-14 w-1 flex "></div>
              </div>
              <p className="ml-3  font-xl">
                Step 2: Email <br />
                <span className="flex">
                  {" "}
                  <LuMailOpen className="m-2 text-yellow-300" /> Open 5th, Feb
                </span>
              </p>
            </div>
          </div>

          <div
            className="flex flex-col "
            style={{ color: darkMode ? "#4f4f51" : "white" }}
          >
            <div className="flex">
              <div className="flex flex-col items-center justify-center">
                <div
                  className="w-12 h-12   rounded-full flex items-center justify-center"
                  style={{
                    border: darkMode ? "1px solid #4f4f51" : " 1px solid white",
                  }}
                >
                  <MdOutlineEmail size={20} />
                </div>
                <div className={`h-14 w-1 flex `}></div>
              </div>
              <p className="ml-3  font-xl">
                Step 3: Email <br />
                <span className="flex">
                  {" "}
                  <LuMailOpen className="m-2 text-yellow-300" /> Open 5th, Feb
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LeadDetails;
