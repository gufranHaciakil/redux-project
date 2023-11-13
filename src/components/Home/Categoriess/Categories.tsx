import Container from "components/SharedComponents/Container";
import CategoriesComponent from "./CategoriesComponent";
import SupTask from "components/SharedComponents/SupTask";

type Props = {};

function Categories(props: Props) {
  return (
    <div className="mt-10">
      <div className=" ">
        <SupTask
          title={"Categories"}
          btnTitle={"more"}
          btnLink={"/allCategories"}
        />
        <Container>
          <CategoriesComponent
            src={require("../../../img/Dress1.png")}
            title={"Women Dress"}
          />
          <CategoriesComponent
            src={require("../../../img/Dress1.png")}
            title={"Electronic Devices"}
          />
          <CategoriesComponent
            src={require("../../../img/Dress1.png")}
            title={"Electronic Devices"}
          />
          <CategoriesComponent
            src={require("../../../img/Dress1.png")}
            title={"Electronic Devices"}
          />
          <CategoriesComponent
            src={require("../../../img/Dress1.png")}
            title={"Electronic Devices"}
          />
          <CategoriesComponent
            src={require("../../../img/Dress1.png")}
            title={"Electronic Devices"}
          />
          <CategoriesComponent
            src={require("../../../img/Dress1.png")}
            title={"Electronic Devices"}
          />
        </Container>
      </div>
    </div>
  );
}

export default Categories;
