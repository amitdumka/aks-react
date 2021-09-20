/**
 * FileName: menuItemList.js
 * Descriptions: List of all Menu in this app
 * Author: Amit Kumar(AKS Labs India)
 * Date: 4/Sept/2021
 * Copyright: Protected, No Copy or use of code is allowed in any form. All rights are with Amit Kumar.
 */

 export const PayrollMenuList = [
    { label: "Employee", url: "/payroll/employee/employees" },
    { label: "Attendance", url: "/payroll/employee/attendances" },
    { label: "Salary", url: "/payroll/employee/salaryPayments" },
    { label: "Welfare", url: "/payroll/employee/welfares" },
  
    { label: "PaySlip", url: "/payroll/salary/payslips" },
    { label: "Current Salary", url: "/payroll/salary/salries" },
    { label: "Reciepts", url: "/payroll/salary/reciepts" },
    { label: "Leave", url: "/payroll/salary/leavess" },
  ];
  
  export const AccountingMenuList = [
    { label: "Payment", url: "/accounting/expense/payment" },
    { label: "Cash Payment", url: "/accounting/expense/cashPayment" },
    { label: "Expenses", url: "/accounting/expense/expenses" },
    { label: "Reciepts", url: "/accounting/receipt/receipts" },
    { label: "Cash Reciepts", url: "/accounting/receipt/cashreceipts" },
  
    { label: "Electricity Payment", url: "/accounting/expense/payment" },
    { label: "Rent", url: "/accounting/expense/payment" },
    { label: "Dues Recovery", url: "/accounting/expense/payment" },
  ];
  
  export const BankingMenuList = [
    { label: "Bank", url: "/bankingsbanks" },
    { label: "Account", url: "/bankingsbanks" },
    { label: "Deposit", url: "/bankingsbanks" },
    { label: "Withdrawal", url: "/bankingsbanks" },
    { label: "Cheque Log", url: "/bankingsbanks" },
    { label: "Cheque Issuses", url: "/bankingsbanks" },
    { label: "Bank Account", url: "/bankingsbanks" },
    { label: "Account Security", url: "/bankingsbanks" },
  ];
  
  export const LedgerMenuList = [
    { label: "Party", url: "/bankingsbanks" },
    { label: "Ledger Type", url: "/bankingsbanks" },
    { label: "Leger Master", url: "/bankingsbanks" },
    { label: "Entries", url: "/bankingsbanks" },
  ];
  
  export const BasicAccountMenuList=[
      {label:"Taxes",url:"/bankingsbanks"},
      {label:"Rent Location",url:"/bankingsbanks"},
      {label:"Electric Connection",url:"/bankingsbanks"},
      {label:"Electricity Bills",url:"/bankingsbanks"},
      {label:"Transaction Types",url:"/bankingsbanks"},
      {label:"Due List",url:"/bankingsbanks"},
      
  ];
  
  
  export const SaleMenuList=[
      {label:"Bank",url:"/bankingsbanks"},
      {label:"Bank",url:"/bankingsbanks"},
      {label:"Bank",url:"/bankingsbanks"},
      {label:"Bank",url:"/bankingsbanks"},
      {label:"Bank",url:"/bankingsbanks"},
          
  ];
  export const OnlineSaleMenuList = [
      {label:"Bank",url:"/bankingsbanks"},
      {label:"Bank",url:"/bankingsbanks"},
      {label:"Bank",url:"/bankingsbanks"},
      {label:"Bank",url:"/bankingsbanks"},
      
  ];
  export const SaleReportMenuList=[
      {label:"Bank",url:"/bankingsbanks"},
      {label:"Bank",url:"/bankingsbanks"},
      {label:"Bank",url:"/bankingsbanks"},
      {label:"Bank",url:"/bankingsbanks"},
      {label:"Bank",url:"/bankingsbanks"},
      {label:"Bank",url:"/bankingsbanks"}
  ];
  
  
  export const StoreMenuList = [
      {label:"Daily Operations",url:"/bankingsbanks"},
      {label:"Day End Processing",url:"/bankingsbanks"},
      {label:"Day End",url:"/bankingsbanks"},
      {label:"Month End",url:"/bankingsbanks"},   
  ];
  export const AdminMenuList = [
      {label:"Daily Operations",url:"/bankingsbanks"},
      {label:"Day End Processing",url:"/bankingsbanks"},
      {label:"Day End",url:"/bankingsbanks"},
      {label:"Month End",url:"/bankingsbanks"},   
  ];
  
  export const PurchaseMenuList = [
      {label:"Vendor",url:"/bankingsbanks"},
      {label:"Purchase",url:"/bankingsbanks"},
      {label:"Inwards",url:"/bankingsbanks"},
      {label:"Purchase Return",url:"/bankingsbanks"},   
  ];
  
  //Sub Menu List will be Above this line and Main Menu Bellow This line
  //Menu System  Base Menu
  
  export const Sale_MainMenuList={
      DailySale:{label:"Daily Sale", url:"/sale/dailySales"},
      Sale:{SaleMenuList},
      OnlineSale:{OnlineSaleMenuList},
      Report:{SaleReportMenuList}
  };
  
  
  