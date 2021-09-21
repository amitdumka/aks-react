//export const StatusCssClasses = ["success","danger", "warning","info",""];
//export const StatusTitles = ["Present", "Absent", "HalfDay","Sunday" ,""];
//export const AccountTypeCssClasses = ["success", "primary", "danger","warning","info",""];
//export const AccountTypeTitles = ["Saving", "Current", "CC","OD","Other",""];
// Customize above lines of code based on your requirements. 


//TODO: Look for is it relvenatent in this context.

export const sizePerPageList = [
  { text: "5", value: 5 },
  { text: "7", value: 7 },
  { text: "10", value: 10 }
];
//TODO: Change based on your requirements. dataField should have main property name
export const defaultSorted = [{ dataField: "bankName", order: "asc" }];
//TODO: Change Below based on components 
export const initialFilter = {
  filter: {
    account: "",
    branchName: "",
    bankName: "",
    accountType: ""
  },
  sortOrder: "asc", // asc||desc
  sortField: "id",
  pageNumber: 1,
  pageSize: 10
};


//TODO: All data model need to change here and nothing else.
export const initDataModel = {
  rentId: 0,
  rentedLocationId: 0,
  location: null,
  rentType: 0,
  onDate: new Date(),
  period: "",
  amount: 0.0,
  mode: 0,
  paymentDetails: "",
  remarks: "",
  storeId: 1,
  store: null,
  userId: "WebUI",
  entryStatus: 0,
  isReadOnly: false,
};