type Props = {};

const UserAddAddres = (props: Props) => {
  return (
    <>
      <h1 className= "text-2xl md:text-3xl w-fit mx-auto md:mx-0 font-semibold animate-formAnimation mb-4">
        Add Address
      </h1>
      <div className="flex flex-col gap-3 animate-drawer w-4/5">
        <input
          type="text"
          placeholder="Addres Name"
          className=" md:w-2/4 rounded-md focus:border-yellow-400 focus:border-2 focus:ring-0 focus:outline-0 focus:ring-offset-0 transition-all duration-500"
        />
        <textarea
          placeholder="Addres"
          className=" md:w-2/4 rounded-md focus:border-yellow-400 focus:border-2 focus:ring-0 focus:outline-0 focus:ring-offset-0 transition-all duration-500"
        ></textarea>
        <input
          type="text"
          placeholder="Telefone"
          className=" md:w-2/4 rounded-md focus:border-yellow-400 focus:border-2 focus:ring-0 focus:outline-0 focus:ring-offset-0 transition-all duration-500"
        />
        <button className="w-fit bg-yellow-400 py-2 px-6 hover:scale-95 transition-all duration-150">
          Add Addres
        </button>
      </div>
    </>
  );
};

export default UserAddAddres;
