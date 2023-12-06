// Card.tsx
import React from "react";

interface CardProps {
  icon: JSX.Element;
  heading: string;
  paragraph: string;
}

const Card: React.FC<CardProps> = ({ icon, heading, paragraph }) => {
  return (
    <div className="max-w-[20rem] mx-auto mt-4 p-6 bg-slate-100 rounded-xl  shadow-md flex flex-col  space-x-4">
      <div className="flex-shrink-0 items-start justify-start mb-2 ml-4">
        {icon}
      </div>
      <div>
        <div className="text-xl font-semibold  text-black">{heading}</div>
        <p className="text-gray-500 mt-4">{paragraph}</p>
      </div>
    </div>
  );
};

export default Card;
