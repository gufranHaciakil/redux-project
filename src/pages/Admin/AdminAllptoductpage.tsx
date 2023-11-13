import AdminAllProduct from "components/Admin/AdminAllProduct";
import AdminSidebar from "components/Admin/AdminSidebar";
import Pagination from "components/SharedComponents/Pagination";

type Props = {};

const AdminAllptoductpage = (props: Props) => {
  return (
    <>
      <div className="flex md:gap-2 md:justify-start">
        <div className="">
          <AdminSidebar />
        </div>
        <div className="flex flex-col -ml-10 md:ml-0 w-11/12 flex-wrap">
          <p className="text-xl px-3 md:w-auto w-fit mx-auto md:mx-2 animate-formAnimation font-semibold">
            Manage all Products
          </p>
          <div className="animate-drawer flex gap-1 flex-wrap mt-6 justify-center ml-[-1rem] md:ml-0 pr-1 md:justify-start">
            <AdminAllProduct />
            <AdminAllProduct />
            <AdminAllProduct />
            <AdminAllProduct />
            <AdminAllProduct />
            <AdminAllProduct />
            <AdminAllProduct />
            <AdminAllProduct />
          </div>{" "}
        </div>
      </div>
      <div className="self-center px-8 md:self-start mt-12">
        <Pagination />
      </div>{" "}
    </>
  );
};

export default AdminAllptoductpage;
