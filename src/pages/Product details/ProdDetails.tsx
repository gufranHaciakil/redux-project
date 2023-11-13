import ProductDetailsCom from "components/Product details/ProductDetailsCom";
import SubNav from "pages/product/Navbar/SubNav";
import RatingsContainer from "components/Ratings/RatingsContainer";
import Product from "components/Home/HomeProduct/Product";
import SupTask from "components/SharedComponents/SupTask";

type Props = {};

function ProdDetails(prop: Props) {
  return (
    <div className="mt-16">
      <SubNav />
      <ProductDetailsCom />
      <RatingsContainer />
      <SupTask
        title={"Products you may like"}
        btnTitle={"more"}
        btnLink={"/allproduct"}
      />
      <div className="flex flex-wrap gap-2 px-4 justify-center mt-6">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}

export default ProdDetails;
