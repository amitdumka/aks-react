import React from "react";
import ClassicMenuItem from "../_headerMenu/ClassicMenuItem";
const menuList=[{
    id: 1,
    subMenuHeader: "Invoice",
    subMenuUrl: "/sale/invoice",
    enabled: false,
    icon: "/media/svg/icons/Design/PenAndRuller.svg",
    hasChild: false,
    subMenuList: [{ id: 1, label: "", url: "", icon: "" }],
  },
];


export default function StoreMenu({ layoutProps }) {
  return (
    <>
      <ClassicMenuItem
        headerLabel="Stores"
        headerUrl="/store"
        menuList={menuList}
        layoutProps={layoutProps}
      />
    </>
  );
}
