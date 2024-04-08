import React from "react";
// import icons
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Card = (props) => {
  let review = props.review;
  return (
    <div className="flex flex-col md:relative">
      {/* // IMAGE  */}
      <div className="absolute top-[-7rem] z-10 mx-auto ">
        <img
          src={review.image}
          alt=""
          className="aspect-square rounded-full w-[140px] h-[140px] z-25"
        />
        {/* Circle above IMG */}
        <div className="w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] z-[-10] left-[10px]"></div>
      </div>

      {/* NAME  */}
      <div className="text-center mt-7">
        <p className="font-bold text-2xl capitalize leading-3">{review.name}</p>
      </div>

      {/* JOB || POST */}
      <div className="text-center mt-4">
        <p className="text-violet-300 text-sm uppercase">{review.job}</p>
      </div>

      {/* QUOTE  */}
      <div className="text-violet-400 mx-auto mt-5">
        <FaQuoteLeft />
      </div>

      {/* DESCRIPTION  */}
      <div className="text-center mt-4 text-slate-500 ">{review.text}</div>

      {/* QUOTE  */}
      <div className="text-violet-400 mx-auto mt-5">
        <FaQuoteRight />
      </div>
      
    </div>
  );
};

export default Card;
