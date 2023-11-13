import React from "react";
import UserAllOrderItem from "./UserAllOrderItem";

type Props = {};

const UserAllOrder = (props: Props) => {
  return (
    <>
      <h1 className="text-3xl font-semibold animate-formAnimation mb-3">
        {" "}
        Welcome Gufran.{" "}
      </h1>
      <div className="animate-drawer ml-[-2.5rem] sm:w-[33rem] md:ml-0 w-[23rem] md:w-3/4">
        <UserAllOrderItem />
        <UserAllOrderItem />
      </div>
    </>
  );
};

export default UserAllOrder;
