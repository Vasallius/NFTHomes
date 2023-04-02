import React from "react";

const Pricing = ({ price, rating, reviews }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-2xl font-bold flex items-center mb-1">
        <span className="mr-1">$</span>
        <span>{price}</span>
        <span className="ml-1 text-lg">/night</span>
      </div>
      <div className="flex items-center">
        <span className="text-xl font-bold mr-1">{rating}</span>
        <span className="text-sm text-gray-500">({reviews} reviews)</span>
      </div>
    </div>
  );
};

export default Pricing;
