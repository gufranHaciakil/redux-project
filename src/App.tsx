import Home from "pages/Home/Home";
import "./App.css";
import Drawer from "components/SharedComponents/Drawer";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "pages/auth/LoginPage";
import SignPage from "pages/auth/SignupPage";
import AllCategories from "pages/all categories/AllCategories";
import ProductPage from "pages/product/ProductPage";
import CardPage from "pages/Card page/CardPage";
import ProdDetails from "pages/Product details/ProdDetails";
import NoPage from "pages/No page/NoPage";
import PaymentPage from "pages/Payment/PaymentPage";
import AdminAllptoductpage from "pages/Admin/AdminAllptoductpage";
import AdminAllOrderPage from "pages/Admin/AdminAllOrderPage";
import AdminAddBrandPage from "pages/Admin/AdminAddBrandPage";
import AdminAddCategoryPage from "pages/Admin/AdminAddCategoryPage";
import AdminAddSubCategoryPage from "pages/Admin/AdminAddSubCategoryPage";
import AdminAddProductPage from "pages/Admin/AdminAddProductPage";
import UserAllOrderPage from "pages/User/UserAllOrderPage";
import UserFavoriteProductPage from "pages/User/UserFavoriteProductPage";
import UserPersonalAddressPage from "pages/User/UserPersonalAddressPage";
import UserEditAddressPage from "pages/User/UserEditAddressPage";
import UserAddAddresPage from "pages/User/UserAddAddresPage";
import UserProfilePage from "pages/User/UserProfilePage";
import NavbarCom from "components/SharedComponents/NavbarCom";

import React from "react";

type Props = {};

const App = (props: Props) => {
  const [toRightDrawer, setToRightDrawer] = useState(false);
  const [drawerTranslate, setDrawerTranslate] = useState(true);
  return (
    <BrowserRouter>
      <NavbarCom
        setToRightDrawer={setToRightDrawer}
        toRightDrawer={toRightDrawer}
        setDrawerTranslate={setDrawerTranslate}
        drawerTranslate={drawerTranslate}
      />
      <Drawer
        toRightDrawer={toRightDrawer}
        setToRightDrawer={setToRightDrawer}
        drawerTranslate={drawerTranslate}
        setDrawerTranslate={setDrawerTranslate}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/redux-project" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignPage />} />
        <Route path="/allCategories" element={<AllCategories />} />
        <Route path="/allproduct" element={<ProductPage />} />
        <Route path="/card" element={<CardPage />} />
        <Route path="/productDetails/id" element={<ProdDetails />} />
        <Route path="/order/paymentpage" element={<PaymentPage />} />
        <Route path="/admin/allproduct" element={<AdminAllptoductpage />} />
        <Route path="/admin/allorder" element={<AdminAllOrderPage />} />
        <Route path="/admin/addbrand" element={<AdminAddBrandPage />} />
        <Route path="/admin/addcategory" element={<AdminAddCategoryPage />} />
        <Route
          path="/admin/addsubcategory"
          element={<AdminAddSubCategoryPage />}
        />
        <Route path="/admin/addproduct" element={<AdminAddProductPage />} />
        <Route path="*" element={<NoPage />} />

        <Route path="/user/allorder" element={<UserAllOrderPage />} />
        <Route
          path="/user/favoriteproduct"
          element={<UserFavoriteProductPage />}
        />
        <Route
          path="/user/personaladdress"
          element={<UserPersonalAddressPage />}
        />
        <Route path="/user/editaddress" element={<UserEditAddressPage />} />
        <Route path="/user/addaddres" element={<UserAddAddresPage />} />
        <Route path="/user/profile" element={<UserProfilePage />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default App;
