import UserProfile from "components/User/UserProfile";
import UserSidebar from "components/User/UserSidebar";
import React from "react";

type Props = {};

const UserProfilePage = (props: Props) => {
  return (
    <div className="flex gap-3">
      <div className="">
        <UserSidebar />
      </div>
      <div className="flex flex-col md:w-[70%]">
        <UserProfile />
      </div>
    </div>
  );
};

export default UserProfilePage;
