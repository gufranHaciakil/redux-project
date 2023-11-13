import React from "react";
import UserPersonalAddressCard from "./UserPersonalAddressCard";
import { Link } from "react-router-dom";

type Props = {};

const UserPersonalAddress = (props: Props) => {
  return (
    <>
      <h1 className="text-3xl w-fit mx-auto md:mx-0 font-semibold animate-formAnimation mb-4">
        Address Book
      </h1>
      <div className="animate-drawer md:ml-0">
        <UserPersonalAddressCard />
        <UserPersonalAddressCard />
        <UserPersonalAddressCard />
        <Link to={'/user/addaddres'} className="flex gap-2 w-fit py-2 px-5 bg-yellow-400 items-center hover:scale-95 transition-all duration-150 cursor-pointer">
          <p>Add adres</p>
          <span>
            <svg
              className="w-3 h-3 text-gray-300 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M12.687 14.408a3.01 3.01 0 0 1-1.533.821l-3.566.713a3 3 0 0 1-3.53-3.53l.713-3.566a3.01 3.01 0 0 1 .821-1.533L10.905 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V11.1l-3.313 3.308Zm5.53-9.065.546-.546a2.518 2.518 0 0 0 0-3.56 2.576 2.576 0 0 0-3.559 0l-.547.547 3.56 3.56Z" />
              <path d="M13.243 3.2 7.359 9.081a.5.5 0 0 0-.136.256L6.51 12.9a.5.5 0 0 0 .59.59l3.566-.713a.5.5 0 0 0 .255-.136L16.8 6.757 13.243 3.2Z" />
            </svg>
          </span>
        </Link>
      </div>
    </>
  );
};

export default UserPersonalAddress;
