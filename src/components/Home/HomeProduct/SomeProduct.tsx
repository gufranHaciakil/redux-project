import SupTask from "components/SharedComponents/SupTask";
import Product from "./Product";

type Props = {};

function SomeProduct(props: Props) {
  return (
    <div className="mt-10">
      <SupTask title={"Best seller"} btnTitle={"more"} btnLink={"allproduct"} />
      <div className="flex flex-wrap gap-2 justify-center mt-10 px-4">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}

export default SomeProduct;
