import React, { useState } from "react";
import { Link } from "react-router-dom";

type Props = {};

const UserSidebar = (props: Props) => {
  const [userDrawer, setuserDrawer] = useState(true);
  const ulArr = [
    {
      title: "Order management",
      url: "/user/allorder",
    },
    {
      title: "Favorite products",
      url: "/user/favoriteproduct",
    },
    {
      title: "Personal addresses",
      url: "/user/personaladdress",
    },
    {
      title: "User Profile ",
      url: "/user/profile",
    },
  ];
  return (
    <div
      className={`flex ${
        userDrawer ? "ml-[-12rem]" : "ml-0"
      } transition-all duration-300 md:ml-0`}
    >
      <div className="bg-zinc-100 flex w-44 flex-col">
        {ulArr.map((item, index) => {
          return (
            <Link
              key={index}
              className="border-b-[1px] hover:bg-gray-200 p-4 focus:bg-gray-200 transition-all duration-150 border-gray-300 text-center"
              to={item.url}
            >
              {" "}
              {item.title}
            </Link>
          );
        })}
      </div>

      <div className="block md:hidden relative left-8 border-b-2 h-fit border-gray-400 rounded-md">
        {userDrawer ? (
          <div
            onClick={() => {
              setuserDrawer(false);
            }}
          >
            <svg
              className="w-6 h-6 text-gray-900 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path stroke="currentColor" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </div>
        ) : (
          <div
            onClick={() => {
              setuserDrawer(true);
            }}
          >
            <svg
              className="w-6 h-6 text-gray-900 animate-formAnimation  dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path stroke="currentColor" d="M13 5H1m0 0 4 4M1 5l4-4" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserSidebar;
