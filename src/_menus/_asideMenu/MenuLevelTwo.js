import React from "react";
import { NavLink } from "react-router-dom";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../_aks/_helpers";
import { MenuLevelThree } from "./MenuLevelThree";


export function MenuLevelTwo({
    getMenuItemActive, label, url, icon, hasChild, subMenuItems,
}) {
    //console.log(subMenuItems);
    //console.log(label);
    return (
        <>
            {/* Surfaces */}
            {/*begin::2 Level*/}
            <li
                className={`menu-item menu-item-submenu ${getMenuItemActive(
                    url,
                    true
                )}`}
                aria-haspopup="true"
                data-menu-toggle="hover"
            >
                <NavLink className="menu-link menu-toggle" to={url}>
                    {icon && icon.length > 0 ? (
                        <span className="svg-icon menu-icon">
                            <SVG src={toAbsoluteUrl(icon)} />
                        </span>
                    ) : (
                        <i className="menu-bullet menu-bullet-dot">
                            <span />
                        </i>
                    )}
                    <span className="menu-text">{label}</span>
                    {hasChild && <i className="menu-arrow" />}
                </NavLink>
                <div className="menu-submenu">
                    <i className="menu-arrow" />
                    <ul className="menu-subnav">
                        {subMenuItems &&
                            subMenuItems.length > 0 ?
                            subMenuItems.map((mItem) => (
                                <MenuLevelThree
                                    getMenuItemActive={getMenuItemActive}
                                    subMenuItems={mItem} />
                            )) : <></>}
                    </ul>
                </div>
            </li>
            {/*end::2 Level*/}
        </>
    );
}
