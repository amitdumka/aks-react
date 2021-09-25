import React from "react";
import { SubMenuItemActive } from "./SubMenuItemActive";


export function SubMegaMenu({ label, url, menuList }) {
  ////console.log(menuList);
  return (
    <>
      <li className="menu-item ">
        <h3 className="menu-heading menu-toggle">
          <i className="menu-bullet menu-bullet-dot">
            <span></span>
          </i>
          <span className="menu-text">{label}</span>
          <i className="menu-arrow"></i>
        </h3>
        <ul className="menu-inner">
          {/*begin::3 Level*/}
          {menuList && menuList.length > 0 ? (
            menuList.map((item) => <SubMenuItemActive menu={item} />)
          ) : (
            <></>
          )}
          {/*end::3 Level*/}
        </ul>
      </li>
    </>
  );
}
