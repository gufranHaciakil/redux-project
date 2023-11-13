import AdminAddCategory from "components/Admin/AdminAddCategory";
import AdminSidebar from "components/Admin/AdminSidebar";

type Props = {};

const AdminAddCategoryPage = (props: Props) => {
  return (
    <div className="flex gap-3">
      <div className="">
        <AdminSidebar />
      </div>
      <div className="flex flex-col md:w-[70%]">
        <AdminAddCategory />
      </div>
    </div>
  );
};

export default AdminAddCategoryPage;
