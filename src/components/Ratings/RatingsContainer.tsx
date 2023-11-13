import React from "react";
import RatingsItem from "./RatingsItem";

type Props = {};

const RatingsContainer = (props: Props) => {
  return (
    <div className="px-4">
      <div className="bg-zinc-100 max-w-4xl mb-6 mx-auto p-10 rounded-md flex flex-col gap-5 mt-10 flex-wrap animate-formAnimation">
        <div className="text-2xl flex gap-1 items-center">
          <p> Ratings</p>
          <span>
            <svg
              className="w-3 h-3 text-yellow-400 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          </span>
          <span className="text-sm text-yellow-400">4.3</span>
          <span className="text-xs text-gray-700"> (160 Rating) </span>
        </div>
        <div>
          <p className="text-sm">Gufran haciakil</p>
          <div className="flex gap-2 flex-wrap">
            <input
              type="text"
              placeholder="your comment:"
              className="md:w-96 rounded-md focus:border-[1px] transition-all duration-300 focus:border-yellow-400   focus:ring-yellow-400"
              name=""
              id=""
            />
            <button className="bg-yellow-300 rounded-md h-10 self-start hover:scale-95 text-sm md:text-md text-zinc-700 px-2 md:px-4 transition-all duration-150">
              send
            </button>
          </div>
        </div>

        <RatingsItem />
        <RatingsItem />
        <RatingsItem />
      </div>
    </div>
  );
};

export default RatingsContainer;
