import Home from "../Components/Home";
import "../App.css";
import logo from "../assests/No Message illustration.svg";

const Index = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="relative">
          <Home />
        </div>
        <div className=" index-page-height flex items-center justify-center bg-black ">
          <div className=" flex items-center justify-center flex-col w-[600px]">
            <div>
              <img src={logo} className=" w-[200px] object-cover" alt="logo" />
            </div>
            <div className="text-white w-full flex items-center justify-center flex-col  mt-[40px]">
              <div>
                {" "}
                <p className="font-[600]">
                  It’s the beginning of a legendary sales pipeline{" "}
                </p>
              </div>

              <div className="w-[250px] mt-[10px] text-[#888a8e]">
                <p>When you have inbound E-mails you’ll see them here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Index;
