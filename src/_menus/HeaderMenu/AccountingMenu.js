import React from 'react';
import MegaMenuItem from '../_headerMenu/MegaMenuItem';
const menuList=[
    {
    id: 1,
    subMenuHeader: "Payment/Receipt",
    subMenuUrl: "/sale/invoice",
    enabled: false,
    icon: "/media/svg/icons/Design/PenAndRuller.svg",
    hasChild: false,
    subMenuList: [{ id: 1, label: "Payment", url: "/account/expenses/payment", icon: "" },
    { id: 2, label: "Cash Payment", url: "/account/expenses/payment", icon: "" },
    { id: 3, label: "Expenses", url: "/account/expenses/payment", icon: "" },
    { id: 4, label: "Reciepts", url: "/account/expenses/payment", icon: "" },
    { id: 5, label: "Cash Reciepts", url: "/account/expenses/payment", icon: "" },
    { id: 6, label: "Eletricity Payments", url: "/account/expenses/payment", icon: "" },
    { id: 7, label: "Rent Payment", url: "/account/expenses/payment", icon: "" },
    { id: 8, label: "Dues Recovery", url: "/account/expenses/payment", icon: "" },
    ],
  },
  {
    id: 2,
    subMenuHeader: "Banking",
    subMenuUrl: "/sale/invoice",
    enabled: false,
    icon: "/media/svg/icons/Design/PenAndRuller.svg",
    hasChild: false,
    subMenuList: [{ id: 1, label: "Payment", url: "/account/expenses/payment", icon: "" },
    { id: 2, label: "Cash Payment", url: "/account/expenses/payment", icon: "" },
    { id: 3, label: "Expenses", url: "/account/expenses/payment", icon: "" },
    { id: 4, label: "Reciepts", url: "/account/expenses/payment", icon: "" },
    { id: 5, label: "Cash Reciepts", url: "/account/expenses/payment", icon: "" },
    { id: 6, label: "Eletricity Payments", url: "/account/expenses/payment", icon: "" },
    { id: 7, label: "Rent Payment", url: "/account/expenses/payment", icon: "" },
    { id: 8, label: "Dues Recovery", url: "/account/expenses/payment", icon: "" },
    ],
  },
  {
    id: 3,
    subMenuHeader: "Legder",
    subMenuUrl: "/sale/invoice",
    enabled: false,
    icon: "/media/svg/icons/Design/PenAndRuller.svg",
    hasChild: false,
    subMenuList: [{ id: 1, label: "Payment", url: "/account/expenses/payment", icon: "" },
    { id: 2, label: "Cash Payment", url: "/account/expenses/payment", icon: "" },
    { id: 3, label: "Expenses", url: "/account/expenses/payment", icon: "" },
    { id: 4, label: "Reciepts", url: "/account/expenses/payment", icon: "" },
    { id: 5, label: "Cash Reciepts", url: "/account/expenses/payment", icon: "" },
    { id: 6, label: "Eletricity Payments", url: "/account/expenses/payment", icon: "" },
    { id: 7, label: "Rent Payment", url: "/account/expenses/payment", icon: "" },
    { id: 8, label: "Dues Recovery", url: "/account/expenses/payment", icon: "" },
    ],
  },
  {
    id: 4,
    subMenuHeader: "Accounting",
    subMenuUrl: "/sale/invoice",
    enabled: false,
    icon: "/media/svg/icons/Design/PenAndRuller.svg",
    hasChild: false,
    subMenuList: [{ id: 1, label: "Payment", url: "/account/expenses/payment", icon: "" },
    { id: 2, label: "Cash Payment", url: "/account/expenses/payment", icon: "" },
    { id: 3, label: "Expenses", url: "/account/expenses/payment", icon: "" },
    { id: 4, label: "Reciepts", url: "/account/expenses/payment", icon: "" },
    { id: 5, label: "Cash Reciepts", url: "/account/expenses/payment", icon: "" },
    { id: 6, label: "Eletricity Payments", url: "/account/expenses/payment", icon: "" },
    { id: 7, label: "Rent Payment", url: "/account/expenses/payment", icon: "" },
    { id: 8, label: "Dues Recovery", url: "/account/expenses/payment", icon: "" },
    ],
  }
];


export default function AccountingMenu( {layoutProps }) {
    return (
        <>
       <MegaMenuItem
        headerLabel="Accounting"
        headerUrl="/accounting"
        menuList={menuList}
        layoutProps={layoutProps}
      />
        </>
    )
}
