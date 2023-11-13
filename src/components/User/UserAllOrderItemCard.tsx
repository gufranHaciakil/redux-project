import React from "react";
type Props = {};

const UserAllOrderItemCard = (props: Props) => {
  return (
    <div className="border-b-2 mb-1">
      <div className="flex  justify-between pb-3">
        <div className="flex">
          <img
            src={require("../../img/product3.jpg")}
            className="w-32 rounded-lg"
            alt=""
          />

          <div className="flex flex-col ml-2 gap-2">
            <p>description description</p>
            <p>
              Brand: <span className="font-bold">Apple</span>
            </p>
            <p className="w-5 h-5 mb-10 bg-orange-500 rounded-full"></p>
            <p>
              Quantity{" "}
              <span>
                <input className="w-16 h-6 rounded-full p-2" type="number" />
              </span>
            </p>
          </div>
        </div>
        <p className="flex flex-col justify-between items-center p-4">
          <div className="">
            <svg
              className="w-4 h-4 text-gray-800 hover:text-red-900 transition-all duration-100 hover:cursor-pointer hover:scale-110 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 20"
            >
              <path d="M17 4h-4V2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2H1a1 1 0 0 0 0 2h1v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1a1 1 0 1 0 0-2ZM7 2h4v2H7V2Zm1 14a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0v8Zm4 0a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v8Z" />
            </svg>
          </div>
          <p className="text-lg">14$</p>
        </p>
      </div>
    </div>
  );
};

export default UserAllOrderItemCard;
