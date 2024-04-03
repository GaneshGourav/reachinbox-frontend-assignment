import logo from "../assests/emailLogo.svg";
import home from "../assests/Home.svg";
import contact from "../assests/contact.svg";
import email from "../assests/email.svg";
import menu from "../assests/menu.svg";
import emailStore from "../assests/email store.svg";
import chart from "../assests/bar_chart.svg";
import send from "../assests/send.svg";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useContext, useState } from "react";
import { themeContext } from "../context";
import { FaInbox } from "react-icons/fa";

const Sidebar = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const { user } = useAuth0();
  const { logout } = useAuth0();
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <div className="flex">
      <main
        className="h-[100vh] w-14 p-3   bg-[#101113]"
        style={{ background: darkMode ? "white" : "#101113" }}
      >
        <div className=" pb-5  h-[50px] flex items-center justify-center">
          <div>
            <img src={logo} alt="logo" className=" object-cover" />
          </div>
        </div>

        <div className=" pt-10 h-[600px]">
          <div className="flex items-center justify-start flex-col gap-7  h-[500px]">
            <Link to="/">
              {" "}
              <img src={home} alt="home logo" />
            </Link>

            <img src={contact} alt="contact-logo" />
            <img src={email} alt="email-logo" />
            <img src={send} alt="send-logo" />
            <img src={menu} alt="menu-logo" />
            <Link to="/onebox">
              <span className="bg-white">
                <FaInbox className="text-[#a2a2ac] text-[20px]" />
              </span>
            </Link>
            <img src={chart} alt="chart-logo" />
          </div>
        </div>
        <div className="mt-5  rounded-full  bg-[#054F31]">
          <div
            className=" rounded-full   text-white flex items-center justify-center relative cursor-pointer"
            onClick={handleShow}
          >
            <p className="p-1">{user.name.split(" ").map((word) => word[0])}</p>
            {show && (
              <div className="absolute border-[#4f4f51] border h-[100px] w-[100px] -top-[100px] left-[48px] rounded-lg ">
                <button
                  className="border-[#4f4f51] border-2 pr-3 pl-3 pt-1 pb-1 rounded-lg bg-[#23272C] mt-10 "
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Sidebar;
