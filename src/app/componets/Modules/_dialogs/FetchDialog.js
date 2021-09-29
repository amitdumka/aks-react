// import React, { useEffect, useMemo } from "react";
// import { Modal } from "react-bootstrap";
// import { shallowEqual, useSelector } from "react-redux";

// import { useUIContext } from "../UIContext";

// const selectedRents = (entities, ids) => {
//   const _rents = [];
//   ids.forEach((id) => {
//     const rent = entities.find((el) => el.id === id);
//     if (rent) {
//       _rents.push(rent);
//     }
//   });
//   return _rents;
// };

// export function FetchDialog({ show, onHide }) {
//   // Rents UI Context
//   const rentsUIContext = useUIContext();
//   const rentsUIProps = useMemo(() => {
//     return {
//       ids: rentsUIContext.ids,
//     };
//   }, [rentsUIContext]);

//   // Rents Redux state
//   const { rents } = useSelector(
//     (state) => ({
//       rents: selectedRents(state.rents.entities, rentsUIProps.ids),
//     }),
//     shallowEqual
//   );

//   // if rents weren't selected we should close modal
//   useEffect(() => {
//     if (!rentsUIProps.ids || rentsUIProps.ids.length === 0) {
//       onHide();
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [rentsUIProps.ids]);

//   return (
//     <Modal
//       show={show}
//       onHide={onHide}
//       aria-labelledby="example-modal-sizes-title-lg"
//     >
//       <Modal.Header closeButton>
//         <Modal.Title id="example-modal-sizes-title-lg">
//           Fetch selected elements
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <table className="table table table-head-custom table-vertical-center overflow-hidden">
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>STATUS</th>
//               <th>CUSTOMER</th>
//             </tr>
//           </thead>
//           <tbody>
//             {rents.map((rent) => (
//               <tr key={`id${rent.id}`}>
//                 <td>{rent.id}</td>
//                 <td>
//                   <span className="ml-3">
//                     {rent.lastName}, {rent.firstName}
//                   </span>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </Modal.Body>
//       <Modal.Footer>
//         <div>
//           <button
//             type="button"
//             onClick={onHide}
//             className="btn btn-light btn-elevate"
//           >
//             Cancel
//           </button>
//           <> </>
//           <button
//             type="button"
//             onClick={onHide}
//             className="btn btn-primary btn-elevate"
//           >
//             Ok
//           </button>
//         </div>
//       </Modal.Footer>
//     </Modal>
//   );
// }
