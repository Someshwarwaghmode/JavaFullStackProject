import React from "react";

const HomePageCard = ({product}) => {
  return (
    <div className="p-[0.5rem] m-[1rem] cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-x-hidden w-[15rem] mx-3">
      <div className="h-[13rem] w-[10rem]">
        <img
          className="rounded-2xl object-cover object-top w-full h-full"
          src={product.imageUrl}
          alt="Card Image"
        />
      </div>
      <div className="p-4">
        <h3 className=" text-lg font-medium text-gray-900">{product.brand}</h3>
        <p className="mt-2 text-sm text-gray-500">
          {product.title}
        </p>
      </div>
    </div>
  );
};

export default HomePageCard;
