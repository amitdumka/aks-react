import React from "react";
import { NavLink } from "react-router-dom";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../_aks/_helpers";

export function SubMenuItem({ url, label, arrow, icon }) {
  let className = "menu-link ";
  ////console.log(icon);
  if (arrow != null && arrow) className += " menu-toggle";
  return (
    <NavLink className={className} to={url}>
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
      {arrow && <i className="menu-arrow" />}
    </NavLink>
  );
}
