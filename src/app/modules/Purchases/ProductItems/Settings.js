//Setting.js
// This is setting and configuration file for creating Modules component.
// All Changes are need to made here so it will be reflected at whole module component level.
import { sortCaret, headerSortingClasses } from "../../../../../_aks/_helpers";
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
  barcode: "",
  brandId: 0,
  brandName: null,
  styleCode: "",
  productName: "",
  itemDesc: "",
  categorys: 0,
  mainCategory: null,
  productCategory: null,
  productType: null,
  mrp: 0,
  taxRate: 0,
  cost: 0,
  hsnCode: "",
  size: 0,
  units: 0,
  purchaseItems: null,
};

export const EditSchema = Yup.object().shape({
  brandId: Yup.number().moreThan(0).required("Select Brand"),
  barcode: Yup.string().required("Barcode is required"),
  styleCode: Yup.string().required("Style Code is required"),
  productName: Yup.string().required("Product Name is required"),
  categorys: Yup.number().required("Select Catgegory is required"),
  mrp: Yup.number().moreThan(0).required("MRP is required"),
  taxRate: Yup.number().moreThan(0).required("Tax Rate is required"),
  cost: Yup.number().moreThan(0).required("Cost is required"),
  size: Yup.number().moreThan(0).required("Size is required"),
  unit: Yup.number().moreThan(0).required("Unit is required"),
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
    dataField: "barcode",
    text: "Barcode",
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
    dataField: "brandName",
    text: "Brand",
    sort: true,
    sortCaret: sortCaret,
    headerSortingClasses,
  },
  {
    dataField: "styleCode",
    text: "Sytle",
    sort: false,
    sortCaret: sortCaret,
    headerSortingClasses,
  },
  {
    dataField: "mrp",
    text: "MRP",
    sort: true,
    sortCaret: sortCaret,
    headerSortingClasses,
  },
  {
    dataField: "cost",
    text: "Cost",
    sort: true,
    //formatter:columnFormatters.TypeColumnFormatter,
    sortCaret: sortCaret,
    headerSortingClasses,
  },
  {
    dataField: "categorys",
    text: "Category",
    sort: true,
    sortCaret: sortCaret,
    headerSortingClasses,
  },
  {
    dataField: "mainCategory",
    text: "Product Type",
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
//Start of settings section
export const Settings = {
  componentName: ComponentName,
  defaultSorted: "productName",
  filter: { productName: "", barcode: "" ,styleCode:""},
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
        { label: "Shirting", value: "0" },
        { label: "Suiting", value: "1" },
        { label: "Ready-made", value: "2" },
        { label: "InnerWear", value: "3" },
      ],
      label: " <b>Filter</b> by Status",
    },
    type: {
      name: "type",
      placeholder: "Filter by type",
      options: [
        { label: "All", value: "" },
        { label: "Arvind Mills", value: "0" },
        { label: "Arvind RTW", value: "1" },
        { label: "USPA", value: "2" },
        { label: "FM", value: "3" },
        { label: "Arrow", value: "4" },
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
    title: ComponentName+" Delete",
    deleteMessage: `Are you sure to permanently delete this ${ComponentName}?`,
    loadingMessage: "Product Item  is deleting...",
    deletesMessage:
      `Are you sure to permanently delete selected ${ComponentName} ?`,
  },
  headerSetting: {
    title: " Product Item",
    editColumnData: "",
  },
  editSchema: EditSchema,
}; //end of Settings section
