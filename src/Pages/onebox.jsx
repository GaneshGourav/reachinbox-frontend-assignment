import Home from "../Components/Home";
import "../App.css";
import { useContext } from "react";
import { themeContext } from "../context";

const Onebox = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const data = [
    {
      id: 1,
      email: "ganesh@gmail.com",
      message: "i have done",
      status: "completed",
      campigen: "indai",
      date: "Mar 7",
    },
    {
      id: 2,
      email: "simran@gmail.com",
      message: "i have not done",
      status: "pending",
      campigen: "indai",
      date: "Mar 7",
    },
    {
      id: 3,
      email: "simpi@gmail.com",
      message: "i will be do",
      status: "process",
      campigen: "indai",
      date: "Mar 7",
    },
    {
      id: 4,
      email: "ganesh@gmail.com",
      message: "i have done",
      status: "completed",
      campigen: "indai",
      date: "Mar 7",
    },
    {
      id: 5,
      email: "ganesh@gmail.com",
      message: "i have done",
      status: "completed",
      campigen: "indai",
      date: "Mar 7",
    },
    {
      id: 6,
      email: "ganesh@gmail.com",
      message: "i have done",
      status: "completed",
      campigen: "indai",
      date: "Mar 7",
    },
    {
      id: 7,
      email: "ganesh@gmail.com",
      message: "i have done",
      status: "completed",
      campigen: "indai",
      date: "Mar 7",
    },
  ];
  return (
    <>
      <div className="flex flex-col">
        <div>
          <Home />
        </div>

        <div  style={{ background: darkMode ? "white" : "black" }} className="bg-black index-page-height flex justify-start   ">
          <section className="right-side w-[300px] border  border-[#23272C] border-r-1 pr-3 pl-3 h-[600px] overflow-y-auto scrollbar-w-0 scrollbar-thumb-[black] ">
            <div className="flex items-center justify-between pl-3 pr-3">
              <div>
                <p className="text-[#4285F4] text-start text-2xl font-[600]">
                  All Inbox(s)
                </p>
                <p className="text-white">
                  25/25 <span className="text-[#7F7F7F]">inboxes selected</span>
                </p>
              </div>
              <div>
                <p className="text-white">refresh</p>
              </div>
            </div>
            <div className=" mt-5 ">
              <input
                type="text"
                placeholder="search"
                className="bg-[#23272C]  rounded pl-5 w-full"
              />
              <div className="flex items-center justify-around text-white mt-3 mb-3">
                <div className="flex justify-center gap-3">
                  <p className="rounded-full bg-[#23272C] text-[#5C7CFA] w-[30px]">
                    26
                  </p>
                  <p>New Replies</p>
                </div>
                <div>
                  <p>Newest</p>
                </div>
              </div>
            </div>

            <div className="text-white">
              {data.map((el) => (
                <div className="border border-[#23272C] border-b-2 mb-5">
                  <div className="flex items-center justify-start gap-10 pl-3">
                    <div className="w-[150px] text-start">
                      <p>{el.email}</p>
                    </div>
                    <div>
                      <p className="text-[#4f4f51]">{el.date}</p>
                    </div>
                  </div>
                  <div className="text-start gap-5 pl-3">
                    <p>{el.message}</p>
                  </div>
                  <div className="flex items-center justify-around gap-5 mb-3 mt-3">
                    <div>
                      <p className=" rounded-full bg-[#23272C] w-[100px]">
                        {el.status}
                      </p>
                    </div>
                    <div>
                      <p>{el.campigen}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section className="middle border border-[#23272C] w-[850px]">
<nav className=" flex justify-between pr-3 pl-3 border border-[#23272C] border-b-2 text-white pb-3 pt-2">
    <div className="text-white text-start" >
        <p >orlando</p>
        <p className="text-[#4f4f51]">orlando@gmail.com</p>
    </div>

    <div className="flex justify-start items-center gap-5">
        <div className=" pr-3 pl-3 bg-[#23272C] rounded-md border-[#4f4f51] border-2" >
        <select name="" id="" className=" bg-[#23272C] border border-none">
            <option value="">Meeting completed</option>
        </select>
        </div>

        <div className=" pr-3 pl-3 bg-[#23272C] rounded-md border-[#4f4f51] border-2">
            <select name="" id="" className="bg-[#23272C]">
                <option value="">Move</option>
            </select>
        </div>

        <div className=" pr-3 pl-3 bg-[#23272C] rounded-md border-[#4f4f51] border-2">
            <select name="" id="" className="bg-[#23272C]">
                <option value="">...</option>
            </select>
        </div>
       
    </div>
</nav>
          </section>
          <section className="left w-[317px] mt-10 pl-3 ">
          <div className="bg-[#23272C] pt-2 pb-2 w-[310px] text-white text-start rounded-md "><p className=" pl-5">Lead Details</p></div>
          <div className="text-white pr-3 mt-3 ">
            <div className="flex items-center justify-between text-[16px] mt-5">
              <p >Name</p>
              <p className="text-[#B9B9B9]">Orland</p>
            </div>
            <div className="flex items-center justify-between mt-5">
              <p >Contact No</p>
              <p className="text-[#B9B9B9]">+91 95720 16410</p>
            </div>
            <div className="flex items-center justify-between mt-5">
              <p >Email ID</p>
              <p className="text-[#B9B9B9]">ganeshgourav@gmail.com</p>
            </div>
            <div className="flex items-center justify-between mt-5">
              <p >Linkdein</p>
              <p className="text-[#B9B9B9]">linkdein/ganesh/kumar</p>
            </div>
            <div className="flex items-center justify-between mt-5">
              <p >Company Name</p>
              <p className="text-[#B9B9B9]">Richinbox</p>
            </div>


          </div>
          <div className="bg-[#23272C] pt-2 pb-2 pl-5 w-[310px] text-white text-start rounded-md mt-10 ">
            <p>Activites</p>
          </div>
          <div className="">
            <p className="text-white text-left pl-5 mt-5">Campaign Name</p>
            <div className="flex items-center justify-start gap-3 text-[14px] pl-4 text-white mt-10">
              <p>3 Steps</p> <hr className="vertical-line" />
              <p>5 Days in Sequence</p>
            </div>
          </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Onebox;
