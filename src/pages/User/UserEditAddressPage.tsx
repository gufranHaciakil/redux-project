import UserEditAddress from "components/User/UserEditAddress";
import UserSidebar from "components/User/UserSidebar";
import React from "react";

type Props = {};

const UserEditAddressPage = (props: Props) => {
  return (
    <div className="flex gap-4 justify-center">
      <div className="">
        <UserSidebar />
      </div>
      <div className="flex flex-col items-center md:items-start w-11/12 md:w-[100%]">
        <UserEditAddress />
      </div>
    </div>
  );
};

export default UserEditAddressPage;
