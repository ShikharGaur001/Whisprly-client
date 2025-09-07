import React from "react";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div className="h-[100vh] w-[100vw] flex flex-col items-center justify-center">
      <div className="w-full h-1/11 px-[1vw]">
        <img
          className="h-full"
          src="https://res.cloudinary.com/djz9ifbzg/image/upload/v1756545788/download_2_okccpe.svg"
          alt=""
        />
      </div>
      <div className="flex h-10/11 w-full justify-center items-center p-[3vw] pt-0">
        <div className="flex h-full w-full justify-center items-center">
          <div className="h-full w-4/7 flex flex-col items-center justify-between py-[4vw] bg-bg-heavy rounded-[1.6vw]">
            <img
              className="h-[34vw]"
              src="https://res.cloudinary.com/djz9ifbzg/image/upload/v1757245373/Community_1_rdv3zk.svg"
              alt=""
            />
            <h3 className="font-gilroy text-[1.4vw]">
              Send messages, share moments, and stay close with Whisprly
            </h3>
          </div>
          <div className="h-full w-3/7 flex flex-col items-center justify-center p-[3vw]">
            <div className="h-full w-full flex flex-col items-center">
              <h1 className="text-[3.2vw] font-gilroy-semibold font-bold tracking-tighter">
                Welcome back Whisprer
              </h1>
              <h2 className="text-zinc-500 mt-[1vw] text-center w-3/4 font-gilroy text-[1vw]">
                Pick up every conversation where you left it — private, seamless, yours
              </h2>
              <input
                type="email"
                className="bg-bg-light w-11/12 px-[1.8vw] mt-[3vw] py-[1.2vw] rounded-full text-[1.2vw] font-gilroy border-secondary-teal border-[.2vw]"
                placeholder="Enter E-mail"
              />
              <input
                type="password"
                className="bg-bg-light w-11/12 px-[1.8vw] mt-[1vw] py-[1.2vw] rounded-full text-[1.2vw] font-gilroy border-secondary-teal border-[.2vw]"
                placeholder="Enter Password"
              />
              <input
                type="submit"
                className="bg-primary-teal text-white w-11/12 px-[1.8vw] mt-[3vw] py-[1.2vw] rounded-full text-[1.2vw] font-bold font-gilroy"
                value={`Sign Up`}
              />
            </div>
            <div className="w-full flex justify-center items-center font-gilroy">
              <h4 className="text-zinc-500">
                Not a member?{" "}
                <Link
                  className="text-primary-teal font-bold"
                  to={`/auth/signup`}
                >
                  Sign up
                </Link>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
