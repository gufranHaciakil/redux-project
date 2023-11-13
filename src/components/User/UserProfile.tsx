import React from "react";

type Props = {};

const UserProfile = (props: Props) => {
  return (
    <>
      <h1 className="text-3xl font-semibold mb-3 w-fit mx-auto md:mx-0 animate-formAnimation">
        Profile
      </h1>
      <div className="border-y-2 border-gray-100 w-[24.5rem] md:w-2/4 rounded-md p-3 flex flex-col gap-3">
        <p className="text-lg">
          Name: <span className="text-sm text-gray-500">Gufran Haciakil</span>
        </p>
        <p className="text-lg">
          Telefone: <span className="text-sm text-gray-500">05364589854</span>
        </p>
        <p className="text-lg">
          Email:{" "}
          <span className="text-sm text-gray-500">gufranakil@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="mt-3 text-xl">
          Change Password
        </label>
        <input
          className=" w-[60%] md:w-[30%] rounded-md focus:border-yellow-400 focus:border-2 focus:ring-0 focus:outline-0 focus:ring-offset-0 transition-all duration-500"
          type="password"
          placeholder="Old Password"
        />
        <input
          type="password"
          placeholder="New Password"
          className="w-[60%] md:w-[30%] rounded-md focus:border-yellow-400 focus:border-2 focus:ring-0 focus:outline-0 focus:ring-offset-0 transition-all duration-500"
        />
      </div>
    </>
  );
};

export default UserProfile;
