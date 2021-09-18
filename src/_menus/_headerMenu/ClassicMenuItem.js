import React from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import { checkIsActive } from "../../_aks/_helpers";
import { SubMenuWithChildActive } from "./SubMenuWithChildActive";

export default function ClassicMenuItem({
  headerLabel,
  headerUrl,
  menuList,
  layoutProps,
}) {
  const location = useLocation();
  const getMenuItemActive = (url) => {
    return checkIsActive(location, url) ? "menu-item-active" : "";
  };
  if (menuList !== null && menuList.length > 0)
    return (
      <>
        {/*begin::1 Level*/}
        <li
          data-menu-toggle={layoutProps.menuDesktopToggle}
          aria-haspopup="true"
          className={`menu-item menu-item-submenu menu-item-rel ${getMenuItemActive(
            headerUrl
          )}`}
        >
          <NavLink className="menu-link menu-toggle" to="/google-material">
            <span className="menu-text">{headerLabel}</span>
            <i className="menu-arrow"></i>
          </NavLink>
          <div className="menu-submenu menu-submenu-classic menu-submenu-left">
            <ul className="menu-subnav">
              {/*begin::2 Level*/}
              {menuList &&
                menuList.map((menuItem) => (
                  <SubMenuWithChildActive
                    key={menuItem.id}
                    subMenuList={menuItem.subMenuList}
                    label={menuItem.subMenuHeader}
                    url={menuItem.subMenuUrl}
                    icon={menuItem.icon && menuItem.icon}
                    hasChild={menuItem.hasChild}
                  />
                ))}
              {/*end::2 Level*/}
            </ul>
          </div>
        </li>
        {/*end::1 Level*/}
      </>
    );
  else {
    return (
      <>
        <li
          data-menu-toggle={layoutProps.menuDesktopToggle}
          aria-haspopup="true"
          className={`menu-item menu-item-submenu menu-item-rel ${getMenuItemActive(
            headerUrl
          )}`}
        >
          <NavLink className="menu-link menu-toggle" to="/google-material">
            <span className="menu-text">{headerLabel}</span>
            <i className="menu-arrow"></i>
          </NavLink>
        </li>
      </>
    );
  }
}


