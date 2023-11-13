import { useState } from "react";
import { Link } from "react-router-dom";

const NavbarCom = ({
  setToRightDrawer,
  toRightDrawer,
  setDrawerTranslate,
  drawerTranslate,
}: {
  setToRightDrawer: any;
  toRightDrawer: any;
  setDrawerTranslate: any;
  drawerTranslate: any;
}) => {
  const [opacity, setOpacity] = useState(0);

  return (
    <div className="mb-16 flex">
      <div className="flex justify-between fixed top-0 right-0 left-0 bg-zinc-100 z-30 px-5 sm:justify-around gap-3  md:gap-36 border-b-2 border-gray-600 sm:w-4/5 sm:mx-auto items-center pb-1">
        <Link to={"/"} className="">
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 20"
          >
            <path
              stroke="currentColor"
              d="M12 9V4a3 3 0 0 0-6 0v5m9.92 10H2.08a1 1 0 0 1-1-1.077L2 6h14l.917 11.923A1 1 0 0 1 15.92 19Z"
            />
          </svg>
        </Link>
    

        <div className="flex gap-4 items-center">
          <div className="relative z-0 hidden items-center sm:flex">
            <input
              type="text"
              id="search"
              className={`block py-2.5 px-0 w-2/4 text-sm opacity-${opacity} transition-all duration-500 text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-400 focus:outline-none focus:ring-0 focus:border-yellow-400 peer`}
              placeholder=" "
            />
            <label
              htmlFor="search"
              onClick={() => {
                setOpacity(1);
              }}
            >
              <svg
                className="w-5 h-5 text-gray-800 dark:text-white cursor-pointer"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </label>
          </div>
          <label
            htmlFor="search2"
            onClick={() => {
              setOpacity(1);
            }}
          >
            <svg
              className="w-5 h-5 text-gray-800 dark:text-white sm:hidden  cursor-pointer"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </label>

          <Link to={"/card"} className="hidden sm:block">
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 21"
            >
              <path d="M15 14H7.78l-.5-2H16a1 1 0 0 0 .962-.726l.473-1.655A2.968 2.968 0 0 1 16 10a3 3 0 0 1-3-3 3 3 0 0 1-3-3 2.97 2.97 0 0 1 .184-1H4.77L4.175.745A1 1 0 0 0 3.208 0H1a1 1 0 0 0 0 2h1.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 10 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3Zm-8 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm8 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
              <path d="M19 3h-2V1a1 1 0 0 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 0 0 2 0V5h2a1 1 0 1 0 0-2Z" />
            </svg>
          </Link>
          <Link to={"/login"}>
            <img
              className="w-10 h-10 rounded-full"
              src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
              alt="Rounded avatar"
            />
          </Link>
          <div
            className="sm:hidden block cursor-pointer"
            onClick={() => {
              setToRightDrawer(true);
              setDrawerTranslate(false);
            }}
          >
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex sm:hidden justify-center mx-auto items-center w-3/4">
        <div className="relative z-0 w-full">
          <input
            type="text"
            id="search2"
            className={`block py-2.5 mt-10 -mb-10 px-0 w-full md:w-[22rem] text-sm transition-all opacity-${opacity} duration-500 text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-yellow-400 peer`}
            placeholder="search.."
          />
        </div>
      </div>
    </div>
  );
};

export default NavbarCom;
