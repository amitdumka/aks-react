import React from "react";
import { useLocation } from "react-router";
import { checkIsActive } from "../../_aks/_helpers";
import { SubMenuItem } from "./SubMenuItem";
import { SubMenuItemActive } from "./SubMenuItemActive";

export function SubMenuWithChildActive({ url, label, icon, subMenuList, hasChild }) {
  const location = useLocation();
  const getMenuItemActive = (url) => {
    return checkIsActive(location, url) ? "menu-item-active" : "";
  };
  //console.log(subMenuList);
  let arrow = hasChild;

  return (
    <li
      className={`menu-item menu-item-submenu ${getMenuItemActive(url)}`}
      data-menu-toggle="hover"
      aria-haspopup="true"
    >
      <SubMenuItem label={label} url={url} icon={icon} arrow={arrow} />
      {subMenuList && hasChild ? (
        <div className={`menu-submenu menu-submenu-classic menu-submenu-right`}>
          <ul className="menu-subnav">
            {/*begin::3 Level*/}
            {subMenuList && subMenuList.length > 0 ? (
              subMenuList.map((subMenuItem) => (
                <SubMenuItemActive menu={subMenuItem} key={subMenuItem.id} />
              ))
            ) : (
              <></>
            )}
            {/*end::3 Level*/}
          </ul>
        </div>
      ) : (
        <></>
      )}
    </li>
  );
}
