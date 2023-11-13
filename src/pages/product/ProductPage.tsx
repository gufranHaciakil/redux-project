import AllProduct from "components/Product/AllProduct";
import SubNav from "pages/product/Navbar/SubNav";

type Props = {};

const ProductPage = (props: Props) => {

  return (
    <div className="animate-formAnimation">
      <SubNav />
      <AllProduct />
    </div>
  );
};

export default ProductPage;
