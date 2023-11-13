
type Props = {};

const AdminAddSubCategory = (props: Props) => {
  return (
    <>
      <h1 className="text-2xl font-semibold animate-formAnimation">
        Add New Subcategory
      </h1>
      <div className="animate-drawer mt-4">
        <input
          type="text"
          placeholder="Subcategory Name:"
          className="md:w-[40%] focus:ring-yellow-400 focus:ring-2 focus:border-none focus:outline-0 focus:ring-offset-0 transition-all duration-500 "
        />
        <br />
        <select className="  md:w-[40%] opacity-70 focus:ring-yellow-400 focus:ring-2 mt-1 mr-1 focus:border-none focus:outline-0 focus:ring-offset-0 transition-all duration-500">
          <option className="">Subcategory 1</option>
          <option>Subcategory 2</option>
          <option>Subcategory 3</option>
          <option>Subcategory 4</option>
        </select>
        <button className="bg-yellow-300 hover:scale-95 text-lg ml-[1px] text-zinc-800 px-4 py-[0.5rem] transition-all duration-150">
          Save
        </button>
      </div>
    </>
  );
};

export default AdminAddSubCategory;
