import { useState } from "react";
import { Link } from "react-router-dom";

type Props = {};

function Product(props: Props) {
  const [heartIcon, setHeartIcon] = useState(true);
  return (
    <div className="flex flex-col gap-3 w-[11rem] sm:w-40 md:w-fit bg-zinc-100 rounded-md p-3 hover:cursor-pointer">
      <Link to="/productDetails/id">
        <img
          src={require("../../../img/Dress1.png")}
          alt=""
          className="hover:scale-95 transition-all duration-200"
          width={"140px"}
        />
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
        <button className="bg-yellow-300 rounded-md hover:scale-95 text-xs md:text-sm text-zinc-700 px-2 md:px-4 transition-all duration-150">
          Add card
        </button>
      </div>{" "}
    </div>
  );
}

export default Product;
