import React from "react";

const Button = (props) => {
  return (
    <div>
      <button className="flex gap-4 items-center bg-white text-blue border-1 border-blue rounded-lg px-8  w-fit mx-auto ">
      {props.btnText}
        
      </button>
    </div>
  );
};

export default Button;
