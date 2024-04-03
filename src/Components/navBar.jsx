import { useContext } from "react";
import Toggle from "./toggle";
import { themeContext } from "../context";
import { SlArrowDown } from "react-icons/sl";

const Navbar = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <main>
        <header>
          <nav
            className=" bg-[#202022]  w-[1480px] flex items-center justify-between pr-5 pl-5 h-[70px] text-white font-[600] border border-red-600 "
            style={{
              background: darkMode ? "white" : "#202022",
              border: darkMode ? "1px solid white" : "1px solid #202022",
            }}
          >
            <div>
              <p style={{ color: darkMode ? "#0a0a18" : "white" }}>Onebox</p>
            </div>
            <div className="flex justify-between  gap-10">
              <Toggle />
              <p
                style={{ color: darkMode ? "#0a0a18" : "white" }}
                className="flex items-center"
              >
                Tim workSpace{" "}
                <span>
                  <SlArrowDown className="font-[700]" />
                </span>
              </p>
            </div>
          </nav>
        </header>
      </main>
    </>
  );
};
export default Navbar;
