// import React, { useEffect } from "react";
// import { shallowEqual, useSelector } from "react-redux";
// import { LoadingDialog } from "../../../../../../_metronic/_partials/controls";

// export function CompLoadingDialog() {
//   //  Redux state
//   //TODO:component redux state name need to changed here
//   const { isLoading } = useSelector(
//     (state) => ({ isLoading: state.rents.listLoading }),
//     shallowEqual
//   );
//   // looking for loading/dispatch
//   useEffect(() => {}, [isLoading]);
//   return <LoadingDialog isLoading={isLoading} text="Loading ..." />;
// }
