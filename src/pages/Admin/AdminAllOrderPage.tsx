import AdminAllOrder from "components/Admin/AdminAllOrder";
import AdminSidebar from "components/Admin/AdminSidebar";
import React from "react";

type Props = {};

const AdminAllOrderPage = (props: Props) => {
  return (
    <div className="flex md:justify-start">
      <div className="">
        <AdminSidebar />
      </div>
      <div className="flex flex-col">
        <p className="text-xl mb-6 px-3md:w-auto w-fit mx-auto md:mx-2 animate-formAnimation font-semibold">
          Manage all Orders
        </p>
        <div className="animate-drawer ml-[-3.7rem] md:ml-4">
          <AdminAllOrder />
          <AdminAllOrder />
        </div>
      </div>
    </div>
  );
};

export default AdminAllOrderPage;
