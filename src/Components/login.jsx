import React from "react";
import "../App.css";
import logo from "../assests/Logo.svg";
import googleLogo from "../assests/google-logo.svg";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const { loginWithRedirect } = useAuth0();
  const handleLogin = () => {};
  return (
    <>
      <main className="h-100vh bg-black text-white">
        <nav>
          <div className="header h-[40px] flex justify-center items-center pt-3 pb-3 border border-b-[#888a8e]">
            <div>
              <img src={logo} alt="Logo" className="w-full object-cover" />
            </div>
          </div>
        </nav>

        <div className="main relative bg-black">
          <div className="border main-content border-[#888a8e] w-[450px] rounded-2xl bg-[#111112] pt-5 pb-10 ">
            <p className="text-3xl pt-3">Create a new account</p>

            <button
              className="border border-[#888a8e] pt-3 pb-3 pr-24 pl-24 mt-10 rounded-md "
              onClick={() => loginWithRedirect()}
            >
              <div className="flex items-center justify-center gap-3">
                <img src={googleLogo} alt="google-logo" />
                Sign Up with Google
              </div>
            </button>
        
            <br />
            <button
              className="pt-3 pb-3 pr-8 pl-8 mt-10 rounded-lg btn"
              onClick={() => loginWithRedirect()}
            >
              Create an Account
            </button>
            <p className="mt-5 text-[#888a8e] ">
              Already an account?
              <span className="text-white cursor-pointer" onClick={handleLogin}>
                {" "}
                Sign In
              </span>
            </p>
          </div>
        </div>

        <footer>
          <div className="h-[40px] flex items-center justify-center text-[#888a8e] border border-t-[#888a8e]">
            <p>© 2023 Reachinbox. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Login;
