import React from "react";
import SlidingImg from "./SlidingImg";

type Props = {};

function ProductDetailsCom(prop: Props) {
  return (
    <div className="animate-formAnimation flex flex-col md:flex-row gap-5 md:justify-between ">
      <div className="md:w-[25%] flex "><SlidingImg/></div>

      <div className="w-3/4 border-gray-300 flex flex-col border-l-2 p-2">
        <p className="text-gray-600 text-sm">Clothes:</p>
        <p className="mb-4">
          {" "}
          description description description description description{" "}
        </p>
        <p className="text-gray-600 text-sm mb-4">
          Brand: <span className="text-xl font-bold">Dior</span>
        </p>
        <input type="color" className="mb-4" name="" id="" />
        <p className="text-gray-600 text-sm">Specifications:</p>
        <p className="max-w-3xl mb-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio,
          corrupti illum totam nemo iure voluptatibus numquam nobis eligendi,
          exercitationem sint optio, impedit reiciendis? Dolores iure mollitia
          nulla consequuntur, ipsum molestiae.
        </p>
        <div className="mb-1">
          <button className="bg-yellow-300 rounded-md self-start hover:scale-95 text-sm text-zinc-700 px-4 transition-all duration-150">
            Add to Card
          </button>{" "}
          <span className="ml-3 font-bold">20$</span>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsCom;
