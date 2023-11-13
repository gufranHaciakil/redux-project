import React from "react";

type Props = {};

const UserEditAddress = (props: Props) => {
  return (
    <>
      <h1 className="text-2xl md:text-3xl w-fit mx-auto md:mx-0 font-semibold animate-formAnimation mb-4">
        Edit Address
      </h1>
      <div className="w-3/4 flex flex-col gap-3">
        <input
          type="text"
          className=" md:w-2/4 rounded-md focus:border-yellow-400 focus:border-2 focus:ring-0 focus:outline-0 focus:ring-offset-0 transition-all duration-500"
          placeholder={"Home"}
        />
        <textarea
          className=" md:w-2/4 rounded-md focus:border-yellow-400 focus:border-2 focus:ring-0 focus:outline-0 focus:ring-offset-0 transition-all duration-500"
          placeholder={"Gaziantep Sahinbey Karatas merkez 25415 cadde"}
        ></textarea>
        <input
          type="number"
          className="w-full  md:w-2/4 rounded-md focus:border-yellow-400 focus:border-2 focus:ring-0 focus:outline-0 focus:ring-offset-0 transition-all duration-500"
          placeholder={"0536987442"}
        />
      </div>
      <button className="bg-yellow-400 px-8 mt-3 py-2 w-fit hover:scale-95 transition-all duration-150 cursor-pointer  ">
        Save
      </button>
    </>
  );
};

export default UserEditAddress;
