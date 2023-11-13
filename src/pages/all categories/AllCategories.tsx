import CategoriesComponent from "components/Home/Categoriess/CategoriesComponent";
import Container from "components/SharedComponents/Container";
import Pagination from "components/SharedComponents/Pagination";
import SupTask from "components/SharedComponents/SupTask";

type Props = {};
//
function AllCategories(props: Props) {
  const arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  return (
    <div className="animate-formAnimation">
      <SupTask title={"Categories"} btnTitle={"back >"} btnLink={"/"} />
      <Container>
        {arr.map(() => {
          return (
            <CategoriesComponent
              src={require("../../img/Dress1.png")}
              title={"Electronic Devices"}
            />
          );
        })}
      </Container>
      <Pagination />
    </div>
  );
}

export default AllCategories;
