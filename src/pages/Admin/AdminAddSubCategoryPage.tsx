import AdminAddSubCategory from "components/Admin/AdminAddSubCategory";
import AdminSidebar from "components/Admin/AdminSidebar";

type Props = {};

const AdminAddSubCategoryPage = (props: Props) => {
  return (
    <div className="flex">
      <div className="">
        <AdminSidebar />
      </div>
      <div className="flex flex-col md:ml-6 md:w-[90%]">
        <AdminAddSubCategory />
      </div>
    </div>
  );
};

export default AdminAddSubCategoryPage;
