import React from "react";
import { useLocation } from "react-router";
import { checkIsActive } from "../../_aks/_helpers";
import { SubMenuItem } from "./SubMenuItem";

export function SubMenuItemActive({ menu }) {
  const location = useLocation();
  const getMenuItemActive = (url) => {
    return checkIsActive(location, url) ? "menu-item-active" : "";
  };
  const { url, label, icon } = menu;
  return (
    <li className={`menu-item ${getMenuItemActive(url)}`}>
      {" "}
      <SubMenuItem url={url} label={label} icon={icon} />
    </li>
  );
}
