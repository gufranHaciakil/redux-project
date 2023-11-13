import SupTask from "components/SharedComponents/SupTask";
import React from "react";
import { Link } from "react-router-dom";

type Props = {};

function CardPage(prop: Props) {
  return (
    <div className="animate-formAnimation">
      <div className="mb-5 ">
        <SupTask title={"CARD"} btnTitle={""} btnLink={""} />
      </div>{" "}
      <div className="flex flex-col md:flex-row border-2 items-center md:items-start md:justify-center gap-5 px-3">
        <div className="flex flex-col md:w-2/4 gap-4">
          <div className="flex bg-zinc-100 justify-between pb-3">
            <div className="flex ">
              <img
                src={require("../../img/product3.jpg")}

                className="w-32 rounded-lg"
                alt=""
              />

              <div className="flex flex-col ml-2 gap-2">
                <p>Electronics</p>
                <p>
                  description description description description description
                </p>
                <p>
                  Brand: <span className="font-bold">Apple</span>
                </p>
                <p>
                  <input type="color" name="" id="" />

                </p>
                <p>
                  Quantity{" "}
                  <span>
                    <input
                      title="Quantity"
                      className="w-16 h-6 rounded-full p-2"
                      type="number"
                    />
                  </span>
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-between items-center p-4">
              <div className="">
                <svg
                  className="w-4 h-4 text-gray-800 hover:text-red-900 transition-all duration-100 hover:cursor-pointer hover:scale-110 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                >
                  <path d="M17 4h-4V2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2H1a1 1 0 0 0 0 2h1v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1a1 1 0 1 0 0-2ZM7 2h4v2H7V2Zm1 14a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0v8Zm4 0a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v8Z" />
                </svg>
              </div>
              <p className="text-lg">14$</p>
            </div>
          </div>

          <div className="flex bg-zinc-100 justify-between">
            <div className="flex ">
              <img
                src={require("../../img/product3.jpg")}
                className="w-32 rounded-lg"
                alt=""
              />

              <div className="flex flex-col ml-2 gap-2">
                <p>Electronics</p>
                <p>
                  description description description description description
                </p>
                <p>
                  Brand: <span className="font-bold">Apple</span>
                </p>
                <p>
                  <input type="color" name="" id="" />
                </p>
                <p>
                  Quantity{" "}
                  <span>
                    <input
                      className="w-16 h-6 rounded-full p-2"
                      type="number"
                    />
                  </span>
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-between items-center p-4">
              <div className="">
                <svg
                  className="w-4 h-4 text-gray-800 hover:text-red-900 transition-all duration-100 hover:cursor-pointer hover:scale-110 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                >
                  <path d="M17 4h-4V2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2H1a1 1 0 0 0 0 2h1v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1a1 1 0 1 0 0-2ZM7 2h4v2H7V2Zm1 14a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0v8Zm4 0a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v8Z" />
                </svg>
              </div>
              <p className="text-lg">14$</p>
            </div>
          </div>
        </div>

        <div className="bg-zinc-100 w-80 h-fit p-4 text-center">
          <input
            type="text"
            placeholder="Discount code"
            className="h-8 rounded-md focus:ring-yellow-400 focus:border-none focus:ring-1 mr-2"
            name=""
            id=""
          />
          <button className="bg-yellow-400 py-1 px-4 rounded-md hover:scale-95 transition-all duration-100">
            Run
          </button>
          <div className="bg-white w-[15.5rem] mx-auto rounded-md pt-1 mt-4 text-gray-400">
            30$
          </div>
          <div className="mt-4">
            <Link
              to={"/order/paymentpage"}
              className="text-sm bg-yellow-400 py-1  px-4 w-[15.5rem] rounded-md hover:scale-95 transition-all duration-100"
            >
              Complete the order
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardPage;
