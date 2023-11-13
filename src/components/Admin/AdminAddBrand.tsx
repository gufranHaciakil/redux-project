import React from "react";

type Props = {};

function AdminAddBrand(prop: Props) {
  return (
    <div className="flex flex-col gap-6 animate-drawer mr-8">
      <div>
        <p className="opacity-40 text-sm mt-10">Add Img</p>
        <label htmlFor="file" className="opacity-20 cursor-pointer">
          <svg
            className="w-24 h-24 mt-3 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 16 20"
          >
            <path
              fill="currentColor"
              d="M11.045 7.514a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-4.572 3.072L3.857 15.92h7.949l-1.811-3.37-1.61 2.716-1.912-4.679Z"
            />
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 1v4a1 1 0 0 1-1 1H1m14 12a.97.97 0 0 1-.933 1H1.933A.97.97 0 0 1 1 18V5.828a2 2 0 0 1 .586-1.414l2.828-2.828A2 2 0 0 1 5.828 1h8.239A.97.97 0 0 1 15 2v16ZM11.045 7.514a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM3.857 15.92l2.616-5.333 1.912 4.68 1.61-2.717 1.81 3.37H3.858Z"
            />
          </svg>
        </label>
        <input type="file" className="w-0 hidden" id="file" />
      </div>
      <div>
        <input
          type="text"
          className="md:w-60 w-52 mb-1 focus:ring-yellow-400 focus:border-none focus:outline-0 focus:ring-offset-0 transition-all duration-500"
          placeholder="Brand Name:"
        />
        <button className="bg-yellow-300 hover:scale-95 text-lg ml-[1px] text-zinc-800 px-4 py-[0.5rem] transition-all duration-150">
          Save
        </button>
      </div>
    </div>
  );
}

export default AdminAddBrand;
