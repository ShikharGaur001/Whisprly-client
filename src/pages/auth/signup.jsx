import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { SIGNUP_ROUTE } from "@/utils/constants";
import { apiClient } from "@/lib/api-client";
import { useAppStore } from "@/store";

const Signup = () => {
  const navigate = useNavigate();
  const { setUserInfo } = useAppStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const validateSignup = () => {
    if (!email.length) {
      toast.error("Email is required.");
      return false;
    }
    if (!password.length) {
      toast.error("Password is required.");
      return false;
    }
    if (password !== confirmPassword) {
      toast.error("Password and confirm password should be same.");
      return false;
    }
    return true;
  };

  const handleSignup = async () => {
    if (validateSignup()) {
      const res = await apiClient.post(
        SIGNUP_ROUTE,
        { email, password },
        { withCredentials: true }
      );
      if (res.status === 201) {
        setUserInfo(res.data.user)
        navigate("/profile");
      }
      console.log({ res });
    }
  };

  return (
    <div className="h-[100vh] w-[100vw] flex flex-col items-center justify-center">
      <div className="w-full h-1/11 px-[1vw]">
        <img
          className="h-full"
          src="https://res.cloudinary.com/djz9ifbzg/image/upload/v1756545788/download_2_okccpe.svg"
          alt=""
        />
      </div>
      <div className="flex flex-col h-10/11 w-full justify-center items-center p-[3vw] pt-0">
        <div className="flex h-full w-full justify-center items-center">
          <div className="h-full w-3/7 flex flex-col items-center justify-center p-[3vw]">
            <div className="h-full w-full flex flex-col items-center">
              <h1 className="text-[3.4vw] font-gilroy-semibold font-bold tracking-tighter">
                Start Your First Whisper
              </h1>
              <h2 className="text-zinc-500 mt-[1vw] text-center w-3/4 font-gilroy text-[1vw]">
                A calmer way to connect — simple, secure, and fully yours on{" "}
                <span className="font-bold">Whisprly</span> for free.
              </h2>
              <input
                type="email"
                className="bg-bg-light w-11/12 px-[1.8vw] mt-[3vw] py-[1.2vw] rounded-full text-[1.2vw] font-gilroy border-secondary-teal border-[.2vw]"
                placeholder="Enter E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                className="bg-bg-light w-11/12 px-[1.8vw] mt-[1vw] py-[1.2vw] rounded-full text-[1.2vw] font-gilroy border-secondary-teal border-[.2vw]"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                className="bg-bg-light w-11/12 px-[1.8vw] mt-[1vw] py-[1.2vw] rounded-full text-[1.2vw] font-gilroy border-secondary-teal border-[.2vw]"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <input
                type="submit"
                className="bg-primary-teal text-white w-11/12 px-[1.8vw] mt-[3vw] py-[1.2vw] rounded-full text-[1.2vw] font-bold font-gilroy"
                value={`Sign Up`}
                onClick={handleSignup}
              />
            </div>
            <div className="w-full flex justify-center items-center font-gilroy">
              <h4 className="text-zinc-500">
                Already have an account?{" "}
                <Link
                  className="text-primary-teal font-bold"
                  to={`/auth/signin`}
                >
                  Sign in
                </Link>
              </h4>
            </div>
          </div>
          <div className="h-full w-4/7 flex flex-col items-center justify-between py-[6vw] bg-bg-heavy rounded-[1.6vw]">
            <img
              className="h-[30vw]"
              src="https://res.cloudinary.com/djz9ifbzg/image/upload/v1757245373/Customer-support_1_h5uvpm.svg"
              alt=""
            />
            <h3 className="font-gilroy text-[1.4vw]">
              Start chatting with friends around the world today!
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
