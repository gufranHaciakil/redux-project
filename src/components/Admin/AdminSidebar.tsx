import React, { useState } from "react";
import { Link } from "react-router-dom";

type Props = {};

const AdminSidebar = (props: Props) => {
  const [leftDrawer, setLeftDrawer] = useState(true);

  const ulArr = [
    {
      title: "Product managementt",
      url: "/admin/allproduct",
    },
    {
      title: "Order management",
      url: "/admin/allorder",
    },
    {
      title: "Add Prand",
      url: "/admin/addbrand",
    },
    {
      title: "Add Category",
      url: "/admin/addcategory",
    },
    {
      title: "Add Subcategory",
      url: "/admin/addsubcategory",
    },
    {
      title: "Add Product",
      url: "/admin/addproduct",
    },
  ];
  return (
    <div
      className={`flex  ${
        leftDrawer ? "ml-[-12rem]" : ""
      } transition-all duration-300 md:ml-0`}
    >
      <div className="bg-zinc-100 flex flex-col w-44 text-sm">
        {ulArr.map((item, index) => {
          return (
            <Link
              onClick={() => {
                setLeftDrawer(true);
              }}
              className="border-b-[1px] px-1 w-full block hover:bg-gray-200 focus:bg-gray-200 transition-all duration-150 border-gray-300 text-center py-4"
              to={item.url}
            >
              {" "}
              {item.title}
            </Link>
          );
        })}
      </div>

      <div className="block md:hidden mr-16 relative left-8 border-b-2 h-fit border-gray-400 rounded-md">
        {leftDrawer ? (
          <div
            className="animate-formAnimation"
            onClick={() => {
              console.log("object");
              setLeftDrawer(false);
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
          <svg
            onClick={() => {
              setLeftDrawer(true);
            }}
            className="w-6 h-6 text-gray-900 animate-formAnimation  dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path stroke="currentColor" d="M13 5H1m0 0 4 4M1 5l4-4" />
          </svg>
        )}
      </div>
    </div>
  );
};

export default AdminSidebar;
