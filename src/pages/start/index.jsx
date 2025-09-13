import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

const Start = () => {
  const btnRef = useRef(null);

  useEffect(() => {
    const btn = btnRef.current;

    const handleEnter = () => {
      gsap.to(btn, {
        scale: 1.05,
        y: -4,
        boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
        duration: 0.3,
        ease: "power3.out",
      });
    };

    const handleLeave = () => {
      gsap.to(btn, {
        scale: 1,
        y: 0,
        boxShadow: "0 0 0 rgba(0,0,0,0)",
        duration: 0.3,
        ease: "power3.inOut",
      });
    };

    btn.addEventListener("mouseenter", handleEnter);
    btn.addEventListener("mouseleave", handleLeave);

    return () => {
      btn.removeEventListener("mouseenter", handleEnter);
      btn.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div className="h-[100vh] w-[100vw] bg-cover flex flex-col items-center bg-[url(https://res.cloudinary.com/djz9ifbzg/image/upload/v1756544859/bg-start_nrtrzz.jpg)]">
      <div className="w-full h-1/11 px-[1vw]">
        <img
          className="h-full"
          src="https://res.cloudinary.com/djz9ifbzg/image/upload/v1756546841/symbol_-_Copy_ct9ub6.svg"
          alt=""
        />
      </div>
      <div className="w-full font-edosz text-[12vh] py-[2vh] mt-[4vh] leading-22 text-center px-[20vw]">
        Every whisper begins a conversation
      </div>
      <div className="w-full text-center text-xl font-gilroy tracking-tight">
        Because the best talks often start with someone new
      </div>
      <div className="flex flex-wrap items-center mt-[19vh] mb-[.4vw]">
        <Link
          to={"/auth/signin"}
          ref={btnRef}
          className="w-full flex font-gilroy items-center justify-center px-[4vw] py-[2.2vh] text-2xl bg-black rounded-[1vw] text-white"
        >
          Start Whispering
        </Link>
      </div>
      <div className="w-full font-gilroy-semibold text-white text-sm text-center">
        Your voice stays yours — always private.
      </div>
    </div>
  );
};

export default Start;
