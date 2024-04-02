import { useSelector } from "react-redux";
import "../App.css";
import { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { IoMdFlash } from "react-icons/io";
import { SlActionUndo } from "react-icons/sl";
import AlertBox from "../Components/alertBox";

const ThreadEmail = () => {
  const [open, setOpen] = useState(false);
  const [reply, setreply] = useState(false);
  const [alret,setAlert] = useState(false);
  const[ThreadId,setThreadId] = useState(null)
  const OpenEditor = () => {
    setOpen(!open);
    setreply(!reply);
  };
  const closeEditor = () => {
    setOpen(false);
  };
  const handleReply = () => {
    setreply(true);
  };
  const handleSendReply = () => {
    alert("reply sent");
    setOpen(false);
  };
  const handleDelet = (el) => {
    setThreadId(el.threadId)
    console.log(el.threadId, "Delete");
    setAlert(!alret)
  };
  const Tdata = useSelector((store) => store.reducer.threadData);
  return (
    <>
      <section className="middle border border-[#23272C] w-[850px] relative ">
        <div className="absolute text-white top-[600px] left-[30px]  ">
          {reply && (
            <button
              className="flex items-center justify-start gap-3 text-white pt-3 pb-3 pr-5 pl-5 bg-gradient-to-r from-blue-500 rounded to-blue-800 "
              onClick={OpenEditor}
            >
              {" "}
              <span>
                <SlActionUndo />
              </span>
              Reply
            </button>
          )}

          {open && (
            <div
              className={`text-sm fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-30 z-50`}
            >
              <div
                className={`rounded-lg w-[830px] h-[70%] mt-48 ml-6 border 
             bg-[black]
           `}
              >
                <div className={`rounded-t-lg px-5 py-1 flex justify-between `}>
                  <p className={`text-lg font-semibold `}>Reply</p>
                  <button
                    className={` px-4 py-1 rounded`}
                    onClick={closeEditor}
                  >
                    X
                  </button>
                </div>
                <div className={`border px-0 w-full `}></div>
                <p className="m-1 px-5 py-1 text-gray-500 text-start">
                  To : <span className={``}>jeanne@icloud.com</span>
                </p>
                <div className="border px-0 w-full "></div>
                <p className="m-1 px-5 py-1 text-gray-500 text-start">
                  From : <span className={``}>peter@reachinbox.com</span>
                </p>
                <div className={`border px-0 w-full `}></div>
                <p className="m-1 px-5 py-1 text-gray-500 text-start">
                  Subject : <span className={``}>Warmup Welcome</span>
                </p>
                <div className={`border px-0 w-full `}></div>
                <p className="text-gray-500 px-6 pt-4 text-start">Hi jeanne,</p>
                <div
                  id="replyVariable"
                  contentEditable="true"
                  className="py-2 px-6 h-1/2 focus:outline-none focus:border-gray-500 text-start"
                ></div>
                <div className="bottom-0 left-0 flex  space-x-2 p-4">
                  <button
                    className="px-4 flex py-2 bg-gradient-to-r from-blue-500 rounded to-blue-800 text-white"
                    onClick={handleSendReply}
                  >
                    Send
                    <FaCaretDown className="ml-4 mt-1" />
                  </button>
                  <button className={`px-4 flex py-2 `}>
                    <IoMdFlash className="mt-1 p-0 text-xl" />
                    Variables
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <nav className=" flex justify-between pr-3 pl-3 border border-[#23272C] border-b-2 text-white pb-3 pt-2">
          <div className="text-white text-start">
            <p>orland</p>
            <p className="text-[#4f4f51]">orlando@gmail.com</p>
          </div>

          <div className="flex justify-start items-center gap-5">
            <div className=" pr-3 pl-3 bg-[#23272C] rounded-md border-[#4f4f51] border-2">
              <select
                name=""
                id=""
                className=" bg-[#23272C] border border-none"
              >
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

        <div className=" right-side overflow-y-auto scrollbar-w-0 scrollbar-thumb-[black]">
          {Tdata.map((el) => (
            <div className="text-[#AEAEAE]">
              <div>
                <div className="w-full border border-[#23272C] mt-[30px] mb-[30px] relative">
                  <div className=" left-[40%]  w-[200px] bg-[#23272C] absolute -top-[12px] text-white ">
                    <p>{el.createdAt}</p>
                  </div>
                </div>
              </div>
              <div className="border border-[#23272C] mt-5px pt-5 pb-5  w-[830px] m-auto ]">
                <div className="text-start pl-3">
                  <div className="flex items-center justify-between pr-3">
                    <p className="text-white font-[700]">{el.subject}</p>
                    <div
                      className="text-white  pr-2 pl-2 pt-1 pb-1 rounded-md bg-[#23272C] cursor-pointer"
                      onClick={() => handleDelet(el)}
                    >
                      Delete
                    </div>
                  </div>

                  <div onClick={handleReply}>
                    <p> from : {el.fromEmail}</p>
                    <p> to : {el.toEmail}</p>
                    <p>{el.fromName}</p>
                    <p>{el.body}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
{alret && <AlertBox setAlert={setAlert} alret={alret} ThreadId={ThreadId} />}
        </div>
      </section>
    </>
  );
};

export default ThreadEmail;
