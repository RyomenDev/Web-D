import React from "react";
import Testimonial from "./Components/Testimonial.jsx";
import reviews from "./data";

const App = () => {
  return (
    // app width height 
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Our Testimonial</h1>
        
        {/* line under Testimonial */}
        <div className="bg-violet-400 h-[4px] w-1/5 mt-1 mx-auto"></div>
        
        {/* Passing review data to testimonial */}
        <Testimonial reviews = {reviews}/>
      </div>
    </div>
  );
};

export default App;
