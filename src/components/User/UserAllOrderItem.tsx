import React from "react";
import UserAllOrderItemCard from "./UserAllOrderItemCard";

type Props = {};

const UserAllOrderItem = (props: Props) => {
  return (
    <div className="bg-zinc-50 pl-3 py-1 mb-8 ">
      <p className="text-sm text-gray-400 mb-2">Order Number #2354</p>
      <UserAllOrderItemCard />
      <UserAllOrderItemCard />
    </div>
  );
};

export default UserAllOrderItem;
