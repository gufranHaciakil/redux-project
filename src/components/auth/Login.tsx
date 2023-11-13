import { useState } from "react";
import { Link } from "react-router-dom";

type Props = {};

function Login(props: Props) {
  const [inputType, setInputType] = useState("password");
  const inputTypeFunc = () => {
    if (inputType === "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
  };
  const inputClass =
    "block py-2.5 px-0 w-full text-sm transition-all duration-500 text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-400 focus:outline-none focus:ring-0 focus:border-yellow-300 peer";
  return (
    <div className="w-fit mx-auto mt-20 mb-24 animate-formAnimation">
      <form className="flex flex-col items-cenetr gap-2 h-[22rem] bg-gray-100 py-5 w-[20rem] px-10">
        <h1 className="text-center text-3xl">Log in</h1>
        <input
          type="text"
          className={`${inputClass} my-6`}
          placeholder="your Email:"
        />{" "}
        <div className="relative">
          <input
            type={inputType}
            className={inputClass}
            placeholder="password:"
          />{" "}
          <span
            className="absolute right-0 top-4 cursor-pointer"
            onClick={() => {
              inputTypeFunc();
            }}
          >
            {inputType === "password" ? (
              <svg
                className="w-4 h-4 text-gray-400 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 14"
              >
                <g stroke="currentColor">
                  <path d="M10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                  <path d="M10 13c4.97 0 9-2.686 9-6s-4.03-6-9-6-9 2.686-9 6 4.03 6 9 6Z" />
                </g>
              </svg>
            ) : (
              <svg
                className="w-4 h-4 text-gray-400 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 18"
              >
                <path
                  stroke="currentColor"
                  d="M1.933 10.909A4.357 4.357 0 0 1 1 9c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 19 9c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M2 17 18 1m-5 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            )}
          </span>
        </div>{" "}
        <button className=" bg-yellow-300 py-0.5 px-4 rounded-sm text-sm mt-8 hover:scale-95 transition-all duration-100  ">
          log in
        </button>
        <div className="flex text-xs gap-1 mt-1 self-center">
          <p>Don't have an account? </p>
          <Link className="border-b-[1px] border-yellow-400" to="/signup">
            {" "}
            Click here
          </Link>
        </div>{" "}
      </form>
      <div className="justify-center mt-4 text-lg">
        <Link
          className="block border-b-2 border-gray-400 w-fit"
          to={"/admin/allproduct"}
        >
          {" -> "} Admin MAil
        </Link>{" "}
        <br />
        <Link
          className="block border-b-2 border-gray-400 w-fit"
          to={"/user/allorder"}
        >
          {" -> "}User MAil
        </Link>
      </div>
    </div>
  );
}

export default Login;
