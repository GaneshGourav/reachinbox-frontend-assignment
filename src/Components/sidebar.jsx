import logo from "../assests/emailLogo.svg";
import home from "../assests/Home.svg";
import contact from "../assests/contact.svg";
import email from "../assests/email.svg";
import menu from "../assests/menu.svg";
import emailStore from "../assests/email store.svg";
import chart from "../assests/bar_chart.svg";
import send from "../assests/send.svg";
import { Link } from "react-router-dom";
import Home from "./Home";
const Sidebar = () => {
  return (
    <div className="flex">
      <main className="h-[100vh] w-14 p-3   bg-[#101113]">
        <div className=" pb-5  h-[50px] flex items-center justify-center">
          <div>
            <img src={logo} alt="logo" className=" object-cover" />
          </div>
        </div>

        <div className=" pt-10 h-[600px]">
          <div className="flex items-center justify-start flex-col gap-7  h-[500px]">
            <Link to="/logged-page">  <img src={home} alt="home logo" /></Link>
          
            <img src={contact} alt="contact-logo" />
            <img src={email} alt="email-logo" />
            <img src={send} alt="send-logo" />
            <Link to="/onebox"><img src={menu} alt="menu-logo" /></Link>
            
            <img src={emailStore} alt="email-store-logo" />
            <img src={chart} alt="chart-logo" />
          </div>
        </div>
<div className="mt-5  rounded-full  bg-[#054F31]">
    <div className=" rounded-full   text-white flex items-center justify-center">
        <p className="p-1">GS</p>
    </div>
</div>
      </main>
     
    </div>
  );
};

export default Sidebar;
