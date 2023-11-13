import UserAllOrder from "components/User/UserAllOrder";
import UserSidebar from "components/User/UserSidebar";
import React from "react";

type Props = {};

const UserAllOrderPage = (props: Props) => {
  return (
    <div className="flex gap-14 md:gap-3">
      <div className="">
        <UserSidebar />
      </div>
      <div className="flex flex-col items-center md:items-start w-4/5 mr-[rem] md:w-[70%] px-2">
        <UserAllOrder />
      </div>
    </div>
  );
};

export default UserAllOrderPage;
