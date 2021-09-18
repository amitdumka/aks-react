import React from "react";
import { MenuItem } from "./MenuItem";
import { MenuSection } from "./MenuSection";


export function MenuGroup({ groupName, menuItems, getMenuItemActive }) {
    return (
        <>
            <MenuSection label={groupName} />
            {menuItems && menuItems.length > 0 ? (
                menuItems.map((mItem) => (
                    <MenuItem
                        key={mItem.id}
                        getMenuItemActive={getMenuItemActive}
                        headerUrl={mItem.headerMenuUrl}
                        headerLabel={mItem.headerMenuLabel}
                        hasChild={mItem.hasChild}
                        icon={mItem.icon}
                        subMenuItems={mItem.subMenuList} />
                ))
            ) : (
                <>No Menu Found</>
            )}
        </>
    );
}
