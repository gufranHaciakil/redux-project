import UserPersonalAddress from "components/User/UserPersonalAddress";
import UserSidebar from "components/User/UserSidebar";

type Props = {};

const UserPersonalAddressPage = (props: Props) => {
  return (
    <div className="flex gap-3">
      <div className="">
        <UserSidebar />
      </div>
      <div className="flex flex-col items-center ml-4 md:items-start sm:w-full md:ml-0 md:w-[30rem]">
        <UserPersonalAddress />
      </div>
    </div>
  );
};

export default UserPersonalAddressPage;
