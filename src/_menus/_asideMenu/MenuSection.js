import React from "react";


export function MenuSection({ label, icon, url }) {
    return (
        <>
            <li className="menu-section ">
                <h4 className="menu-text">{label}</h4>
                <i className="menu-icon flaticon-more-v2"></i>
            </li>
        </>
    );
}
