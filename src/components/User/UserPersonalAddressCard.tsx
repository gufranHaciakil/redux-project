import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const UserPersonalAddressCard = (props: Props) => {
  return (
    <div className="bg-zinc-50 flex justify-between w-[21rem] sm:w-[29rem] md:w-[30rem] rounded-md p-4 mb-3">
      <div className="flex flex-col gap-1">
        <p className="text-gray-500">Home</p>
        <p className="text-gray-500">
          Gaziantep Sahinbey Karats merkez 125487 Cadde
        </p>
        <p className="text-gray-500">Telefone: 052145698</p>
      </div>
      <div className="flex gap-2">
        <Link to={"/user/editaddress"}>
          <svg
            className="w-4 h-4 text-gray-600 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M12.687 14.408a3.01 3.01 0 0 1-1.533.821l-3.566.713a3 3 0 0 1-3.53-3.53l.713-3.566a3.01 3.01 0 0 1 .821-1.533L10.905 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V11.1l-3.313 3.308Zm5.53-9.065.546-.546a2.518 2.518 0 0 0 0-3.56 2.576 2.576 0 0 0-3.559 0l-.547.547 3.56 3.56Z" />
            <path d="M13.243 3.2 7.359 9.081a.5.5 0 0 0-.136.256L6.51 12.9a.5.5 0 0 0 .59.59l3.566-.713a.5.5 0 0 0 .255-.136L16.8 6.757 13.243 3.2Z" />
          </svg>
        </Link>
        <span>
          <svg
            className="w-4 h-4 text-gray-600 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default UserPersonalAddressCard;
