import React from "react";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div className="h-[100vh] w-[100vw] bg-cover flex flex-col items-center bg-[url(https://res.cloudinary.com/djz9ifbzg/image/upload/v1756544859/bg-start_nrtrzz.jpg)]">
      <div className="w-full h-1/11 px-[1vw]">
        <img
          className="h-full"
          src="https://res.cloudinary.com/djz9ifbzg/image/upload/v1756546841/symbol_-_Copy_ct9ub6.svg"
          alt=""
        />
      </div>
      <div className="w-full flex flex-col items-center py-[3vh]">
        <img
          className="h-[10vh]"
          src="https://res.cloudinary.com/djz9ifbzg/image/upload/v1756545524/Screenshot_2025-08-30_144229-removebg-preview_p4wnru.png"
          alt=""
        />
        <img
          className="h-[10vh]"
          src="https://res.cloudinary.com/djz9ifbzg/image/upload/v1756545525/Screenshot_2025-08-30_144236-removebg-preview_qw3pqo.png"
          alt=""
        />
        <img
          className="h-[10vh]"
          src="https://res.cloudinary.com/djz9ifbzg/image/upload/v1756545526/Screenshot_2025-08-30_144203-removebg-preview_jz0txz.png"
          alt=""
        />
      </div>
      <div className="w-full text-2xl text-center py-[13vh]">
        Start a conversation now!
      </div>
      <div className="flex flex-wrap items-center py-[5vh]">
        <Link
          to={"/auth"}
          className="w-full flex items-center justify-center px-[6vw] py-[2.2vh] text-2xl bg-black rounded-md text-white"
        >
          Continue
        </Link>
      </div>
    </div>
  );
};

export default Start;
