import React from "react";

type Props = {};

function PaymentComponent(prop: Props) {
  return (
    <div className="flex flex-col items-center gap-6 h-[18.5rem] mt-24">
      <h1 className="w-fit mx-auto text-3xl ">Choose payment method</h1>
      <div className="bg-zinc-100 flex flex-col gap-4 md:w-2/4 mx-auto rounded-md py-4 px-5">
        <div>
          <label htmlFor="item1" className="">
            Payment via bank card
          </label>
          <input
            id="item1"
            type="checkbox"
            className="focus:shadow-none focus:ring-offset-0 ml-2 focus:ring-0 rounded-lg text-yellow-400"
          />
        </div>
        <div>
          <label htmlFor="item2" className="">
            Payment upon delivery
          </label>
          <input
            id="item2"
            type="checkbox"
            className="focus:shadow-none focus:ring-offset-0  focus:ring-0 rounded-lg text-yellow-400 ml-2"
          />
        </div>
      </div>
      <div>
        <button className="text-sm bg-yellow-400 py-1 px-4 w-[15.5rem] text-center rounded-md hover:scale-95 transition-all duration-100">
          Complete your purchase
        </button>
        <span className="bg-zinc-100  px-5 rounded-md text-gray-400">10$</span>
      </div>
    </div>
  );
}

export default PaymentComponent;
