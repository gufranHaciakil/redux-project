import React from "react";

type Props = {};

const RatingsItem = (props: Props) => {
  return (
    <div className="border-b-[1px] md:w-2/4 pb-2 pl-1">
      <div className="text- flex gap-1 items-center">
        <p>Jack</p>
        <span>
          <svg
            className="w-2 h-2 text-yellow-400 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        </span>
        <span className="text-xs text-yellow-400">4.3</span>
      </div>
      <p className="text-sm text-gray-700">Suitable product, good price, I recommend it</p>
    </div>
  );
};

export default RatingsItem;
