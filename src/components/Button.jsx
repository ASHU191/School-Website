import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Button = (props) => {
  return (
    <div>
      <button className="flex gap-4 items-center bg-blue rounded-lg px-8 text-white w-fit mx-auto">
      {props.btnText}
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export default Button;
