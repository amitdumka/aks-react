import React from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import { checkIsActive } from "../../_aks/_helpers";
import { SubMegaMenu } from "./SubMegaMenu";

export default function MegaMenuItem({
  headerLabel,
  headerUrl,
  menuList,
  layoutProps,
}) {
  const location = useLocation();
  const getMenuItemActive = (url) => {
    return checkIsActive(location, url) ? "menu-item-active" : "";
  };
  ////console.log(menuList);
  return (
    <>
      {/*Mega submenu*/}
      {/*begin::1 Level*/}
      <li
        className={`menu-item menu-item-submenu menu-item-rel ${getMenuItemActive(
          headerUrl
        )}`}
        data-menu-toggle={layoutProps.menuDesktopToggle}
        aria-haspopup="true"
      >
        <NavLink className="menu-link menu-toggle" to={headerUrl}>
          <span className="menu-text">{headerLabel}</span>
          <i className="menu-arrow"></i>
        </NavLink>
        <div
          className="menu-submenu menu-submenu-fixed menu-submenu-left"
          style={{ width: "1000px" }}
        >
          <div className="menu-subnav">
            <ul className="menu-content">
              {/* <li className="menu-item "> */}
                {menuList && menuList.length > 0 ? (
                  menuList.map((mItem) => (
                    <SubMegaMenu
                      label={mItem.subMenuHeader}
                      menuList={mItem.subMenuList}
                    />
                  ))
                ) : (
                  <></>
                )}
              {/* </li> */}
            </ul>
          </div>
        </div>
      </li>
    </>
  );
}

const TestItem = () => {
  const location = useLocation();
  const getMenuItemActive = (url) => {
    return checkIsActive(location, url) ? "menu-item-active" : "";
  };
  return (
    <li className="menu-item ">
      <h3 className="menu-heading menu-toggle">
        <i className="menu-bullet menu-bullet-dot">
          <span></span>
        </i>
        <span className="menu-text">A ... C</span>
        <i className="menu-arrow"></i>
      </h3>
      <ul className="menu-inner">
        {/*begin::3 Level*/}
        <li
          className={`menu-item ${getMenuItemActive("/react-bootstrap/alert")}`}
        >
          <NavLink className="menu-link" to="/react-bootstrap/alert">
            <span className="menu-text">Alerts</span>
          </NavLink>
        </li>
        {/*end::3 Level*/}

        {/*begin::3 Level*/}
        <li
          className={`menu-item ${getMenuItemActive(
            "/react-bootstrap/accordion"
          )}`}
        >
          <NavLink className="menu-link" to="/react-bootstrap/accordion">
            <span className="menu-text">Accordion</span>
          </NavLink>
        </li>
        {/*end::3 Level*/}

        {/*begin::3 Level*/}
        <li
          className={`menu-item ${getMenuItemActive("/react-bootstrap/badge")}`}
        >
          <NavLink className="menu-link" to="/react-bootstrap/badge">
            <span className="menu-text">Badge</span>
          </NavLink>
        </li>
        {/*end::3 Level*/}

        {/*begin::3 Level*/}
        <li
          className={`menu-item ${getMenuItemActive(
            "/react-bootstrap/breadcrumb"
          )}`}
        >
          <NavLink className="menu-link" to="/react-bootstrap/breadcrumb">
            <span className="menu-text">Breadcrumb</span>
          </NavLink>
        </li>
        {/*end::3 Level*/}

        {/*begin::3 Level*/}
        <li
          className={`menu-item ${getMenuItemActive(
            "/react-bootstrap/buttons"
          )}`}
        >
          <NavLink className="menu-link" to="/react-bootstrap/buttons">
            <span className="menu-text">Buttons</span>
          </NavLink>
        </li>
        {/*end::3 Level*/}

        {/*begin::3 Level*/}
        <li
          className={`menu-item ${getMenuItemActive(
            "/react-bootstrap/button-group"
          )}`}
        >
          <NavLink className="menu-link" to="/react-bootstrap/button-group">
            <span className="menu-text">Button Group</span>
          </NavLink>
        </li>
        {/*end::3 Level*/}

        {/*begin::3 Level*/}
        <li
          className={`menu-item ${getMenuItemActive("/react-bootstrap/cards")}`}
        >
          <NavLink className="menu-link" to="/react-bootstrap/cards">
            <span className="menu-text">Cards</span>
          </NavLink>
        </li>
        {/*end::3 Level*/}
      </ul>
    </li>
  );
};
