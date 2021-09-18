/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl, checkIsActive } from "../_aks/_helpers";
import {
  TestIcon,
} from "./_asideMenu/asideMenu";
import { MenuSection } from "./_asideMenu/MenuSection";
import { AsideMenuLevelOne } from "./_asideMenu/AsideMenuLevelOne";
import asideMenu from "./_asideMenu/EStroreAsideMenu";
import EStroreAsideMenu from "./_asideMenu/EStroreAsideMenu";

export function AsideMenuItems({ layoutProps }) {
  const location = useLocation();
  const getMenuItemActive = (url, hasSubmenu = false) => {
    return checkIsActive(location, url)
      ? ` ${!hasSubmenu &&
          "menu-item-active"} menu-item-open menu-item-not-hightlighted`
      : "";
  };

  return (
    <>
      <EStroreAsideMenu
        layoutProps={layoutProps}
        getMenuItemActive={getMenuItemActive}
      />
      {/* begin::Menu Nav */}
      {/* <ul className={`menu-nav ${layoutProps.ulClasses}`}>
        <AsideMenuLevelOne
          label="Layout Builder"
          url="/builder"
          icon={TestIcon}
        />

        <MenuSection label="Services" />
        <MenuSection label="Reports" />

        <MenuSection label="Components" />
      </ul> */}

      {/* end::Menu Nav */}
    </>
  );
}
