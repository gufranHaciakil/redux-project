import ReactPaginate from "react-paginate";

const Pagination = () => {
  const pageCount = 200;

  return (
    <div className="mb-20 border-b-2 mt-16 flex justify-center duration-">
      <ReactPaginate
        className="flex gap-4 items-center mb-2"
        containerClassName="mb-40 border-4"
        breakLabel="..."
        nextLabel={
          <svg
            className="w-6 h-6 text-gray-800 hover:text-yellow-400 transition-all duration-200 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
        
              d="m1 9 4-4-4-4"
            />
          </svg>
        }
        //onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel={
          <svg
            className="w-6 h-6 text-gray-800 hover:text-yellow-400 transition-all duration-200 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
          
              d="M5 1 1 5l4 4"
            />
          </svg>
        }
        breakClassName=""
        breakLinkClassName=""
        pageClassName="hover:bg-gray-400 hover:text-slate-200 rounded transition duration-300"
        pageLinkClassName="font-bold px-3"
        activeClassName="bg-gray-400 rounded text-slate-200"
        nextClassName="flex item-center rounded px-3 py-1 font-bold text-gray-800"
        previousLinkClassName=" flex item-center rounded px-3 py-1 font-bold text-gray-800"
        nextLinkClassName=""
      />
    </div>
  );
};
export default Pagination;
