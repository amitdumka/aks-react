// import React, { useMemo } from "react";
// import { Formik } from "formik";
// import { isEqual } from "lodash";
// import { useUIContext } from "../UIContext";
// //TODO: Make Select field value should be passed as parameter instead of hard coding. 
// // Filter Component and conditions should be passed as parameter instead of hard coding, so it will make proper use of modular approach.
// const BaseFilter={
//   initialValues:{status: "",type: "",searchText: "" },
//   status:{
//     name:"status",placeholder:"Filter by status",
//     options:[{label:"All",value:""},{label:"Suspended",value:"0"},{label:"Active",value:"1"},{label:"Pending",value:"2"}],
//     label:" <b>Filter</b> by Status"
//   },
//   type:{
//     name:"type",placeholder:"Filter by type",
//     options:[{label:"All",value:""},{label:"Business",value:"0"},{label:"Individual",value:"1"}],
//     label:"<b>Filter</b> by Type"
//   }, 
//   searchText:{
//     name:"SearchText",placeholder:"Search",label:"<b>Search</b> in all fields"
//   }

// };
// const prepareFilter = (queryParams, values) => {
//   const { status, type, searchText } = values;
//   const newQueryParams = { ...queryParams };
//   const filter = {};
//   // Filter by status
//   filter.status = status !== "" ? +status : undefined;
//   // Filter by type
//   filter.type = type !== "" ? +type : undefined;
//   // Filter by all fields
//   filter.lastName = searchText;

//   if (searchText) {
//     filter.firstName = searchText;
//     filter.email = searchText;
//     filter.ipAddress = searchText;
//   }
//   newQueryParams.filter = filter;
//   return newQueryParams;
// };
// export function Filter({ listLoading }) {
//   //  UI Context
//   const uiContext = useUIContext();
//   const uiProps = useMemo(() => {
//     return {
//       queryParams: uiContext.queryParams,
//       setQueryParams: uiContext.setQueryParams,
//     };
//   }, [uiContext]);
//   // queryParams, setQueryParams,
//   const applyFilter = (values) => {
//     const newQueryParams = prepareFilter(uiProps.queryParams, values);
//     if (!isEqual(newQueryParams, uiProps.queryParams)) {
//       newQueryParams.pageNumber = 1;
//       // update list by queryParams
//       uiProps.setQueryParams(newQueryParams);
//     }
//   };
//   return (
//     <>
//       <Formik initialValues={BaseFilter} onSubmit={(values) => {applyFilter(values); }}>
//         {({ values, handleSubmit, handleBlur, handleChange,setFieldValue, }) => (
//           <form onSubmit={handleSubmit} className="form form-label-right">
//             <div className="form-group row">
//               <div className="col-lg-2">
//                 <select
//                   className="form-control"
//                   name={BaseFilter.status.name}
//                   placeholder={BaseFilter.status.placeholder}
//                   // TODO: Change this code
//                   onChange={(e) => {
//                     setFieldValue(BaseFilter.status.name, e.target.value);
//                     handleSubmit();
//                   }}
//                   onBlur={handleBlur}
//                   value={values.status}
//                 >
//                   {BaseFilter.status.options.map((option) =><option value={option.value}>{option.label}</option>)}
                
//                 </select>
//                 <small className="form-text text-muted">
//                  {BaseFilter.status.label}
//                 </small>
//               </div>
//               <div className="col-lg-2">
//                 <select
//                   className="form-control"
//                   placeholder={BaseFilter.type.placeholder}
//                   name={BaseFilter.type.name}
//                   onBlur={handleBlur}
//                   onChange={(e) => {
//                     setFieldValue(BaseFilter.type.name, e.target.value);
//                     handleSubmit();
//                   }}
//                   value={values.type}
//                 >
//                     {BaseFilter.type.options.map((option) =><option value={option.value}>{option.label}</option>)}
//                 </select>
//                 <small className="form-text text-muted">
//                   {BaseFilter.type.label}
//                 </small>
//               </div>
//               <div className="col-lg-2">
//                 <input
//                   type="text"
//                   className="form-control"
//                   name={BaseFilter.searchText.name}
//                   placeholder={BaseFilter.searchText.placeholder}
//                   onBlur={handleBlur}
//                   value={values.searchText}
//                   onChange={(e) => {
//                     setFieldValue(BaseFilter.searchText.name, e.target.value);
//                     handleSubmit();
//                   }}
//                 />
//                 <small className="form-text text-muted">
//                   {BaseFilter.searchText.label}
//                 </small>
//               </div>
//             </div>
//           </form>
//         )}
//       </Formik>
//     </>
//   );
// }
