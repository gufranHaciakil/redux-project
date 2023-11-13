import AdminAddProduct from "components/Admin/AdminAddProduct";
import AdminSidebar from "components/Admin/AdminSidebar";

type Props = {};

const AdminAddProductPage = (props: Props) => {
  return (
    <div className="flex md:gap-3">
      <div className="">
        <AdminSidebar />
      </div>
      <div className="flex flex-col md:w-[70%]">
        <AdminAddProduct />
      </div>
    </div>
  );
};

export default AdminAddProductPage;
