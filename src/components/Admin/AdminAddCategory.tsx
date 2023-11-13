import React from "react";

type Props = {};

function AdminAddCategory(prop: Props) {
  return (
    <>
      <h1 className="text-2xl font-semibold animate-formAnimation">
        Add New Category
      </h1>

      <div className="flex flex-col mt-4 gap-6 ml-2 animate-drawer">
        <div>
          <p className="opacity-40 text-sm">Add Img</p>
          <label htmlFor="file" className="opacity-20 cursor-pointer">
            <svg
              className="w-24 h-24 mt-3 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4.828 10h6.239m-6.239 4h6.239M6 1v4a1 1 0 0 1-1 1H1m14-4v16a.97.97 0 0 1-.933 1H1.933A.97.97 0 0 1 1 18V5.828a2 2 0 0 1 .586-1.414l2.828-2.828A2 2 0 0 1 5.828 1h8.239A.97.97 0 0 1 15 2Z"
              />
            </svg>
          </label>
          <input type="file" className="w-0 hidden" id="file" />
        </div>
        <div>
          <input
            type="text"
            className= "w-36 md:w-60 focus:ring-yellow-400 focus:border-none focus:outline-0 focus:ring-offset-0 transition-all duration-500"
            placeholder="Category Name:"
          />
          <button className="bg-yellow-300 hover:scale-95 text-lg ml-[1px] text-zinc-800 px-4 py-[0.5rem] transition-all duration-150">
            Save
          </button>
        </div>
      </div>
    </>
  );
}

export default AdminAddCategory;
