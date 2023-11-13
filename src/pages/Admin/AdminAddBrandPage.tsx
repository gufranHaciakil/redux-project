import AdminAddBrand from "components/Admin/AdminAddBrand";
import AdminSidebar from "components/Admin/AdminSidebar";
import React from "react";

type Props = {};

const AdminAddBrandPage = (props: Props) => {
  return (
    <div className="flex md:gap-8">
        <AdminSidebar />
      <div className="flex flex-col">
        <h1 className="text-2xl text-center md:text-start font-semibold animate-formAnimation">
          Add New Brand
        </h1>
        <AdminAddBrand />
      </div>
    </div>
  );
};

export default AdminAddBrandPage;
