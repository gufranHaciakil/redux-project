import Product from "components/Home/HomeProduct/Product";
import SubRightDrawer from "./SubRightDrawer";

type Props = {};

function AllProduct(props: Props) {
  return (
    <>
      <div className="flex justify-center md:justify-normal px-2 max-w-full">
        <div className="w-[75rem] h-fit mt-4 flex flex-wrap justify-center md:justify-start gap-2 md:gap-1 md:ml-8 ">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        
        </div>

        <div className="border-l-2 hidden md:block z-20 bg-inherit border-gray-300 ">
          <SubRightDrawer />{" "}
        </div>
      </div>
    </>
  );
}

export default AllProduct;
