import { Dropdown } from "flowbite-react";
import { useState } from "react";
import { Link } from "react-router-dom";

type Props = {};

function DropDown(prop: Props) {
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
    <div className="flex items-center gap-4 cursor-pointer">
      <Dropdown
        className="transition-all duration-300"
        dismissOnClick={dismissOnClick}
        renderTrigger={() => (
          <span>
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 21 18"
            >
              <path
                stroke="currentColor"
                d="M9.5 3h9.563M9.5 9h9.563M9.5 15h9.563M1.5 13a2 2 0 1 1 3.321 1.5L1.5 17h5m-5-15 2-1v6m-2 0h4"
              />
            </svg>
          </span>
        )}
        label={undefined}
      >
        {navArr.map((item, i) => {
          return (
            <Dropdown.Item key={i}
              onClick={() => {
                setDismissOnClick(false);
              }}
            >
              <Link  to={"/allproduct"}>{item}</Link>
            </Dropdown.Item>
          );
        })}
      </Dropdown>
    </div>
  );
}

export default DropDown;
