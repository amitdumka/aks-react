import React from "react";
import SVG from "react-inlinesvg";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import { checkIsActive, toAbsoluteUrl } from "../../_aks/_helpers";


export function AsideMenuLevelOne({ label, url, icon }) {
    const location = useLocation();
    const getMenuItemActive = (url, hasSubmenu = false) => {
        return checkIsActive(location, url)
            ? ` ${!hasSubmenu &&
            "menu-item-active"} menu-item-open menu-item-not-hightlighted`
            : "";
    };
    return (
        <>
            {/*begin::1 Level*/}
            <li
                className={`menu-item ${getMenuItemActive(url, false)}`}
                aria-haspopup="true"
            >
                <NavLink className="menu-link" to={url}>
                    <span className="svg-icon menu-icon">
                        <SVG src={toAbsoluteUrl(icon)} />
                    </span>
                    <span className="menu-text">{label}</span>
                </NavLink>
            </li>
            {/*end::1 Level*/}
        </>
    );
}
