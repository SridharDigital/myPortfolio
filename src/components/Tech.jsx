import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { ServiceCard } from "./About";

const Tech = () => {
  return (
     <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='flex flex-col justify-center w-28 h-28 my-3' key={technology.name}>
          <div className="flex flex-col justify-center items-center mb-4">
            <img src={technology.icon} className="w-20"/>
          </div>
          <p className="text-center">{technology.name} </p>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "skills");
