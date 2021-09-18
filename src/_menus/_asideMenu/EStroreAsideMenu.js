import React from "react";
import { ReportMenuList, TailoringMenuList } from "../AsideMenu/menuList";
import { TestIcon } from "./asideMenu";
import { AsideMenuLevelOne } from "./AsideMenuLevelOne";
import { MenuGroup } from "./MenuGroup";

export default function EStroreAsideMenu({ layoutProps, getMenuItemActive }) {
  return (
    <>
      {/* begin::Menu Nav */}
      <ul className={`menu-nav ${layoutProps.ulClasses}`}>
        <AsideMenuLevelOne
          label="Layout Builder"
          url="/builder"
          icon={TestIcon}
        />
        {/*end::1 Level*/}

        <MenuGroup
          groupName="Services"
          menuItems={TailoringMenuList}
          getMenuItemActive={getMenuItemActive}
        />

        <MenuGroup
          groupName="Reports"
          menuItems={ReportMenuList}
          getMenuItemActive={getMenuItemActive}
        />
      </ul>
      {/* end::Menu Nav */}
    </>
  );
}
