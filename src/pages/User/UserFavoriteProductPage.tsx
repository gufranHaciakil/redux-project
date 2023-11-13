import Product from "components/Home/HomeProduct/Product";
import UserSidebar from "components/User/UserSidebar";

type Props = {};

const UserFavoriteProductPage = (props: Props) => {
  return (
    <div className="flex gap-6">
      <div className="">
        <UserSidebar />
      </div>
      <div className="flex flex-col -ml-2 w-11/12">
        <h1 className="md:text-2xl text-xl w-fit mx-auto md:mx-1 font-semibold animate-formAnimation">
          Favorite Product
        </h1>
        <div className="animate-drawer flex gap-1 flex-wrap mt-6 justify-center ml-[-rem] pr-1 md:justify-start">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </div>
  );
};

export default UserFavoriteProductPage;
