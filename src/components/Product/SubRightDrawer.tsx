import React from "react";

type Props = {};

function SubRightDrawer(pros: Props) {
  const CheckInputClass =
    "rounded-lg w-[0.8] h-[0.8] text-yellow-400 focus:ring-offset-zinc-200 focus:ring-zinc-200";
  return (
    <div className="flex flex-col gap-2 p-5 text-sm">
      <h1 className="text-xl">Categories</h1>
      <ul>
        <div className="flex gap-2 items-center">
          <input className={CheckInputClass} type="checkbox" />
          <li>Title</li>
        </div>
        <div className="flex gap-2 items-center">
          <input className={CheckInputClass} type="checkbox" />
          <li>Title</li>
        </div>
        <div className="flex gap-2 items-center">
          <input className={CheckInputClass} type="checkbox" />
          <li>Title</li>
        </div>
      </ul>
      <h1 className="text-xl mt-4">Brand</h1>
      <ul>
        <div className="flex gap-2 items-center">
          <input className={CheckInputClass} type="checkbox" />
          <li>Title</li>
        </div>
        <div className="flex gap-2 items-center">
          <input className={CheckInputClass} type="checkbox" />
          <li>Title</li>
        </div>
        <div className="flex gap-2 items-center">
          <input className={CheckInputClass} type="checkbox" />
          <li>Title</li>
        </div>
      </ul>
      <h1 className="text-xl mt-4">Price</h1>
      <ul>
        <div className="flex gap-2 items-center">
          <li>from</li>
          <input className="w-16 px-0 h-6" type="number" />
        </div>
        <div className="flex gap-2 items-center mt-1.5">
          <li>To</li>
          <input className="w-16 h-6 px-0 ml-3.5" type="number" />
        </div>
      </ul>
    </div>
  );
}

export default SubRightDrawer;
