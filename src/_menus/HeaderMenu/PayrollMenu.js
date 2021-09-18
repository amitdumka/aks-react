import React from "react";
import ClassicMenuItem from "../_headerMenu/ClassicMenuItem";
//MenuList Format
const menuList = [
  {
    id: 1,
    subMenuHeader: "Employees",
    subMenuUrl: "/payroll/employee",
    enabled: true,
    icon: "/media/svg/icons/Design/PenAndRuller.svg",
    hasChild: true,
    subMenuList: [
      { id: 1, label: "Employees", url: "/payroll/employees", icon: "" },
      { id: 2, label: "Attendance", url: "/payroll/attendances", icon: "" },
      { id: 3, label: "Salary", url: "/payroll/salary", icon: "" },
      { id: 4, label: "Welfare", url: "/payroll/welfare", icon: "" },
    ],
  },
  {
    id: 2,
    subMenuHeader: "Salary",
    subMenuUrl: "/payroll/salary",
    enabled: true,
    icon: "/media/svg/icons/Design/PenAndRuller.svg",
    hasChild: true,
    subMenuList: [
      { id: 1, label: "PaySlip", url: "/payroll/salary/payslips", icon: "" },
      { id: 2, label: "Leave", url: "/payroll/salary/leaves", icon: "" },
      {
        id: 3,
        label: "Current Salary",
        url: "/payroll/salary/currentSalary",
        icon: "",
      },
      { id: 4, label: "Receipts", url: "/payroll/salary/receipts", icon: "" },
    ],
  },
  {
    id: 3,
    subMenuHeader: "Leave Management",
    subMenuUrl: "/payroll/leave",
    enabled: false,
    icon: "/media/svg/icons/Design/PenAndRuller.svg",
    hasChild: false,
    subMenuList: [{ id: 1, label: "", url: "", icon: "" }],
  },
  {
    id: 4,
    subMenuHeader: "Report",
    subMenuUrl: "/payroll/report",
    enabled: false,
    icon: "/media/svg/icons/Design/PenAndRuller.svg",
    hasChild: false,
    subMenuList: [{ id: 1, label: "", url: "", icon: "" }],
  },
  {
    id: 5,
    subMenuHeader: "Export Data",
    subMenuUrl: "/payroll/export",
    enabled: false,
    icon: "/media/svg/icons/Design/PenAndRuller.svg",
    hasChild: false,
    subMenuList: [{ id: 1, label: "", url: "", icon: "" }],
  },
  {
    id: 6,
    subMenuHeader: "Util",
    subMenuUrl: "/payroll/util",
    enabled: false,
    icon: "/media/svg/icons/Design/PenAndRuller.svg",
    hasChild: false,
    subMenuList: [{ id: 1, label: "", url: "", icon: "" }],
  },
];

export default function PayrollMenu({ layoutProps }) {
  return (
    <>
      <ClassicMenuItem
        headerLabel="Payrolls"
        headerUrl="/payroll"
        menuList={menuList}
        layoutProps={layoutProps}
      />
    </>
  );
}
