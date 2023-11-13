import DRopDown from "components/Product/DropDown";
import SubRightDrawer from "components/Product/SubRightDrawer";
import { Dropdown } from "flowbite-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function SubNav() {
  const [dismissOnClick, setDismissOnClick] = useState(false);
  const navArr = [
    "All",
    " Electronics ",
    " Clothes ",
    "  House furniture ",
    "  Makeup  ",
    " Sale  ",
    " More.. ",
  ];
  return (
    <div className="border-b-2 border-gray-300 flex justify-between items-center px-10 py-2 mt-3 gap-3 md:gap-36 sm:w-full sm:mx-auto ">
      <DRopDown />
      <div onClick={() => {}} className="md:hidden"></div>
      <ul className=" gap-4 hidden md:flex flex-wrap items-center text-md">
        {navArr.map((item, index) => {
          return (
            <li
              key={index}
              className="hover:text-yellow-400 transition-all duration-200"
            >
              <Link to={"/allproduct"}>{item}</Link>{" "}
            </li>
          );
        })}
      </ul>
      <Dropdown
        className="transition-all duration-300 w-2/4 md:hidden"
        dismissOnClick={dismissOnClick}
        renderTrigger={() => (
          <span className="md:hidden">
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 18"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m2.133 2.6 5.856 6.9L8 14l4 3 .011-7.5 5.856-6.9a1 1 0 0 0-.804-1.6H2.937a1 1 0 0 0-.804 1.6Z"
              />
            </svg>
          </span>
        )}
        label={"undefined"}
      >
        <Dropdown.Item
          className=""
          onClick={() => {
            setDismissOnClick(false);
          }}
        >
          {/* <Link to={"/allproduct"}>{item}</Link> */}

          <SubRightDrawer />
        </Dropdown.Item>
      </Dropdown>
    </div>
  );
}

export default SubNav;
