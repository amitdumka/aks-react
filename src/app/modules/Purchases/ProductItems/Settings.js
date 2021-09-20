//Setting.js
// This is setting and configuration file for creating Modules component.
// All Changes are need to made here so it will be reflected at whole module component level.
import {
  sortCaret,
  headerSortingClasses,
} from "../../../../../_aks/_helpers";
import * as columnFormatters from "./column-formatters";
import * as Yup from "yup";

//TODO: TODO List : List of Item need to be update on setting and pages baisc. It should be well writtern so next time it will be familiar with
//easy to write it. forwardRef

//TODO: ComponentName:
//TODO: InitialDataModel
//TODO: Table Cols.
//TODO: All Kind of message  in all dialogs and headers
//TODO: Adjust filter values and function to handle or imolements.,
//TODO: Need to Handle UIPros so this can be handle properly.
const uiProps = {};

//Data Model need to be defined here for module component
const ComponentName = "Product Item";
export const initDataModel = {
  productItemId: 0,
  storeId: 1,
  store: null,
  userId: "WebUI",
  entryStatus: 0,
  isReadOnly: false,
};

const EditSchema = Yup.object().shape({
  onDate: Yup.date().required("Date is required"),
  period: Yup.string().required("Period is required"),
  rentType: Yup.number().required("Select Rent Type , is required"),
  rentedLocationId: Yup.number()
    .moreThan(0)
    .required("Select Rent Location , is required"),
  mode: Yup.number().required("Select mode is required"),
  amount: Yup.number()
    .moreThan(0)
    .required("Amount is required"),
  remarks: Yup.string().required("Remarks is required"),
  paymentDetails: Yup.string().required("Payment Details is required"),
});

export const columns = [
  {
    dataField: "productItemId",
    text: "ID",
    sort: true,
    sortCaret: sortCaret,
    headerSortingClasses,
  },
  {
    dataField: "productName",
    text: "Name",
    sort: true,
    sortCaret: sortCaret,
    headerSortingClasses,
  },
  {
    dataField: "barCode",
    text: "Barcode",
    sort: true,
    sortCaret: sortCaret,
    headerSortingClasses,
  },
  {
    dataField: "onDate",
    text: "Date",
    sort: true,
    sortCaret: sortCaret,
    headerSortingClasses,
  },
  {
    dataField: "period",
    text: "Period",
    sort: false,

    sortCaret: sortCaret,
  },
  {
    dataField: "amount",
    text: "Amount",
    sort: true,
    sortCaret: sortCaret,
    headerSortingClasses,
  },
  {
    dataField: "mode",
    text: "Mode",
    sort: true,
    //formatter:columnFormatters.TypeColumnFormatter,
    sortCaret: sortCaret,
    headerSortingClasses,
  },
  {
    dataField: "paymentDetails",
    text: "Payment Details",
    sort: true,
    sortCaret: sortCaret,
    headerSortingClasses,
  },
  {
    dataField: "remarks",
    text: "Remarks",
    sort: false,
    //formatter:columnFormatters.TypeColumnFormatter,
    sortCaret: sortCaret,
  },
  {
    dataField: "action",
    text: "Actions",
    formatter: columnFormatters.ActionsColumnFormatter,
    formatExtraData: {
      openEditDialog: uiProps.openEditDialog,
      openDeleteDialog: uiProps.openDeleteDialog,
    },
    classes: "text-right pr-0",
    headerClasses: "text-right pr-3",
    style: {
      minWidth: "100px",
    },
  },
];

export const Settings = {
  componentName: ComponentName,
  defaultSorted: "productName",
  filter: { productName: "", barcode: "",  },
  basePath: "/purchase",
  comPath: "/purchase/productItems",
  tableSettings: {
    // Table columns
    columns: columns,
    keyField: "barcode",
    noDataIndication: "No Record Found now..",
  },
  actionColSetting: {
    editTitle: "Edit Product Item",
    deleteTitle: "Delete Product Item",
    id: "barcode",
  },
  baseFilter: {
    initialValues: { status: "", type: "", searchText: "" },
    status: {
      name: "status",
      placeholder: "Filter by status",
      options: [
        { label: "All", value: "" },
        { label: "Suspended", value: "0" },
        { label: "Active", value: "1" },
        { label: "Pending", value: "2" },
      ],
      label: " <b>Filter</b> by Status",
    },
    type: {
      name: "type",
      placeholder: "Filter by type",
      options: [
        { label: "All", value: "" },
        { label: "Business", value: "0" },
        { label: "Individual", value: "1" },
      ],
      label: "<b>Filter</b> by Type",
    },
    searchText: {
      name: "SearchText",
      placeholder: "Search",
      label: "<b>Search</b> in all fields",
    },
  },
  deleteSetting: {
    title: "Product Item Delete",
    deleteMessage: "Are you sure to permanently delete this Product Item ?",
    loadingMessage: "Product Item  is deleting...",
    deletesMessage: "Are you sure to permanently delete selected Product Item ?",
  },
  headerSetting: {
    title: " Product Item Payment",
    editColumnData: "",
  },
  editSchema: EditSchema,
}; //end of Settings



