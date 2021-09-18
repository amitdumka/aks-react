import React from "react";
import { NavLink } from "react-router-dom";


export function MenuLevelThree({ getMenuItemActive, subMenuItems }) {
    console.log(subMenuItems.length);
    return (
        <>
            {/*begin::3 Level*/}
            {subMenuItems && (
                <li
                    className={`menu-item ${getMenuItemActive(
                        subMenuItems && subMenuItems.url
                    )}`}
                    aria-haspopup="true"
                >
                    <NavLink className="menu-link" to="/google-material/surfaces/app-bar">
                        <i className="menu-bullet menu-bullet-dot">
                            <span />
                        </i>
                        <span className="menu-text">
                            {subMenuItems && subMenuItems.label}
                        </span>
                    </NavLink>
                </li>
            )}
            {/*end::3 Level*/}
        </>
    );
}
