import React from "react";
import SVG from "react-inlinesvg";
import { NavLink } from "react-router-dom";
import { toAbsoluteUrl } from "../../_aks/_helpers";
import { MenuLevelTwo } from "./MenuLevelTwo";


export function MenuItem({
    key, headerLabel, headerUrl, icon, getMenuItemActive, hasChild, subMenuItems
}) {
    return (
        <>
            {/* Material-UI */}
            {/*begin::1 Level*/}
            <li
                className={`menu-item menu-item-submenu ${getMenuItemActive(
                    headerUrl,
                    true
                )}`}
                aria-haspopup="true"
                data-menu-toggle="hover"
            >
                <NavLink className="menu-link menu-toggle" to={headerUrl}>
                    <span className="svg-icon menu-icon">
                        <SVG src={toAbsoluteUrl(icon)} />
                    </span>
                    <span className="menu-text">{headerLabel}</span>
                    {hasChild && <i className="menu-arrow" />}
                </NavLink>
                <div className="menu-submenu ">
                    <i className="menu-arrow" />
                    <ul className="menu-subnav">
                        <li className="menu-item  menu-item-parent" aria-haspopup="true">
                            <span className="menu-link">
                                <span className="menu-text">{headerLabel}</span>
                            </span>
                        </li>

                        {/* Looping Second Level Menu */}
                        {subMenuItems && subMenuItems.length > 0 &&
                            subMenuItems.map((mItem) => <MenuLevelTwo label={mItem.label} url={mItem.url} icon={mItem.icon} hasChild={mItem.hasChild}
                                getMenuItemActive={getMenuItemActive} subMenuItems={mItem.subMenuList} />
                            )}
                    </ul>
                </div>
            </li>
            {/*end::1 Level*/}
        </>
    );
}
