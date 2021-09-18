import React from "react";
import ClassicMenuItem from "../_headerMenu/ClassicMenuItem";
const menuList=[
    {
    id: 1,
    subMenuHeader: "Invoice",
    subMenuUrl: "/sale/invoice",
    enabled: false,
    icon: "/media/svg/icons/Design/PenAndRuller.svg",
    hasChild: false,
    subMenuList: [{ id: 1, label: "", url: "", icon: "" }],
  },
  
  {
    id: 2,
    subMenuHeader: "Online Sales",
    subMenuUrl: "/sale/invoice",
    enabled: false,
    icon: "/media/svg/icons/Design/PenAndRuller.svg",
    hasChild: false,
    subMenuList: [{ id: 1, label: "", url: "", icon: "" }],
  },
  {
    id: 3,
    subMenuHeader: "Daily Sales",
    subMenuUrl: "/sale/invoice",
    enabled: true,
    icon: "/media/svg/icons/Design/PenAndRuller.svg",
    hasChild: false,
    subMenuList: [{ id: 1, label: "", url: "", icon: "" }],
  },
  {
    id: 1,
    subMenuHeader: "Reports",
    subMenuUrl: "/sale/dailysales",
    enabled: false,
    icon: "/media/svg/icons/Design/PenAndRuller.svg",
    hasChild: false,
    subMenuList: [{ id: 1, label: "", url: "", icon: "" }],
  },
];


export default function SalesMenu({ layoutProps }) {
  return (
    <>
      <ClassicMenuItem
        headerLabel="Sales"
        headerUrl="/sales"
        menuList={menuList}
        layoutProps={layoutProps}
      />
    </>
  );
}
