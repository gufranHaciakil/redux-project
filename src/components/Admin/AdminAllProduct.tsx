import React, { useState } from "react";
import { Link } from "react-router-dom";

type Props = {};

const AdminAllProduct = (props: Props) => {
  const [heartIcon, setHeartIcon] = useState(true);
  return (
    <div className="flex flex-col gap-3 w-44 sm:w-40 md:w-fit bg-zinc-100 rounded-md p-3">
      <div className="flex justify-between">
        <span>
          <svg
            className="w-4 h-4 text-gray-400 cursor-pointer dark:text-white hover:text-gray-500 transition-all duration-150"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M12.687 14.408a3.01 3.01 0 0 1-1.533.821l-3.566.713a3 3 0 0 1-3.53-3.53l.713-3.566a3.01 3.01 0 0 1 .821-1.533L10.905 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V11.1l-3.313 3.308Zm5.53-9.065.546-.546a2.518 2.518 0 0 0 0-3.56 2.576 2.576 0 0 0-3.559 0l-.547.547 3.56 3.56Z" />
            <path d="M13.243 3.2 7.359 9.081a.5.5 0 0 0-.136.256L6.51 12.9a.5.5 0 0 0 .59.59l3.566-.713a.5.5 0 0 0 .255-.136L16.8 6.757 13.243 3.2Z" />
          </svg>
        </span>
        <span>
          <svg
            className="w-4 h-4 cursor-pointer text-gray-400 dark:text-white hover:text-gray-500 transition-all duration-150"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z"
            />
          </svg>
        </span>
      </div>
      <Link to={"/productDetails/id"} className="-mt-3">
        <img src={require("../../img/Dress1.png")} alt="" width={"140px"} />
      </Link>
      <div className="flex justify-between">
        <p>Title title</p>
        <span
          className=""
          onClick={() => {
            setHeartIcon(!heartIcon);
          }}
        >
          {heartIcon ? (
            <svg
              className="w-4 h-4 text-gray-800 dark:text-white cursor-pointer transition-all duration-200"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 21 19"
            >
              <path
                stroke="currentColor"
                d="M11 4C5.5-1.5-1.5 5.5 4 11l7 7 7-7c5.458-5.458-1.542-12.458-7-7Z"
              />
            </svg>
          ) : (
            <svg
              className="w-4 h-4 cursor-pointer text-red-500 dark:text-white transition-all duration-200"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0 0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z" />
            </svg>
          )}
        </span>
      </div>
      <p className="text-xs ">description description description</p>
      <div className="flex justify-between items-center">
        <p className="">13$</p>
        <button className="bg-yellow-300 rounded-md hover:scale-95 text-sm text-zinc-700 px-4 transition-all duration-150">
          Add card
        </button>
      </div>{" "}
    </div>
  );
};

export default AdminAllProduct;
