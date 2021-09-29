// import React, { useMemo } from "react";
// import { useUIContext } from "../UIContext";

// export function Grouping() {
//   // UI Context
//   const uiContext = useUIContext();
//   const uiProps = useMemo(() => {
//     return {
//       ids: uiContext.ids,
//       setIds: uiContext.setIds,
//       openDeleteDialog: uiContext.openDeleteDialog,
//       openFetchDialog: uiContext.openFetchDialog,
//       openUpdateStatusDialog: uiContext.openUpdateStatusDialog,
//     };
//   }, [uiContext]);

//   return (
//     <div className="form">
//       <div className="row align-items-center form-group-actions margin-top-20 margin-bottom-20">
//         <div className="col-xl-12">
//           <div className="form-group form-group-inline">
//             <div className="form-label form-label-no-wrap">
//               <label className="font-bold font-danger">
//                 <span>
//                   Selected records count: <b>{uiProps.ids.length}</b>
//                 </span>
//               </label>
//             </div>
//             <div>
//               <button
//                 type="button"
//                 className="btn btn-danger font-weight-bolder font-size-sm"
//                 onClick={uiProps.openDeleteDialog}
//               >
//                 <i className="fa fa-trash"></i> Delete All
//               </button>
//               &nbsp;
//               <button
//                 type="button"
//                 className="btn btn-light-primary font-weight-bolder font-size-sm"
//                 onClick={uiProps.openFetchDialog}
//               >
//                 <i className="fa fa-stream"></i> Fetch Selected
//               </button>
//               &nbsp;
//               <button
//                 type="button"
//                 className="btn btn-light-primary font-weight-bolder font-size-sm"
//                 onClick={uiProps.openUpdateStatusDialog}
//               >
//                 <i className="fa fa-sync-alt"></i> Update Status
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
