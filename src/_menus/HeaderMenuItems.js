/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
// import { useLocation } from "react-router";
// import { NavLink } from "react-router-dom";
// import SVG from "react-inlinesvg";
// import { toAbsoluteUrl, checkIsActive } from "../_aks/_helpers";
import PayrollMenu from "./HeaderMenu/PayrollMenu";
import PurchaseMenu from "./HeaderMenu/PurchaseMenu";
import StoreMenu from "./HeaderMenu/StoreMenu";
import AccountingMenu from "./HeaderMenu/AccountingMenu";
import SalesMenu from "./HeaderMenu/SalesMenu";

export default function HeaderMenuItems({ layoutProps }) {
  // const location = useLocation();
  // const getMenuItemActive = (url) => {
  //   return checkIsActive(location, url) ? "menu-item-active" : "";
  // };

  return (
    <>
      <AccountingMenu layoutProps={ layoutProps}/>
      <PayrollMenu layoutProps={layoutProps} />
      <SalesMenu layoutProps={ layoutProps}/>
      <PurchaseMenu layoutProps={ layoutProps}/>
      <StoreMenu layoutProps={ layoutProps}/>
    </>
  );
}
