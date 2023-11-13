import Select from "react-select";

type Props = {};

const AdminAddProduct = (props: Props) => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <>
      <h1 className="text-3xl font-semibold mb-3 animate-formAnimation">
        Product Name
      </h1>

      <div className="flex flex-col gap-3 animate-drawer">
        <div>
          <label htmlFor="img" className="cursor-pointer">
            {" "}
            <svg
              className="w-20 h-20 text-gray-300 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 20"
            >
              <path
                fill="currentColor"
                d="M11.045 7.514a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-4.572 3.072L3.857 15.92h7.949l-1.811-3.37-1.61 2.716-1.912-4.679Z"
              />
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 1v4a1 1 0 0 1-1 1H1m14 12a.97.97 0 0 1-.933 1H1.933A.97.97 0 0 1 1 18V5.828a2 2 0 0 1 .586-1.414l2.828-2.828A2 2 0 0 1 5.828 1h8.239A.97.97 0 0 1 15 2v16ZM11.045 7.514a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM3.857 15.92l2.616-5.333 1.912 4.68 1.61-2.717 1.81 3.37H3.858Z"
              />
            </svg>
          </label>
          <input type="file" className="hidden" />
        </div>
        <input
          type="text"
          placeholder="Product Name"
          className="bg-zinc-50  w-64 md:w-[28rem] border-gray-300 focus:border-yellow-400 focus:ring-0 focus:border-2 transition-all duration-300"
        />
        <textarea
          name=""
          id=""
          className="md:w-[28rem] w-64 bg-zinc-50 border-gray-300 focus:border-yellow-400 focus:ring-0 focus:border-2 transition-all duration-300"
          placeholder="Product features"
        ></textarea>
        <input
          type="text"
          placeholder="Price before discount"
          className="bg-zinc-50  w-64 md:w-[28rem] border-gray-300 focus:border-yellow-400 focus:ring-0 focus:border-2 transition-all duration-300"
        />
        <input
          type="text"
          placeholder="Product Price"
          className="bg-zinc-50  w-64 md:w-[28rem] border-gray-300 focus:border-yellow-400 focus:ring-0 focus:border-2 transition-all duration-300"
        />
        <Select
          placeholder="Main category"
          isMulti
          name="name"
          options={options}
          className="basic-multi-select w-64 md:w-[28rem]"
          classNamePrefix="bg-red-800"
        />{" "}
        <input
          type="text"
          placeholder="Brand"
          className="bg-zinc-50 md:w-[28rem] w-64 border-gray-300 focus:border-yellow-400 focus:ring-0 focus:border-2 transition-all duration-300"
        />
      </div>
    </>
  );
};

export default AdminAddProduct;
