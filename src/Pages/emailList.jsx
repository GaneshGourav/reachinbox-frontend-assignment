import { useContext, useEffect, useState } from "react";
import { themeContext } from "../context";
import { Getallmails, fetchThread } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import "../App.css";

const EmailList = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [selectedItem, setSelectedItem] = useState(null);
  const dispatch = useDispatch();
  const maildata = useSelector((store) => store.reducer.data);
  const isLoading = useSelector((store) => store.reducer.loading);
  const [threadId, setThreadId] = useState(null);

  let token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoibXJnYW5lc2hvZmZpY2lhbDhAZ21haWwuY29tIiwiaWQiOjU1LCJmaXJzdE5hbWUiOiJHYW5lc2giLCJsYXN0TmFtZSI6Ikt1bWFyIn0sImlhdCI6MTcxMTk1OTAwNiwiZXhwIjoxNzQzNDk1MDA2fQ.RMcMqcxzufrlKLpJgaLZNxSD431h8zdfV32olgDjL4U";
  useEffect(() => {
    dispatch(Getallmails(token));
  }, [token]);

  useEffect(() => {
    if (!!threadId) {
      dispatch(fetchThread(threadId, token));
    }
  }, [threadId]);

  const handleClick = (el) => {
    setThreadId(el);
  };
  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  return (
    <>
      {isLoading ? (
        <span className="text-white">Loading...</span>
      ) : (
        <section className="right-side w-[300px] border  border-[#23272C] border-r-1 pr-3 pl-3 h-[657px] overflow-y-auto scrollbar-w-0 scrollbar-thumb-[black] ">
          <div className="flex items-center justify-between pl-3 pr-3">
            <div>
              <p className="text-[#4285F4] text-start text-2xl font-[600]">
                All Inbox(s)
              </p>
              <p
                className="text-white"
                style={{ color: darkMode ? "black" : "white" }}
              >
                2/2 <span className="text-[#7F7F7F]">inboxes selected</span>
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
                  3
                </p>
                <p
                  style={{ color: darkMode ? "black" : "white" }}
                  className="font-[600]"
                >
                  New Replies
                </p>
              </div>
              <div>
                <p
                  style={{ color: darkMode ? "black" : "white" }}
                  className="font-[600]"
                >
                  Newest
                </p>
              </div>
            </div>
          </div>

          <div className="text-white">
            {maildata.map((el, index) => (
              <div
                key={index}
                className={`border border-[#23272C] border-b-2 mb-5   ${
                  selectedItem === index ? "selected" : ""
                }`}
                onClick={() => handleItemClick(index)}
              >
                <div key={index} onClick={() => handleClick(el.threadId)}>
                  <div className="flex items-center justify-start gap-10 pl-3 ">
                    <div className="w-[150px] flex item-center justify-start gap-4 text-start">
                      <p style={{ color: darkMode ? "black" : "white" }}>
                        {el.fromEmail}
                      </p>
                      <p className="text-[#4f4f51]">Mar7</p>
                    </div>
                  </div>
                  <div className="text-start gap-5 pl-3">
                    <p style={{ color: darkMode ? "black" : "#B9B9B9" }}>
                      {el.fromName}
                    </p>
                  </div>
                  <div className="flex items-center justify-around gap-5 mb-3 mt-3">
                    <div>
                      <p
                        className=" rounded-full bg-[#23272C] w-[100px] font-[600]"
                        style={{
                          color: el.isRead ? "green" : "inherit",
                          background: darkMode ? "#bec7d1" : "#23272C",
                        }}
                      >
                        {el.isRead ? "Intrested" : "Pending"}
                      </p>
                    </div>
                    <div>
                      <p
                        style={{
                          color: darkMode ? "black" : "#B9B9B9",
                          background: darkMode ? "#bec7d1" : "#23272C",
                        }}
                        className="pr-2 pl-2 rounded-full"
                      >
                        campigen Name
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
};
export default EmailList;
